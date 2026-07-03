/* ============================================================
   calcs-gaso.js — Leitor de Gasometria Arterial (ácido-base)
   Interpreta: acidemia/alcalemia -> distúrbio primário ->
   compensação esperada (fórmulas) -> ânion-gap + delta-delta ->
   causas prováveis -> conduta. sis:"resp".
   Fontes: fórmula de Winter; compensações clássicas; Henderson-
   Hasselbalch p/ checagem de coerência (Harrison / nefrologia).
   ============================================================ */
(function(){
function n1(x){ return Math.round(x*10)/10; }
function n2(x){ return Math.round(x*100)/100; }

function analisar(v){
  var pH=v.ph, co2=v.pco2, hco3=v.hco3;
  if(pH==null||co2==null||hco3==null) return null;
  var na=v.na, cl=v.cl, alb=v.alb, po2=v.po2;
  var tempo=(v.tempo==null)?0:v.tempo;   // 0 não sei, 1 agudo, 2 crônico

  var acido=pH<7.35, alcal=pH>7.45, normalpH=!acido&&!alcal;
  var co2A=co2>45, co2B=co2<35, hco3A=hco3>26, hco3B=hco3<22;

  // --- coerência Henderson-Hasselbalch ---
  var alerta="";
  if(co2>0 && hco3>0){
    var phCalc = 6.1 + Math.log(hco3/(0.03*co2))/Math.LN10;
    if(Math.abs(phCalc-pH) > 0.06)
      alerta = "⚠ VALORES POSSIVELMENTE INCOERENTES: pH informado ("+n2(pH)+") difere do calculado por Henderson-Hasselbalch ("+n2(phCalc)+") — conferir digitação/amostra antes de decidir.";
  }

  // --- ânion-gap (se Na e Cl) ---
  var agc=null, hagma=false, agTxt=null;
  if(na!=null && cl!=null){
    var ag = na - cl - hco3;
    agc = (alb!=null)? ag + 2.5*(4-alb) : ag;
    hagma = agc>12;
    agTxt = hagma
      ? "Ânion-gap ALTO = "+n1(agc)+(alb!=null?" (corrigido p/ albumina)":"")+" → acidose de AG alto."
      : "Ânion-gap normal = "+n1(agc)+(alb!=null?" (corrigido)":"")+" → padrão hiperclorêmico.";
  }

  // --- distúrbio primário ---
  var side = pH<7.40? "ac" : pH>7.40? "al" : (hco3B||co2A?"ac":"al");
  var prim;
  if(side==="ac"){
    if(hco3B && co2A) prim="MISTO_AC";
    else if(hco3B) prim="MAC";
    else if(co2A) prim="RAC";
    else prim="MAC";
  } else {
    if(hco3A && co2B) prim="MISTO_AL";
    else if(hco3A) prim="MAL";
    else if(co2B) prim="RAL";
    else prim="MAL";
  }
  if(normalpH && !co2A && !co2B && !hco3A && !hco3B) prim="NORMAL";

  var scoreDx, dx, comp="", extra="", cor="warn";

  if(prim==="MAC" || prim==="MISTO_AC"){
    scoreDx="Acidose metabólica"; dx=scoreDx;
    var e=1.5*hco3+8;
    if(co2>e+2) comp="pCO₂ "+n1(co2)+" > esperado ("+n1(e-2)+"–"+n1(e+2)+" por Winter) → ACIDOSE RESPIRATÓRIA associada.";
    else if(co2<e-2) comp="pCO₂ "+n1(co2)+" < esperado ("+n1(e-2)+"–"+n1(e+2)+") → ALCALOSE RESPIRATÓRIA associada.";
    else comp="pCO₂ "+n1(co2)+" dentro do esperado ("+n1(e-2)+"–"+n1(e+2)+", Winter) → compensação respiratória adequada.";
    if(agTxt){
      extra=agTxt;
      if(hagma){
        dx+=" de ânion-gap alto";
        if((24-hco3)>0){
          var delta=(agc-12)/(24-hco3);
          if(delta<0.8) extra+=" Delta-delta "+n1(delta)+" (<1) → coexiste acidose de AG normal.";
          else if(delta<=2) extra+=" Delta-delta "+n1(delta)+" (1–2) → acidose de AG alto pura.";
          else extra+=" Delta-delta "+n1(delta)+" (>2) → coexiste alcalose metabólica (ou acidose resp. crônica).";
        }
        extra+=" Causas (GOLD-MARK): lactato (choque/sepse/isquemia/metformina), cetoacidose (DKA/alcoólica/jejum), uremia, metanol/etilenoglicol, salicilato, propilenoglicol.";
      } else {
        dx+=" de ânion-gap normal";
        extra+=" Causas: diarreia, acidose tubular renal, fístula, acetazolamida, excesso de SF 0,9%.";
      }
    } else {
      extra="Informe Na⁺ e Cl⁻ para o ânion-gap (separa DKA/lactato/uremia de diarreia/ATR).";
    }
    var condMAC="CONDUTA: tratar a CAUSA. Lactato↑ → restaurar perfusão, tratar sepse/choque/isquemia. Cetoacidose → volume + insulina + repor K⁺. Uremia → avaliar diálise. Bicarbonato de Na⁺: reservar p/ pH<7,1 com instabilidade, hipercalemia grave ou intox. (salicilato/metanol) — controverso, não trata a causa.";
    cor = pH<7.20?"crit":"warn";
    return finalize(prim,scoreDx,dx,comp,extra,cor,condMAC);
  }
  if(prim==="MAL" || prim==="MISTO_AL"){
    scoreDx="Alcalose metabólica"; dx=scoreDx;
    var em=40+0.7*(hco3-24);
    if(co2>em+2) comp="pCO₂ "+n1(co2)+" > esperado ("+n1(em-2)+"–"+n1(em+2)+") → retenção associada (hipoventilação exagerada / acidose respiratória).";
    else if(co2<em-2) comp="pCO₂ "+n1(co2)+" < esperado ("+n1(em-2)+"–"+n1(em+2)+") → ALCALOSE RESPIRATÓRIA associada.";
    else comp="pCO₂ "+n1(co2)+" dentro do esperado ("+n1(em-2)+"–"+n1(em+2)+") → compensação respiratória adequada.";
    extra="Causas: vômito/SNG, diuréticos (tiazídico/alça), hipocalemia, hipovolemia (contração), hiperaldosteronismo/corticoide. Maioria é CLORO-RESPONSIVA.";
    var condMAL="CONDUTA: cloro-responsiva (Cl⁻ urinário baixo — vômito/diurético) → SF 0,9% + KCl corrige. Ajustar/suspender diurético. Cloro-resistente (HAS, hiperaldosteronismo) → investigar endócrino; SF não resolve.";
    cor = pH>7.55?"crit":"warn";
    return finalize(prim,scoreDx,dx,comp,extra,cor,condMAL);
  }
  if(prim==="RAC"){
    scoreDx="Acidose respiratória"+(tempo===2?" crônica":tempo===1?" aguda":""); dx=scoreDx;
    if(tempo===0){
      comp="HCO₃⁻ "+n1(hco3)+". Esperado: AGUDO ~"+n1(24+(co2-40)/10)+" | CRÔNICO ~"+n1(24+3.5*(co2-40)/10)+". (Informe agudo/crônico p/ ver se há distúrbio metabólico associado.)";
    } else {
      var er = tempo===2? 24+3.5*((co2-40)/10) : 24+((co2-40)/10);
      if(hco3>er+2) comp="HCO₃⁻ "+n1(hco3)+" > esperado (~"+n1(er)+") → ALCALOSE METABÓLICA associada.";
      else if(hco3<er-2) comp="HCO₃⁻ "+n1(hco3)+" < esperado (~"+n1(er)+") → ACIDOSE METABÓLICA associada.";
      else comp="HCO₃⁻ "+n1(hco3)+" compatível (~"+n1(er)+") → compensação "+(tempo===2?"renal crônica":"aguda")+" adequada.";
    }
    extra="Causas (hipoventilação): DPOC/asma grave, depressão do SNC (opioide/BZD/sedativo), doença neuromuscular, obesidade-hipoventilação, tórax, fadiga ventilatória.";
    var condRAC="CONDUTA: melhorar a VENTILAÇÃO. Broncodilatador/corticoide na obstrução; reverter sedação (naloxona p/ opioide; flumazenil com cautela); VNI (BiPAP) na retenção com acidose; IOT se rebaixamento/falência. ⚠ DPOC retentor: O₂ titulado, alvo SatO₂ 88–92% (hiperóxia piora a hipercapnia).";
    cor = pH<7.20?"crit":"warn";
    return finalize(prim,scoreDx,dx,comp,extra,cor,condRAC);
  }
  if(prim==="RAL"){
    scoreDx="Alcalose respiratória"+(tempo===2?" crônica":tempo===1?" aguda":""); dx=scoreDx;
    if(tempo===0){
      comp="HCO₃⁻ "+n1(hco3)+". Esperado: AGUDO ~"+n1(24-2*(40-co2)/10)+" | CRÔNICO ~"+n1(24-4*(40-co2)/10)+".";
    } else {
      var el = tempo===2? 24-4*((40-co2)/10) : 24-2*((40-co2)/10);
      if(hco3<el-2) comp="HCO₃⁻ "+n1(hco3)+" < esperado (~"+n1(el)+") → ACIDOSE METABÓLICA associada.";
      else if(hco3>el+2) comp="HCO₃⁻ "+n1(hco3)+" > esperado (~"+n1(el)+") → ALCALOSE METABÓLICA associada.";
      else comp="HCO₃⁻ "+n1(hco3)+" compatível (~"+n1(el)+") → compensação adequada.";
    }
    extra="Causas (hiperventilação): dor/ansiedade, hipoxemia, TEP, sepse inicial, febre, gravidez, altitude, hepatopatia, salicilato inicial.";
    var condRAL="CONDUTA: tratar a CAUSA (analgesia, ansiedade, corrigir hipóxia, investigar TEP/sepse). Raramente requer tratamento direto.";
    cor = pH>7.55?"crit":"warn";
    return finalize(prim,scoreDx,dx,comp,extra,cor,condRAL);
  }
  // NORMAL
  scoreDx="Sem distúrbio evidente"; dx="Gasometria sem distúrbio ácido-base evidente";
  comp="pH, pCO₂ e HCO₃⁻ dentro das faixas de referência.";
  extra="Distúrbios mistos podem ter pH normal — se a clínica sugere, reavaliar com Na⁺/Cl⁻ (ânion-gap).";
  return finalize("NORMAL",scoreDx,dx,comp,extra,"ok","");

  // ---- montagem final (fecha sobre as variáveis externas) ----
  function finalize(prim,scoreDx,dx,comp,extra,cor,cond){
    // distúrbio misto: reescreve headline
    if(prim==="MISTO_AC"){ dx="Acidose MISTA (metabólica + respiratória)"; scoreDx="Acidose mista"; comp="HCO₃⁻ baixo E pCO₂ alto empurram o pH para ácido → dois distúrbios acidificantes. "+comp; cor=pH<7.20?"crit":"warn"; }
    if(prim==="MISTO_AL"){ dx="Alcalose MISTA (metabólica + respiratória)"; scoreDx="Alcalose mista"; comp="HCO₃⁻ alto E pCO₂ baixo empurram o pH para alcalino → dois distúrbios alcalinizantes. "+comp; cor=pH>7.55?"crit":"warn"; }

    // HAGMA mascarada (AG alto quando o primário não é acidose metabólica)
    var hidden="";
    if(hagma && prim!=="MAC" && prim!=="MISTO_AC")
      hidden="⚠ Apesar do primário, o ânion-gap está ALTO ("+n1(agc)+") → coexiste ACIDOSE METABÓLICA de AG alto (mascarada). Pensar: lactato/sepse, cetoacidose, salicilato, toxinas.";

    var oxi="";
    if(po2!=null){
      if(po2<60) oxi="Oxigenação: pO₂ "+n1(po2)+" → HIPOXEMIA (insuf. resp. tipo I se pCO₂ normal/baixa; tipo II se pCO₂ alta). Ofertar O₂ e investigar.";
      else if(po2<80) oxi="Oxigenação: pO₂ "+n1(po2)+" → limítrofe.";
      else oxi="Oxigenação: pO₂ "+n1(po2)+" → adequada.";
    }

    var risco = (prim==="NORMAL") ? dx : (dx + (/adequada|dentro|compatível/.test(comp) ? " (compensação adequada)" : ""));

    var p=[];
    if(alerta) p.push(alerta);
    p.push("① "+(acido?"ACIDEMIA":alcal?"ALCALEMIA":"pH normal")+" (pH "+n2(pH)+")");
    p.push("② Distúrbio: "+dx+".");
    if(comp) p.push("③ Compensação: "+comp);
    if(extra) p.push("④ "+extra);
    if(hidden) p.push(hidden);
    if(oxi) p.push("⑤ "+oxi);
    if(cond) p.push(cond);
    p.push("⚠ Interpretação automática — correlacionar com a clínica; a decisão é do médico.");

    return { score:scoreDx, risco:risco, acao:p.join("\n▸ "), cor:cor };
  }
}

CALCS.push({
  id:"gaso", contexto:["ubs","pa"], sis:"resp",
  nome:"Gasometria Arterial — Leitor Ácido-Base",
  desc:"pH, pCO₂ e HCO₃⁻ (Na⁺/Cl⁻ opcionais p/ ânion-gap). Diz o distúrbio, a compensação (fórmulas de Winter/clássicas), causas e conduta.",
  fields:[
    {tipo:"num", id:"ph", label:"pH", hint:"7,35–7,45"},
    {tipo:"num", id:"pco2", label:"pCO₂", hint:"35–45", unidade:"mmHg"},
    {tipo:"num", id:"hco3", label:"HCO₃⁻ (bicarbonato)", hint:"22–26", unidade:"mEq/L"},
    {tipo:"select", id:"tempo", label:"Se for distúrbio respiratório: agudo ou crônico?", opts:[{val:0,label:"Não sei / não aplicável"},{val:1,label:"Agudo (<24–48h)"},{val:2,label:"Crônico (dias+, ex.: DPOC)"}]},
    {tipo:"num", id:"na", label:"Na⁺ (opcional — ânion-gap)", hint:"135–145", unidade:"mEq/L"},
    {tipo:"num", id:"cl", label:"Cl⁻ (opcional — ânion-gap)", hint:"98–106", unidade:"mEq/L"},
    {tipo:"num", id:"alb", label:"Albumina (opcional — corrige o AG)", hint:"3,5–5,0", unidade:"g/dL"},
    {tipo:"num", id:"po2", label:"pO₂ (opcional — oxigenação)", hint:"80–100", unidade:"mmHg"}
  ],
  calc:function(v){ var r=analisar(v); return r? r.score : "—"; },
  interp:function(s,v){
    if(v.ph==null||v.pco2==null||v.hco3==null) return {risco:"—",acao:"Preencha ao menos pH, pCO₂ e HCO₃⁻.",cor:"info"};
    var r=analisar(v); return {risco:r.risco, acao:r.acao, cor:r.cor};
  }
});
})();

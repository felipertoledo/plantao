/* ===========================================================
   VOVÔMINIC DOUTÔ — Tabela CID-10 → CIAP-2 (Wonca)
   Mapeamento dos códigos mais comuns em APS e PA
   Auto-aplicado em PATOLOGIAS que tenham CID mas não CIAP
   =========================================================== */

const CID_CIAP_MAP = {
  // === A — Geral / Inespecífico ===
  "R50": "A03",     // Febre
  "R53": "A04",     // Fadiga / fraqueza
  "R51": "N01",     // Cefaleia
  "T78": "A92",     // Alergia / reação adversa
  "T78.4": "A92",   // Alergia inespecífica
  "T78.0": "A92",   // Anafilaxia
  "T88": "A87",     // Complicações cuidados médicos
  "R55": "A06",     // Síncope
  "R56": "N07",     // Convulsões

  // === B — Sangue / Sistema linfático ===
  "D50": "B81",     // Anemia ferropriva
  "D51": "B81",     // Anemia B12
  "D52": "B81",     // Anemia por folato
  "D64": "B82",     // Anemia (outras)
  "D69": "B83",     // Púrpura trombocitopênica
  "D70": "B84",     // Neutropenia
  "C81": "B72",     // Linfoma Hodgkin
  "C85": "B72",     // Linfoma não-Hodgkin
  "C90": "B73",     // Mieloma múltiplo
  "C91": "B74",     // Leucemia linfoide
  "C92": "B74",     // Leucemia mieloide

  // === D — Aparelho digestivo ===
  "K21": "D84",     // DRGE
  "K25": "D85",     // Úlcera gástrica
  "K26": "D86",     // Úlcera duodenal
  "K29": "D87",     // Gastrite
  "K30": "D87",     // Dispepsia funcional
  "K35": "D88",     // Apendicite aguda
  "K40": "D89",     // Hérnia inguinal
  "K42": "D91",     // Hérnia umbilical
  "K56": "D99",     // Íleo / obstrução
  "K57": "D92",     // Diverticulose
  "K58": "D93",     // SII
  "K59": "D12",     // Constipação
  "K59.1": "D11",   // Diarreia funcional
  "K70": "D97",     // Hepatopatia alcoólica
  "K72": "D97",     // Insuficiência hepática
  "K74": "D97",     // Cirrose
  "K80": "D98",     // Colelitíase
  "K81": "D98",     // Colecistite
  "K85": "D99",     // Pancreatite aguda
  "K86": "D99",     // Pancreatite crônica
  "K92": "D14",     // Hematêmese / melena
  "A09": "D11",     // Gastroenterite
  "A08": "D11",     // Viroses intestinais
  "B82": "D96",     // Verminose

  // === F — Olho ===
  "H10": "F70",     // Conjuntivite
  "H16": "F73",     // Ceratite
  "H20": "F73",     // Uveíte
  "H40": "F93",     // Glaucoma
  "H25": "F92",     // Catarata
  "H52": "F91",     // Vícios refração

  // === H — Ouvido ===
  "H60": "H70",     // Otite externa
  "H65": "H71",     // Otite média não-supurativa
  "H66": "H71",     // Otite média supurativa
  "H81": "H82",     // Vertigem / VPPB
  "H90": "H86",     // Hipoacusia
  "H93": "H03",     // Zumbido

  // === K — Cardiovascular ===
  "I10": "K86",     // HAS
  "I11": "K86",     // HAS com lesão cardíaca
  "I12": "K86",     // HAS com lesão renal
  "I15": "K87",     // HAS secundária
  "I20": "K74",     // Angina
  "I21": "K75",     // IAM
  "I22": "K75",     // IAM (reinfarto)
  "I25": "K76",     // Doença coronariana crônica
  "I26": "K93",     // TEP
  "I34": "K83",     // Insuficiência mitral
  "I35": "K83",     // Doença valvar aórtica
  "I42": "K84",     // Cardiomiopatia
  "I48": "K78",     // FA / flutter
  "I47": "K79",     // TSV / TV
  "I49": "K80",     // Outras arritmias
  "I50": "K77",     // Insuficiência cardíaca
  "I51": "K84",     // Outras DCV
  "I63": "K90",     // AVC isquêmico
  "I61": "K90",     // AVC hemorrágico
  "I64": "K90",     // AVC NE
  "I65": "K91",     // Oclusão pré-cerebral
  "I70": "K92",     // Aterosclerose
  "I71": "K99",     // Aneurisma aórtico
  "I73": "K92",     // Doença vascular periférica
  "I74": "K94",     // Embolia / trombose arterial
  "I80": "K94",     // Flebite / tromboflebite (TVP)
  "I83": "K95",     // Varizes MI
  "I84": "K96",     // Hemorroidas
  "I95": "K88",     // Hipotensão postural
  "R07": "K01",     // Dor precordial
  "R00": "K05",     // Palpitação
  "R03": "K85",     // PA elevada sem dx
  "R55.0": "K88",   // Síncope

  // === L — Musculoesquelético ===
  "M05": "L88",     // Artrite reumatoide
  "M06": "L88",     // Outras AR
  "M10": "T92",     // Gota (também T)
  "M13": "L99",     // Outras artrites
  "M15": "L91",     // Poliosteoartrose
  "M17": "L90",     // Gonartrose
  "M19": "L90",     // Outras artroses
  "M25": "L99",     // Outros transtornos articulares
  "M40": "L84",     // Cifose
  "M41": "L85",     // Escoliose
  "M42": "L84",     // Osteocondrose
  "M47": "L84",     // Espondilose
  "M50": "L83",     // Cervicalgia c/ radiculop.
  "M51": "L86",     // Lombalgia c/ radiculop.
  "M53": "L83",     // Cervicalgia
  "M54": "L03",     // Lombalgia / dor coluna
  "M54.5": "L03",   // Lombalgia
  "M65": "L87",     // Sinovite/tenossinovite
  "M70": "L87",     // Doenças por sobrecarga
  "M75": "L08",     // Lesões do ombro
  "M77": "L17",     // Epicondilite
  "M79": "L18",     // Fibromialgia / mialgia
  "M80": "L95",     // Osteoporose c/ fratura
  "M81": "L95",     // Osteoporose sem fratura
  "M86": "L70",     // Osteomielite
  "S00": "L72",     // Trauma superficial cabeça
  "S30": "L20",     // Trauma superficial abdome
  "S60": "L70",     // Trauma membro superior
  "S80": "L72",     // Trauma membro inferior

  // === N — Neurológico ===
  "G40": "N88",     // Epilepsia
  "G41": "N07",     // Estado de mal epiléptico
  "G43": "N89",     // Enxaqueca
  "G44": "N95",     // Outras cefaleias
  "G45": "K89",     // AIT
  "G47": "P06",     // Distúrbios do sono
  "G56": "N93",     // Mononeuropatias (túnel do carpo)
  "G62": "N94",     // Polineuropatia
  "G20": "N87",     // Parkinson
  "G30": "P70",     // Demência Alzheimer
  "G31": "P70",     // Outras demências
  "G35": "N86",     // Esclerose múltipla
  "R42": "N17",     // Vertigem / tontura
  "R47": "N19",     // Distúrbio fala

  // === P — Psicológico ===
  "F10": "P15",     // Álcool — uso/dependência
  "F11": "P19",     // Opioides
  "F17": "P17",     // Tabagismo
  "F19": "P19",     // Múltiplas substâncias
  "F20": "P72",     // Esquizofrenia
  "F25": "P73",     // Transtorno esquizoafetivo
  "F30": "P73",     // Mania
  "F31": "P73",     // Bipolar
  "F32": "P03",     // Episódio depressivo
  "F33": "P76",     // Depressão recorrente
  "F34": "P76",     // Distimia
  "F40": "P79",     // Fobias
  "F41": "P74",     // Ansiedade
  "F41.0": "P74",   // Pânico
  "F42": "P79",     // TOC
  "F43": "P02",     // Reação a estresse / luto
  "F43.1": "P82",   // TEPT
  "F44": "P75",     // Dissociativos
  "F45": "P75",     // Somatoformes
  "F50": "P86",     // Transtornos alimentares
  "F60": "P80",     // Personalidade
  "F84": "P24",     // TEA
  "F90": "P81",     // TDAH
  "R45": "P29",     // Sintoma do humor

  // === R — Respiratório ===
  "J00": "R74",     // IVAS / resfriado
  "J01": "R75",     // Sinusite
  "J02": "R76",     // Faringite
  "J03": "R76",     // Amigdalite
  "J04": "R77",     // Laringite
  "J11": "R80",     // Influenza
  "J18": "R81",     // Pneumonia
  "J20": "R78",     // Bronquite aguda
  "J21": "R78",     // Bronquiolite
  "J32": "R75",     // Sinusite crônica
  "J35": "R90",     // Hipertrofia adenoide
  "J44": "R95",     // DPOC
  "J45": "R96",     // Asma
  "J46": "R96",     // Asma — estado de mal
  "J93": "R99",     // Pneumotórax
  "J96": "R99",     // Insuf respiratória
  "R05": "R05",     // Tosse
  "R06": "R02",     // Dispneia
  "R09": "R07",     // Espirros / coriza
  "U07.1": "R83",   // COVID-19

  // === S — Pele ===
  "L01": "S84",     // Impetigo
  "L02": "S10",     // Abscesso
  "L03": "S76",     // Celulite
  "L04": "S70",     // Linfadenite
  "L08": "S99",     // Outras infecções
  "L20": "S87",     // Dermatite atópica
  "L21": "S86",     // Dermatite seborreica
  "L23": "S88",     // Dermatite de contato
  "L25": "S88",     // Dermatite NE
  "L29": "S02",     // Prurido
  "L30": "S88",     // Outros eczemas
  "L40": "S91",     // Psoríase
  "L42": "S99",     // Pitiríase rósea
  "L50": "S98",     // Urticária
  "L70": "S96",     // Acne
  "L72": "S93",     // Cisto sebáceo
  "L80": "S08",     // Vitiligo
  "L81": "S08",     // Pigmentação
  "B07": "S03",     // Verrugas virais
  "B35": "S74",     // Tinhas / dermatofitose
  "B36": "S75",     // Pitiríase versicolor
  "B37": "S75",     // Candidíase cutânea
  "B85": "S73",     // Pediculose
  "B86": "S72",     // Escabiose
  "B00": "S71",     // Herpes simples
  "B02": "S70",     // Herpes zóster
  "C44": "S77",     // CBC / CEC pele
  "C43": "S77",     // Melanoma
  "L57": "S80",     // Lesões actínicas

  // === T — Metabólico / Endócrino / Nutricional ===
  "E03": "T86",     // Hipotireoidismo
  "E04": "T81",     // Bócio
  "E05": "T85",     // Hipertireoidismo
  "E06": "T81",     // Tireoidite
  "E07": "T81",     // Outros distúrbios tireoide
  "E10": "T89",     // DM1
  "E11": "T90",     // DM2
  "E14": "T90",     // DM NE
  "E16": "T87",     // Hipoglicemia
  "E22": "T81",     // Hiperfunção hipofisária
  "E23": "T81",     // Hipofunção hipofisária
  "E27": "T99",     // Adrenal
  "E66": "T82",     // Obesidade
  "E78": "T93",     // Dislipidemia
  "E83.5": "T99",   // Distúrbios cálcio
  "E86": "T11",     // Desidratação
  "E87": "T99",     // Outros eletrolíticos

  // === U — Geniturinário ===
  "N10": "U70",     // Nefrite tubulointersticial
  "N11": "U70",     // Pielonefrite crônica
  "N17": "U99",     // IRA
  "N18": "U99",     // DRC
  "N19": "U99",     // IR NE
  "N20": "U95",     // Cálculo renal
  "N21": "U95",     // Cálculo TU
  "N30": "U71",     // Cistite
  "N39": "U71",     // ITU NE
  "N40": "Y85",     // HPB
  "N45": "Y74",     // Orquite/epididimite
  "N48": "Y04",     // Patologias do pênis
  "N49": "Y75",     // Patologias órgãos genitais
  "N60": "X88",     // Mastopatia benigna
  "N70": "X74",     // Salpingite
  "N72": "X85",     // Cervicite
  "N73": "X74",     // DIP
  "N76": "X84",     // Vulvovaginite
  "N80": "X99",     // Endometriose
  "N81": "X87",     // Prolapso genital feminino
  "N85": "X99",     // Outros distúrbios uterinos
  "N86": "X85",     // Erosão e ectrópio do colo
  "N87": "X85",     // Displasia do colo
  "N89": "X99",     // Outros não inflamatórios da vagina
  "N91": "X05",     // Amenorreia
  "N92": "X06",     // Menstruação excessiva
  "N93": "X08",     // Sangramento uterino anormal
  "N94": "X02",     // Dor pélvica
  "N95": "X11",     // Climatério / menopausa
  "N97": "W15",     // Infertilidade feminina
  "Z30": "W11",     // Contracepção
  "Z31": "W15",     // Aconselhamento procriação
  "Z34": "W78",     // Pré-natal normal
  "Z35": "W84",     // Gestação alto risco
  "Z37": "W90",     // Resultado parto
  "Z39": "W18",     // Pós-parto / puerpério

  // === W — Gravidez, parto, planejamento ===
  "O00": "W80",     // Gravidez ectópica
  "O03": "W82",     // Abortamento espontâneo
  "O09": "W78",     // Pré-natal
  "O10": "W81",     // HAS preexistente em gestação
  "O11": "W81",     // HAS + pré-eclâmpsia sobreposta
  "O13": "W81",     // HAS gestacional
  "O14": "W81",     // Pré-eclâmpsia
  "O15": "W81",     // Eclâmpsia
  "O24": "W85",     // DMG
  "O60": "W92",     // Parto pré-termo
  "O70": "W94",     // Laceração perineal
  "O72": "W17",     // Hemorragia pós-parto
  "O80": "W90",     // Parto normal
  "P00": "A98",     // Cuidados RN
  "P07": "A91",     // Baixo peso ao nascer
  "P08": "A91",     // RN GIG
  "P59": "A91",     // Icterícia neonatal
  "Z00": "A97",     // Exame de saúde
  "Z01": "A97",     // Exames específicos
  "Z03": "A98",     // Observação por suspeita
  "Z11": "A98",     // Exame rastreio doença infecciosa
  "Z12": "A98",     // Rastreio neoplasia
  "Z13": "A98",     // Rastreio outras
  "Z23": "A44",     // Vacinação
  "Z24": "A44",     // Vacinação prevenção certas doenças
  "Z25": "A44",     // Vacinação viral
  "Z27": "A44",     // Vacinação combinada
  "Z71": "Z14",     // Aconselhamento
  "Z72": "Z14",     // Estilo de vida

  // === X — Tegumento / Mama / Tópicos femininos ===

  // === Y — Tópicos masculinos ===

  // === Z — Social ===
  "Z55": "Z01",     // Problemas educacionais
  "Z56": "Z05",     // Problemas relacionados ao trabalho
  "Z57": "Z08",     // Exposição ocupacional
  "Z58": "Z29",     // Problemas ambientais
  "Z59": "Z03",     // Habitação / situação econômica
  "Z60": "Z04",     // Problemas sociais
  "Z61": "Z13",     // Eventos negativos na infância
  "Z62": "Z16",     // Problemas com paternidade
  "Z63": "Z16",     // Outros problemas familiares
  "Z64": "Z13",     // Problemas psicossociais
  "Z65": "Z25",     // Outros problemas psicossociais
  "Z70": "Z14",     // Aconselhamento sexual
  "Z73": "Z29",     // Problemas estilo de vida
  "Z76": "A98",     // Pessoas em contato com saúde
};


/* Fallback: inferência por palavra-chave no nome da patologia (CIAP-2 mais provável) */
const NAME_CIAP_PATTERNS = [
  // Cardio
  [/\b(has|hipertens(ã|a)o arterial|press(ã|a)o alta)\b/i, "K86"],
  [/\b(infarto|iam|s(í|i)ndrome coronariana)\b/i, "K75"],
  [/\b(angina)\b/i, "K74"],
  [/\b(insufici(e|ê)ncia card(í|i)aca|icc|ic descomp)\b/i, "K77"],
  [/\b(edema agudo de pulm(ã|a)o|eap)\b/i, "K77"],
  [/\b(fibrila(çã|ca)o atrial|flutter|fa\b)/i, "K78"],
  [/\b(taquicardia)\b/i, "K79"],
  [/\b(bradi(arritmia|cardia)|bav|bloqueio av)\b/i, "K80"],
  [/\b(avc|acidente vascular|ave|stroke)\b/i, "K90"],
  [/\b(ait|isquemia cerebral transit)/i, "K89"],
  [/\b(tep|embolia pulmonar|tromboembolismo)\b/i, "K93"],
  [/\b(tvp|trombose venosa)\b/i, "K94"],
  [/\b(dissec(çã|ca)o)\b/i, "K99"],
  [/\b(crise hipertensiva|emerg(e|ê)ncia hipertensiva|ehp)\b/i, "K86"],
  [/\b(s(í|i)ncope)\b/i, "K88"],
  [/\b(pericardite|tamponamento)\b/i, "K83"],
  [/\b(endocardite)\b/i, "K70"],
  
  // Resp
  [/\b(asma)\b/i, "R96"],
  [/\b(dpoc|doen(çã|ca) pulmonar obstr)/i, "R95"],
  [/\b(pneumonia)\b/i, "R81"],
  [/\b(bronquite|bronquiolite)\b/i, "R78"],
  [/\b(sinusite)\b/i, "R75"],
  [/\b(faringite|amigdalite)\b/i, "R76"],
  [/\b(laringite|crupe)\b/i, "R77"],
  [/\b(influenza|gripe)\b/i, "R80"],
  [/\b(covid)/i, "R83"],
  [/\b(tuberculose|tb pulmonar)\b/i, "A70"],
  [/\b(pneumot(ó|o)rax)\b/i, "R99"],
  [/\b(insuf(ic)? respirat(ó|o)ria|irpa|irda)\b/i, "R99"],
  [/\b(derrame pleural)\b/i, "R82"],
  
  // GI
  [/\b(drge|refluxo gastr)/i, "D84"],
  [/\b(gastrite|dispepsia)\b/i, "D87"],
  [/\b(úlcera|ulcera) gástrica\b/i, "D85"],
  [/\b(úlcera|ulcera) duodenal\b/i, "D86"],
  [/\b(apendicite)\b/i, "D88"],
  [/\b(diverticulite|diverticulose)\b/i, "D92"],
  [/\b(colecistite|colelit(í|i)ase)\b/i, "D98"],
  [/\b(pancreatite)\b/i, "D99"],
  [/\b(hepatite)\b/i, "D97"],
  [/\b(cirrose|insufici(e|ê)ncia hep(á|a)tica)\b/i, "D97"],
  [/\b(constipa(çã|ca)o)\b/i, "D12"],
  [/\b(diarreia|gastroenterite)\b/i, "D11"],
  [/\b(h(é|e)rnia)\b/i, "D89"],
  [/\b(obstru(çã|ca)o intestinal|íleo)\b/i, "D99"],
  [/\b(hda|hemorragia digestiva alta)\b/i, "D14"],
  [/\b(hdb|hemorragia digestiva baixa)\b/i, "D14"],
  [/\b(s(í|i)ndrome do intestino irrit(á|a)vel|sii)\b/i, "D93"],
  
  // Endo
  [/\b(diabetes|dm[12]?|dmg)\b/i, "T90"],
  [/\b(cad|cetoacidose)\b/i, "T89"],
  [/\b(ehh|estado hiperosm)/i, "T89"],
  [/\b(hipoglicemia)\b/i, "T87"],
  [/\b(hipotireoid)/i, "T86"],
  [/\b(hipertireoid|tireotox|graves)/i, "T85"],
  [/\b(obesidade)\b/i, "T82"],
  [/\b(dislipidemia|hipercolesterol)/i, "T93"],
  [/\b(osteoporose)\b/i, "L95"],
  
  // Renal/GU
  [/\b(itu|cistite|infec(çã|ca)o urin)/i, "U71"],
  [/\b(pielonefrite)\b/i, "U70"],
  [/\b(c(ó|o)lica renal|c(á|a)lculo renal|nefrolit)/i, "U95"],
  [/\b(irc|drc|doen(çã|ca) renal cr(ô|o)nica)\b/i, "U99"],
  [/\b(ira|injuria renal aguda)\b/i, "U99"],
  [/\b(hpb|hiperplasia prost(á|a)tica)\b/i, "Y85"],
  [/\b(parafimose)\b/i, "Y04"],
  
  // Neuro
  [/\b(cefaleia|enxaqueca|migr(â|a)nea)\b/i, "N89"],
  [/\b(epilepsia|convuls(ã|a)o|crise epil(é|e)ptica|estado de mal)/i, "N88"],
  [/\b(meningite|encefalite)\b/i, "N71"],
  [/\b(vertigem|labirintite|vppb)\b/i, "N17"],
  [/\b(parkinson)\b/i, "N87"],
  [/\b(demência|alzheimer)\b/i, "P70"],
  [/\b(t(ú|u)nel do carpo)\b/i, "N93"],
  [/\b(tce|trauma cr(â|a)nio)/i, "N79"],
  
  // Psiq
  [/\b(depress(ã|a)o)\b/i, "P03"],
  [/\b(ansiedade|p(â|a)nico)\b/i, "P74"],
  [/\b(esquizofrenia|psicose)\b/i, "P72"],
  [/\b(bipolar|mania)\b/i, "P73"],
  [/\b(tdah)\b/i, "P81"],
  [/\b(tea|autismo)\b/i, "P24"],
  [/\b(alcoolismo|abstin(e|ê)ncia alco(ó|o)lica|álcool)\b/i, "P15"],
  [/\b(tabagismo)\b/i, "P17"],
  [/\b(insônia|distúrbio sono)\b/i, "P06"],
  
  // Pele
  [/\b(eczema|dermatite at(ó|o)pica)\b/i, "S87"],
  [/\b(dermatite seborr)/i, "S86"],
  [/\b(dermatite de contato)\b/i, "S88"],
  [/\b(psoríase)\b/i, "S91"],
  [/\b(acne)\b/i, "S96"],
  [/\b(urticária)\b/i, "S98"],
  [/\b(impetigo)\b/i, "S84"],
  [/\b(celulite|erisipela)\b/i, "S76"],
  [/\b(abscesso (cut|sub|de pele))/i, "S10"],
  [/\b(escabiose|sarna)\b/i, "S72"],
  [/\b(pediculose|piolho)\b/i, "S73"],
  [/\b(tinha|micose)\b/i, "S74"],
  [/\b(herpes zóster)\b/i, "S70"],
  [/\b(herpes simples)\b/i, "S71"],
  [/\b(melanoma)\b/i, "S77"],
  [/\b(hanseníase|lepra)\b/i, "A78"],
  
  // Olho/ORL
  [/\b(conjuntivite)\b/i, "F70"],
  [/\b(glaucoma)\b/i, "F93"],
  [/\b(otite externa)\b/i, "H70"],
  [/\b(otite média|otite m)/i, "H71"],
  
  // Musc
  [/\b(lombalgia|dor lombar)\b/i, "L03"],
  [/\b(cervicalgia|dor cervical)\b/i, "L83"],
  [/\b(artrose|osteoartrose)\b/i, "L90"],
  [/\b(artrite reumatoide|ar\b)/i, "L88"],
  [/\b(gota)\b/i, "T92"],
  [/\b(fibromialgia)\b/i, "L18"],
  [/\b(entorse|distens(ã|a)o ligament)/i, "L77"],
  [/\b(fratura)\b/i, "L72"],
  
  // Infecto
  [/\b(sepse|choque s(é|e)ptico)\b/i, "A78"],
  [/\b(dengue)\b/i, "A77"],
  [/\b(chikungunya|zika)\b/i, "A77"],
  [/\b(malária)\b/i, "A73"],
  [/\b(leptospirose)\b/i, "A78"],
  [/\b(hiv|aids)\b/i, "B90"],
  [/\b(sífilis)\b/i, "X70"],
  [/\b(gonorreia|gonococo)\b/i, "X71"],
  [/\b(hpv|condiloma)\b/i, "X91"],
  
  // Hema
  [/\b(anemia ferropriva)\b/i, "B81"],
  [/\b(anemia)\b/i, "B82"],
  [/\b(trombocitopenia|p(ú|u)rpura)\b/i, "B83"],
  [/\b(neutropenia febril)\b/i, "B84"],
  [/\b(falciforme)\b/i, "B82"],
  
  // Trauma/Tox
  [/\b(queimadura)\b/i, "S14"],
  [/\b(intoxica(çã|ca)o)\b/i, "A86"],
  [/\b(picada de cobra|ofídico|serpente)\b/i, "A89"],
  [/\b(escorpi(ã|a)o)\b/i, "A89"],
  [/\b(aranha)\b/i, "A89"],
  [/\b(abelha|vespa|inseto)\b/i, "S12"],
  
  // Obst
  [/\b(pré-eclâmpsia|preeclampsia)\b/i, "W81"],
  [/\b(eclâmpsia|eclampsia)\b/i, "W81"],
  [/\b(hellp)\b/i, "W81"],
  [/\b(hpp|hemorragia p(ó|o)s-parto)\b/i, "W17"],
  [/\b(gesta(çã|ca)o ect(ó|o)pica|gravidez ect(ó|o)pica)\b/i, "W80"],
  [/\b(abortamento)\b/i, "W82"],
  [/\b(pré-natal|prenatal)\b/i, "W78"],
  [/\b(puerpério|puerperio)\b/i, "W18"],
  
  // Paliativos / oncologia
  [/\b(dor onco|oncológica)\b/i, "A28"],
  [/\b(náusea|n(á|a)usea)\b/i, "D09"],
  [/\b(delirium)\b/i, "P71"],
  [/\b(cuidados paliativos|último|terminal)\b/i, "A99"],

  // Adicionais — cobertura ampliada
  [/\bbradi/i, "K80"],
  [/\bparalisia.*bell|paralisia facial/i, "N91"],
  [/\bhsa|hemorragia subaracnoid/i, "K90"],
  [/\bs(í|i)ndrome serotonin|nms|síndrome neuropreptica/i, "P19"],
  [/\bepistaxe/i, "R06"],
  [/\bfaringoamigdal|amigdalite|faringite/i, "R76"],
  [/\bhemoptise/i, "R24"],
  [/\brinossinusite|sinusite/i, "R75"],
  [/\bsdra|ards|s(í|i)ndrome respirat(ó|o)ria aguda/i, "R99"],
  [/\babd(o|ô)men? agudo/i, "D01"],
  [/\bascite|pbe|peritonite/i, "D87"],
  [/\bcolangite/i, "D98"],
  [/\bencefalopatia hep(á|a)tica/i, "D97"],
  [/\bhemorroid/i, "K96"],
  [/\bnáusea|vômito|n(á|a)usea/i, "D09"],
  [/\b(úlcera|ulcera) p(é|e)ptica|h(\.| )pylori/i, "D85"],
  [/\bcandid(í|i)ase vulvovagin|candidíase vagin/i, "X72"],
  [/\bherpes genital/i, "X90"],
  [/\borqui(epididim|te)|epididimite/i, "Y74"],
  [/\bpriapismo/i, "Y04"],
  [/\breten(çã|ca)o urin(á|a)ria/i, "U08"],
  [/\bsangramento uterino|sua\b|sua aguda/i, "X08"],
  [/\btor(çã|ca)o testicular/i, "Y75"],
  [/\btricomon(í|i)ase/i, "X73"],
  [/\buretrite/i, "Y71"],
  [/\bvaginose bact/i, "X84"],
  [/\bcrise tireot(ó|o)xica|tempestade tireoid/i, "T85"],
  [/\bglicemia hospital/i, "T89"],
  [/\binsufici(e|ê)ncia adrenal|addison/i, "T99"],
  [/\bhipercalcemia|hipocalcemia/i, "T99"],
  [/\bhipercalemia|hipocalemia/i, "T99"],
  [/\bhipernatremia|hiponatremia/i, "T99"],
  [/\bhipo[\/-]?hiper.*magnesemia|hipomagn|hipermagn/i, "T99"],
  [/\brabdomi(ó|o)lise/i, "L99"],
  [/\babscesso periamigdal|quinsy/i, "R76"],
  [/\bdoen(çã|ca) de chagas|chagas/i, "A77"],
  [/\bfasce(í|i)te|fasciíte necrotiz/i, "S76"],
  [/\bfebre amarela/i, "A77"],
  [/\bleishmaniose/i, "A78"],
  [/\bp(é|e) diab(é|e)tico/i, "T90"],
  [/\bt(é|e)tano/i, "N73"],
  [/\baranha|aran(eí|ei)smo|loxosceles/i, "A89"],
  [/\bbotrópico|jararaca|crot(á|a)lico|cascavel|elap(í|i)dico|coral|laqu(é|e)tico|surucucu/i, "A89"],
  [/\bescorpionismo|escorpião/i, "A89"],
  [/\bmordedura/i, "S13"],
  [/\bcarv(ã|a)o ativado|descontamin/i, "A86"],
  [/\bcivd|coagulopatia intravascular|coagula(çã|ca)o intravascular/i, "B83"],
  [/\bconcentrado de h(e|ê)m(á|a)cias|transfus(ã|a)o sang/i, "B82"],
  [/\bcriopreciptiado|crioprecipitad/i, "B99"],
  [/\bplasma fresco/i, "B99"],
  [/\bconcentrado de plaquetas/i, "B83"],
  [/\brea(çã|ca)o transfusional/i, "A92"],
  [/\bgolpe de calor|hipertermia/i, "A88"],
  [/\bhipotermia/i, "A88"],
  [/\bqueimadura/i, "S14"],
  [/\btrauma abdomi/i, "L20"],
  [/\btrauma de t(ó|o)rax/i, "L24"],
  [/\bantiem(é|e)tico em gestante|n(á|a)usea.*gestante/i, "W78"],
  [/\bcandid(í|i)ase em gestant/i, "W78"],
  [/\bdor em gestante/i, "W78"],
  [/\baborto|aborto espont(â|a)neo|sangramento 1.* trimestre/i, "W82"],
  [/\bdip\b|doen(çã|ca) inflamat(ó|o)ria p(é|e)lvica/i, "X74"],
  [/\btor(çã|ca)o de anexo/i, "X99"],
  [/\bacatisia/i, "P19"],
  [/\bagita(çã|ca)o psicomot/i, "P98"],
  [/\bs(í|i)ndrome psic(ó|o)tica/i, "P72"],
  [/\btentativa de suic(í|i)dio|idea(çã|ca)o suicida/i, "P77"],
  [/\bherpes[\- ]?z(ó|o)ster|cobreiro/i, "S70"],
  [/\bstevens[\- ]?johnson|net|dress|necr(ó|o)lise/i, "S99"],
  [/\bchoque anafil(á|a)tico|anafilaxia/i, "A92"],
];

function inferCiapFromName(name) {
  if (!name) return null;
  for (const [pattern, ciap] of NAME_CIAP_PATTERNS) {
    if (pattern.test(name)) return ciap;
  }
  return null;
}

/* Função: dado um CID (com ou sem ponto), retorna CIAP-2 mais provável */
function cidToCiap(cid) {
  if (!cid) return null;
  // Limpar: remover espaços, normalizar pra primeiro código se tiver múltiplos
  let c = cid.trim().split(/[,;\/\s]/)[0];
  
  // Tentar match exato primeiro (com ponto)
  if (CID_CIAP_MAP[c]) return CID_CIAP_MAP[c];
  
  // Match sem ponto (ex: I10.5 → I10)
  const base = c.split('.')[0];
  if (CID_CIAP_MAP[base]) return CID_CIAP_MAP[base];
  
  // Match por prefixo de 3 chars
  const prefix = base.substring(0, 3);
  if (CID_CIAP_MAP[prefix]) return CID_CIAP_MAP[prefix];
  
  return null;
}

/* Aplicar CIAP automaticamente — usa CID primeiro, depois nome */
function autoApplyCiap() {
  if (typeof PATOLOGIAS === 'undefined') return 0;
  let nCid = 0, nName = 0;
  for (const p of PATOLOGIAS) {
    if (p.ciap) continue;  // já tem
    // Tentativa 1: por CID
    if (p.cid) {
      const ciap = cidToCiap(p.cid);
      if (ciap) {
        p.ciap = ciap;
        p.ciapAuto = true;
        nCid++;
        continue;
      }
    }
    // Tentativa 2: por nome
    const ciapN = inferCiapFromName(p.nome);
    if (ciapN) {
      p.ciap = ciapN;
      p.ciapAuto = true;
      nName++;
    }
  }
  return { byCid: nCid, byName: nName, total: nCid + nName };
}

// Auto-execute
autoApplyCiap();

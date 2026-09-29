import { ServiceItem, DifferentialItem, TestimonialItem, FaqItem, ClinicSpace } from '../types';

export const DOCTOR_INFO = {
  name: 'Dr. Júlio Cabral',
  specialty: 'Cardiologia Clínica & Ecocardiografia',
  crm: 'CRM-SP 158.420',
  rqe: 'RQE 84.190 (Cardiologia) | RQE 84.191 (Ecocardiografia)',
  society: 'Especialista Titulado pela Sociedade Brasileira de Cardiologia (SBC)',
  fellowship: 'Residência Médica em Cardiologia e Ecocardiografia no InCor – HCFMUSP',
  hospitals: [
    'Hospital Israelita Albert Einstein',
    'Hospital Sírio-Libanês',
    'Hospital Alemão Oswaldo Cruz',
    'InCor - FMUSP'
  ],
  experienceYears: 14,
  phoneFormatted: '(11) 98765-4321',
  phoneClean: '5511987654321',
  landline: '(11) 3284-5500',
  email: 'contato@drjuliocabral.med.br',
  address: {
    street: 'Av. Brigadeiro Luís Antônio, 3500',
    suite: 'Conjunto 142 - 14º andar (Edifício Medical Garden Tower)',
    neighborhood: 'Jardim Paulista',
    city: 'São Paulo',
    state: 'SP',
    cep: '01402-001',
    reference: 'A 500m do Parque Ibirapuera e próximo à Estação Brigadeiro'
  },
  hours: {
    weekdays: 'Segunda a Sexta: 08h às 19h',
    saturday: 'Sábados: 08h às 13h (Check-up e exames agendados)',
    sunday: 'Fechado'
  }
};

export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: 'checkup-executivo',
    number: '01',
    title: 'Check-up Cardiológico Preventivo',
    category: 'Prevenção & Diagnóstico',
    popular: true,
    shortDescription: 'Avaliação cardiovascular abrangente e individualizada para rastreio de risco silencioso, aterosclerose precoce e orientação para longevidade.',
    fullDescription: 'O check-up cardiológico preventivo é indicado tanto para indivíduos assintomáticos a partir dos 35-40 anos quanto para praticantes de atividade física ou com histórico familiar de doenças cardíacas precoces. Compreende anamnese aprofundada, exame físico minucioso, estratificação de risco cardiovascular pelos escores internacionais (Framingham e SBC), eletrocardiograma e orientação terapêutica personalizada.',
    indications: [
      'Histórico familiar de infarto agudo do miocárdio ou AVC',
      'Hipertensão, colesterol elevado, diabetes ou pré-diabetes',
      'Início ou intensificação de treinos esportivos',
      'Rotina com alto nível de estresse e sedentarismo'
    ],
    duration: '60 a 90 minutos',
    preparation: [
      'Trazer exames laboratoriais e cardiológicos realizados nos últimos 12 meses',
      'Lista de medicamentos de uso contínuo com dosagens',
      'Não é necessário jejum para a consulta clínica'
    ],
    equipmentInfo: 'Avaliação clínica minuciosa com eletrocardiograma digital de 12 derivações integrado ao prontuário eletrônico.'
  },
  {
    id: 'ecocardiograma-doppler',
    number: '02',
    title: 'Ecocardiograma Transtorácico com Doppler',
    category: 'Exame de Imagem',
    popular: true,
    shortDescription: 'Ultrassonografia cardíaca de alta resolução para avaliar anatomia, função contrátil dos ventrículos e fluxo nas válvulas cardíacas.',
    fullDescription: 'Exame de imagem não invasivo e indolor que utiliza ultrassom para gerar imagens dinâmicas do coração em tempo real. O Dr. Júlio Cabral realiza e lauda o exame pessoalmente no consultório com equipamento de última geração GE Vivid, permitindo correlacionar os achados da imagem com a história clínica do paciente na mesma consulta.',
    indications: [
      'Investigação de sopros cardíacos detectados no exame físico',
      'Falta de ar aos esforços ou cansaço desproporcional',
      'Avaliação de hipertensão arterial e hipertrofia ventricular',
      'Acompanhamento de doenças valvares e insuficiência cardíaca'
    ],
    duration: '30 a 45 minutos',
    preparation: [
      'Não é necessário jejum nem suspensão de medicamentos prévios',
      'Recomenda-se vestir blusa ou camisa fácil de desabotoar',
      'Evitar uso de cremes ou óleos corporais na região do tórax no dia do exame'
    ],
    equipmentInfo: 'Equipamento GE Vivid E95 com transdutor matricial de alta sensibilidade para reconstrução anatômica nítida.'
  },
  {
    id: 'teste-ergometrico',
    number: '03',
    title: 'Teste Ergométrico Computadorizado',
    category: 'Exame Funcional',
    popular: false,
    shortDescription: 'Avaliação em esteira rolante monitorizada com ECG contínuo para diagnóstico de isquemia coronariana e capacidade cardiopulmonar.',
    fullDescription: 'Permite avaliar a resposta do sistema cardiovascular ao estresse físico gradual. É fundamental para identificar sinais de angina de peito, quedas ou picos anormais de pressão arterial, além de arritmias induzidas pelo esforço físico, com protocolos específicos para sedentários e atletas de alta performance.',
    indications: [
      'Liberação médica para corridas, maratonas e esportes de intensidade',
      'Suspeita de doença arterial coronariana e dor torácica atípica',
      'Avaliação da eficácia de tratamentos anti-hipertensivos e anti-isquêmicos'
    ],
    duration: '40 minutos (incluindo preparo e recuperação)',
    preparation: [
      'Alimentação leve até 2 horas antes (evitar jejum prolongado ou refeições pesadas)',
      'Vir vestido com roupas esportivas confortáveis e tênis de corrida',
      'Evitar cafeína, energéticos e bebidas alcoólicas 24h antes do exame',
      'Trazer lista de medicamentos para checagem da conduta de suspensão ou manutenção'
    ],
    equipmentInfo: 'Esteira ergométrica ergopower de absorção de impacto com monitorização eletrocardiográfica computadorizada contínua.'
  },
  {
    id: 'holter-24h',
    number: '04',
    title: 'Holter Digital de 24 Horas',
    category: 'Monitoramento do Ritmo',
    popular: false,
    shortDescription: 'Gravação ininterrupta dos batimentos cardíacos durante um dia habitual para detectar arritmias ocultas e palpitações.',
    fullDescription: 'Um gravador ultraleve e compacto de última geração fixado ao tórax através de eletrodos descartáveis, que armazena cada batimento durante o trabalho, sono e atividades diárias. O paciente preenche um diário de atividades e sintomas para correlação temporal precisa.',
    indications: [
      'Palpitações, sensação de falha ou aceleração no peito (taquicardia)',
      'Episódios de tonturas inexplicadas, escurecimento visual ou desmaios (síncopes)',
      'Avaliação da resposta a medicações antiarrítmicas e controle de marca-passo'
    ],
    duration: 'Instalação em 15 minutos; monitoramento contínuo por 24 horas',
    preparation: [
      'Tomar banho antes da instalação, pois o dispositivo não pode ser molhado',
      'Manter a rotina habitual de trabalho e lazer (não permanecer em repouso excessivo)',
      'Preencher o diário fornecido com horários exatos de sintomas ou eventos'
    ],
    equipmentInfo: 'Gravadores digitais compactos de 3 canais e peso inferior a 60g para máximo conforto ao longo do dia e sono.'
  },
  {
    id: 'mapa-pressao',
    number: '05',
    title: 'M.A.P.A. 24 Horas (Pressão Arterial)',
    category: 'Monitoramento Pressórico',
    popular: false,
    shortDescription: 'Medições automáticas repetidas da pressão arterial ao longo do dia e da noite para diagnóstico refinado de hipertensão.',
    fullDescription: 'Diferente da medida isolada no consultório, a Monitorização Ambulatorial da Pressão Arterial (M.A.P.A.) afere os níveis pressóricos a cada 15 a 20 minutos durante a vigília e a cada 30 minutos no sono. Revela se a pressão cai adequadamente durante a noite (descenso noturno) e afasta a famosa "hipertensão do jaleco branco".',
    indications: [
      'Suspeita de hipertensão do avental branco (pressão sobe apenas no consultório)',
      'Avaliação da eficácia dos remédios anti-hipertensivos nas 24 horas',
      'Identificação de picos pressóricos noturnos associados a risco de AVC'
    ],
    duration: 'Instalação em 15 minutos; uso por 24 horas consecutivas',
    preparation: [
      'Vestir camisa ou blusa com mangas folgadas para acomodar a braçadeira',
      'Seguir a rotina diária habitual sem praticar exercícios físicos extenuantes',
      'Durante as medições, manter o braço estendido e imóvel ao sentir o inflar'
    ],
    equipmentInfo: 'Monitores com tecnologia oscilométrica silenciosa aprovada pelos consensos da Sociedade Brasileira de Cardiologia.'
  },
  {
    id: 'risco-cirurgico',
    number: '06',
    title: 'Avaliação de Risco Cirúrgico Pré-Operatório',
    category: 'Parecer Cardiológico',
    popular: false,
    shortDescription: 'Parecer técnico especializado com estratificação formal de risco para procedimentos cirúrgicos de pequeno a grande porte.',
    fullDescription: 'Avaliação focada na segurança do paciente que passará por cirurgia geral, ortopédica, plástica, ginecológica ou oftalmológica. Baseado nos índices Goldman, Detsky e Lee, associados às diretrizes perioperatórias da SBC, com recomendações objetivas de manejo de medicações anticoagulantes e antiplaquetárias.',
    indications: [
      'Pré-operatório de cirurgias eletivas em pacientes de qualquer faixa etária',
      'Cirurgias de médio e grande porte em pacientes com comorbidades',
      'Necessidade de ajuste e protocolo de ponte para anticoagulantes'
    ],
    duration: 'Consulta de 45 a 60 minutos com entrega rápida do laudo',
    preparation: [
      'Trazer o pedido médico e o tipo de cirurgia a ser realizada com data prevista',
      'Trazer exames laboratoriais pré-operatórios já solicitados pelo cirurgião',
      'Lista completa de remédios de uso crônico'
    ],
    equipmentInfo: 'Laudo emitido com critérios padronizados, assinado com certificado digital ICP-Brasil aceito em todos os hospitais.'
  },
  {
    id: 'hipertensao-colesterol',
    number: '07',
    title: 'Tratamento de Hipertensão, Colesterol & Triglicérides',
    category: 'Manejo Clínico',
    popular: false,
    shortDescription: 'Controle metabólico e cardiovascular de longo prazo com foco na proteção de órgãos-alvo (coração, cérebro e rins).',
    fullDescription: 'Abordagem médica moderna que combina farmacoterapia de precisão com estratégias de estilo de vida fundamentadas na ciência. O objetivo não é apenas "baixar o número da pressão ou do colesterol", mas sim evitar o remodelamento cardíaco e a formação de placas nas artérias coronárias e carótidas.',
    indications: [
      'Hipertensão de difícil controle com múltiplas medicações',
      'Hipercolesterolemia familiar ou intolerância a estatinas',
      'Presença de placas carotídeas ou escore de cálcio alterado'
    ],
    duration: 'Acompanhamento trimestral ou semestral conforme estratificação',
    preparation: [
      'Anotações de medidas de pressão arterial realizadas em casa nos últimos dias',
      'Exames de sangue recentes (colesterol total e frações, glicemia, função renal)'
    ]
  },
  {
    id: 'arritmias-insuficiencia',
    number: '08',
    title: 'Acompanhamento de Arritmias & Insuficiência Cardíaca',
    category: 'Especialidades',
    popular: false,
    shortDescription: 'Conduta clínica especializada para manutenção do ritmo e estabilização de fraqueza do músculo cardíaco.',
    fullDescription: 'Tratamento de condições que requerem acompanhamento próximo, como fibrilação atrial, extrassístoles frequentes, insuficiência cardíaca de fração de ejeção preservada ou reduzida, otimizando os medicamentos quádruplos de última geração com comprovado ganho de sobrevida.',
    indications: [
      'Fibrilação atrial e risco de eventos embólicos',
      'Inchaço nas pernas (edema) e falta de ar ao deitar',
      'Pacientes pós-infarto com necessidade de reabilitação supervisionada'
    ],
    duration: 'Consultas regulares com canal aberto de comunicação para ajustes de dose',
    preparation: [
      'Registros de peso corporal matinal e registros de pressão/pulso',
      'Informar quaisquer sintomas de desconforto ou tontura'
    ]
  }
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    title: 'Consultas Sem Pressa (60 minutos)',
    description: 'Tempo dedicado para escutar seu histórico, entender seu estilo de vida e examinar detalhadamente seu coração.',
    detail: 'Você conversa diretamente com o cardiologista, tirando dúvidas com calma e clareza.'
  },
  {
    title: 'Exames no Próprio Consultório',
    description: 'Realize consulta e ecocardiograma no mesmo local e no mesmo dia, sem necessidade de deslocamentos adicionais.',
    detail: 'Agilidade de diagnóstico com equipamentos próprios de alta resolução.'
  },
  {
    title: 'Laudos Feitos pelo Próprio Médico',
    description: 'O mesmo cardiologista que atende você é quem realiza e assina seu exame de imagem.',
    detail: 'Correlação clínica direta entre a queixa do paciente e o que o ultrassom mostra.'
  },
  {
    title: 'Suporte Direto Pós-Consulta',
    description: 'Canal de comunicação dedicado para esclarecimento de dúvidas sobre receitas e exames solicitados.',
    detail: 'Cuidado contínuo que não se encerra ao sair do consultório.'
  },
  {
    title: 'Apoio Completo para Reembolso',
    description: 'Emissão de relatório detalhado e recibo nos padrões exigidos pelas operadoras de saúde.',
    detail: 'Nossa equipe auxilia no passo a passo para você obter o reembolso do seu plano.'
  },
  {
    title: 'Localização Privilegiada em SP',
    description: 'Edifício médico de alto padrão no Jardim Paulista, com manobrista e acessibilidade total.',
    detail: 'Acesso fácil pela Av. Paulista, 23 de Maio e Av. Brigadeiro Luís Antônio.'
  }
];

export const CLINIC_SPACES: ClinicSpace[] = [
  {
    title: 'Consultório Médico Principal',
    subtitle: 'Ambiente acolhedor e privativo',
    imagePath: '/src/assets/images/clinic_consulting_room_1790689540756.jpg',
    description: 'Projetado com arquitetura contemporânea e conforto acústico integral para consultas humanizadas de 60 minutos, garantindo total confidencialidade para o diálogo médico-paciente.',
    highlights: ['Mesa de atendimento humanizado sem barreiras', 'Maca confortável com proteção descartável', 'Isolamento acústico de alto padrão', 'Iluminação natural e vista panorâmica de São Paulo'],
    tag: 'Consulta & Avaliação'
  },
  {
    title: 'Hall Clínico & Circulação Privativa',
    subtitle: 'Arquitetura moderna e esterilidade rigorosa',
    imagePath: 'https://images.pexels.com/photos/7108115/pexels-photo-7108115.jpeg',
    fallbackImagePath: '/src/assets/images/clinic_reception_lounge_1790689572883.jpg',
    description: 'Corredores amplos com iluminação difusa, controle de higienização de grau hospitalar e sinalização clara para acesso aos consultórios e salas de exames sem aglomeração.',
    highlights: ['Portas automáticas e circulação acessível', 'Padrão sanitário e biossegurança hospitalar', 'Ambiente sereno com iluminação arquitetônica', 'Acessibilidade plena para cadeirantes'],
    tag: 'Infraestrutura'
  },
  {
    title: 'Sala de Procedimentos & Avaliação Clínica',
    subtitle: 'Ambiente técnico com tecnologia ergonômica',
    imagePath: 'https://media.istockphoto.com/id/500675660/pt/foto/interior-moderno-de-escrit%C3%B3rio-de-dentista.jpg?b=1&s=612x612&w=0&k=20&c=Ri27q4ip9ZvBMAS8S4RVFrjeWMunr7i1qYZEuLbRKF4=',
    fallbackImagePath: '/src/assets/images/cardio_ultrasound_exam_1790689559518.jpg',
    description: 'Espaço esterilizado e equipado para realização de procedimentos ambulatoriais, colocação de monitores M.A.P.A. e Holter 24h, aferições clínicas e exames gráficos imediatos.',
    highlights: ['Bancadas em Corian com esterilização constante', 'Dispositivos de monitoramento contínuo', 'Climatização com filtros HEPA antibacterianos', 'Conforto e privacidade absoluta'],
    tag: 'Procedimentos'
  },
  {
    title: 'Sala de Diagnóstico & Ultrassom Cardiovascular',
    subtitle: 'Tecnologia diagnóstica em tempo real',
    imagePath: '/src/assets/images/cardio_ultrasound_exam_1790689559518.jpg',
    description: 'Equipada com ecocardiógrafo de alta definição GE Vivid E95, proporcionando visualização detalhada em tempo real de válvulas, câmaras e fluxo sanguíneo pelo próprio Dr. Júlio Cabral.',
    highlights: ['Transdutor matricial de última geração', 'Monitor auxiliar para o paciente acompanhar o exame', 'Laudo emitido no mesmo dia da consulta', 'Ambiente climatizado e confortável'],
    tag: 'Exames Gráficos'
  },
  {
    title: 'Recepção & Lounge de Pacientes',
    subtitle: 'Hospitalidade, pontualidade e bem-estar',
    imagePath: '/src/assets/images/clinic_reception_lounge_1790689572883.jpg',
    description: 'Recepção planejada para tranquilizar antes de qualquer atendimento. Atendimento pontual por concierge médica, espaço de café espresso, água mineral e poltronas confortáveis.',
    highlights: ['Atendimento com hora marcada e pontualidade', 'Wi-Fi de alta velocidade e tomadas para recarga', 'Espaço de café cortesia e água aromatizada', 'Estacionamento com manobrista (valet) no edifício'],
    tag: 'Recepção'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    patientName: 'Ricardo Mendes',
    age: 52,
    profession: 'Diretor Financeiro',
    neighborhood: 'Pinheiros, SP',
    situation: 'Check-up executivo & Investigação de Palpitações',
    quote: 'Fiz meu primeiro check-up com o Dr. Júlio após sentir palpitações súbitas durante uma semana de fechamento financeiro. A consulta durou mais de uma hora; ele fez o ecocardiograma na hora e instalou o Holter. A clareza das explicações me devolveu a paz de espírito. Hoje mantenho meu acompanhamento semestral.',
    timeframe: 'Paciente há 2 anos'
  },
  {
    id: 't2',
    patientName: 'Helena Vasconcellos',
    age: 64,
    profession: 'Arquiteta Urbanista',
    neighborhood: 'Moema, SP',
    situation: 'Controle de Hipertensão Arterial Resistente',
    quote: 'Passava por médicos que mal olhavam no olho e trocavam remédios sem investigar a fundo. O Dr. Júlio mapeou com o MAPA de 24h meus picos noturnos de pressão e ajustou os horários dos fármacos. Minha pressão estabilizou em 12 por 8 pela primeira vez em anos.',
    timeframe: 'Paciente há 3 anos'
  },
  {
    id: 't3',
    patientName: 'Carlos Eduardo Antunes',
    age: 41,
    profession: 'Corredor Amador & Empresário',
    neighborhood: 'Jardins, SP',
    situation: 'Avaliação Cardiológica para Corrida e Maratona',
    quote: 'Procurei o Dr. Júlio antes da minha primeira maratona internacional. O teste ergométrico computadorizado e a estratificação de zonas de frequência cardíaca foram extremamente criteriosos. Além de excelente médico, entende o universo de quem pratica esporte com seriedade.',
    timeframe: 'Paciente há 4 anos'
  },
  {
    id: 't4',
    patientName: 'Beatriz S. Guimarães',
    age: 70,
    profession: 'Professora Aposentada',
    neighborhood: 'Bela Vista, SP',
    situation: 'Risco Cirúrgico & Tratamento de Colesterol',
    quote: 'Precisei fazer uma cirurgia de prótese no joelho e meu ortopedista exigiu uma avaliação cardiológica rigorosa. Dr. Júlio foi extremamente detalhista, fez o laudo no prazo e até conversou com meu cirurgião. Dá gosto ser tratada por alguém tão dedicado.',
    timeframe: 'Paciente há 1 ano'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'O consultório atende convênios ou somente particular?',
    answer: 'O atendimento é realizado na modalidade particular para garantir o tempo adequado de consulta (mínimo de 60 minutos) e a realização de exames com máxima precisão. No entanto, fornecemos recibo detalhado e relatório médico estruturado para que você solicite o reembolso diretamente à sua seguradora de saúde (como Bradesco, SulAmérica, Amil One, Care Plus, Omint, Porto Seguro, entre outros). Nossa recepção orienta você em todo o processo.',
    category: 'convenio'
  },
  {
    question: 'É possível realizar a consulta e os exames (Ecocardiograma, ECG) no mesmo dia?',
    answer: 'Sim! Uma das principais vantagens do nosso consultório é a integração diagnóstica. Caso agendado com antecedência, você pode realizar sua consulta clínica detalhada, eletrocardiograma e ecocardiograma transtorácico no mesmo período, economizando tempo e obtendo uma conclusão diagnóstica ágil.',
    category: 'exames'
  },
  {
    question: 'Como funciona o agendamento de consulta com o Dr. Júlio Cabral?',
    answer: 'O agendamento é feito de forma simples e direta pelo nosso WhatsApp ou telefone. Você informa sua disponibilidade e nossa concierge médica agenda o melhor horário para você, enviando todas as orientações prévias de localização e preparo.',
    category: 'agendamento'
  },
  {
    question: 'O que devo levar no dia da minha primeira consulta?',
    answer: 'Recomendamos trazer os exames laboratoriais de sangue e cardiológicos realizados no último ano, exames de imagem anteriores (se houver) e a relação de todos os medicamentos e suplementos em uso com as respectivas dosagens diárias.',
    category: 'consulta'
  },
  {
    question: 'O consultório possui estacionamento com manobrista no local?',
    answer: 'Sim. O edifício Medical Garden Tower conta com serviço de estacionamento rotativo com manobrista (valet) no próprio local, com acesso direto pelos elevadores ao 14º andar, oferecendo total segurança, conforto e acessibilidade para pessoas com mobilidade reduzida.',
    category: 'consulta'
  },
  {
    question: 'O Dr. Júlio realiza consultas online por telemedicina?',
    answer: 'Sim, realizamos consultas por telemedicina para retornos, avaliação de exames já realizados e pacientes que residem fora da capital paulista ou que necessitam de segunda opinião cardiológica. A plataforma utilizada é segura, criptografada e homologada pelo CFM, com emissão de receitas e atestados com assinatura digital certificada.',
    category: 'consulta'
  }
];

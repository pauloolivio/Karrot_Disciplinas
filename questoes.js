// Banco de questões - Estrutura simples e direta
const questoesDB = [
    {
        id: 1,
        disciplina: "Matemática",
        texto: "Quanto é 25 × 4?",
        alternativas: {
            A: "75",
            B: "100",
            C: "125",
            D: "50"
        },
        correta: "B",
        explicacao: "25 × 4 = 100"
    },
    {
        id: 2,
        disciplina: "Matemática",
        texto: "Qual a raiz quadrada de 144?",
        alternativas: {
            A: "10",
            B: "14",
            C: "12",
            D: "16"
        },
        correta: "C",
        explicacao: "12 × 12 = 144"
    },
    {
        id: 3,
        disciplina: "Matemática",
        texto: "Quanto é 20% de 200?",
        alternativas: {
            A: "20",
            B: "30",
            C: "40",
            D: "50"
        },
        correta: "C",
        explicacao: "20% de 200 = 40"
    },
    {
        id: 4,
        disciplina: "História da Arte",
        texto: "Quem pintou a Mona Lisa?",
        alternativas: {
            A: "Van Gogh",
            B: "Picasso",
            C: "Leonardo da Vinci",
            D: "Monet"
        },
        correta: "C",
        explicacao: "A Mona Lisa foi pintada por Leonardo da Vinci no século XVI."
    },
    {
        id: 5,
        disciplina: "História da Arte",
        texto: "Quem pintou 'Guernica'?",
        alternativas: {
            A: "Salvador Dalí",
            B: "Pablo Picasso",
            C: "Frida Kahlo",
            D: "Diego Rivera"
        },
        correta: "B",
        explicacao: "Guernica foi pintada por Pablo Picasso em 1937."
    },
    {
        id: 6,
        disciplina: "Geografia",
        texto: "Qual a capital do Brasil?",
        alternativas: {
            A: "São Paulo",
            B: "Rio de Janeiro",
            C: "Brasília",
            D: "Belo Horizonte"
        },
        correta: "C",
        explicacao: "Brasília é a capital federal do Brasil desde 1960."
    },
    {
        id: 7,
        disciplina: "Geografia",
        texto: "Qual o maior país do mundo em área territorial?",
        alternativas: {
            A: "China",
            B: "Estados Unidos",
            C: "Canadá",
            D: "Rússia"
        },
        correta: "D",
        explicacao: "A Rússia é o maior país do mundo em área territorial."
    },
    {
        id: 8,
        disciplina: "Português",
        texto: "Qual a classe gramatical da palavra 'felizmente'?",
        alternativas: {
            A: "Adjetivo",
            B: "Advérbio",
            C: "Substantivo",
            D: "Verbo"
        },
        correta: "B",
        explicacao: "'Felizmente' é um advérbio de modo."
    },
    {
        id: 9,
        disciplina: "Português",
        texto: "Assinale a opção em que a palavra está corretamente acentuada:",
        alternativas: {
            A: "tambem",
            B: "támbem",
            C: "também",
            D: "também"
        },
        correta: "C",
        explicacao: "A forma correta é 'também', com acento agudo no 'e'."
    },
    {
        id: 10,
        disciplina: "Ciências",
        texto: "Qual órgão do corpo humano é responsável por bombear sangue?",
        alternativas: {
            A: "Pulmão",
            B: "Coração",
            C: "Cérebro",
            D: "Fígado"
        },
        correta: "B",
        explicacao: "O coração bombeia o sangue para todo o corpo."
    },
    {
        id: 11,
        disciplina: "Ciências",
        texto: "Qual é o processo pelo qual as plantas produzem seu próprio alimento?",
        alternativas: {
            A: "Respiração",
            B: "Fotossíntese",
            C: "Fermentação",
            D: "Evaporação"
        },
        correta: "B",
        explicacao: "A fotossíntese converte luz solar em energia para as plantas."
    }, 
    {
        id: 12,
        disciplina: "Churrasco e Bobeira",
        texto: "Se o churrasco é na sua casa, qual atitude imperdoável um convidado pode ter?",
        alternativas: {
            A: "Chegar atrasado",
            B: "Trazer carne de frango",
            C: "Beber sua cerveja sem pedir",
            D: "Ficar no celular"
        },
        correta: "B",
        explicacao:  "Frango no churrasco? Amigo, ou você tá de dieta ou tá de sacanagem. Pega sua asinha e vai assar na sua casa."
    },
    {
        id: 13,
        disciplina: "Churrasco e Bobeira",
        texto: "O amigo que sempre pergunta 'falta muito pra carne ficar pronta?' na verdade está querendo dizer:",
        alternativas: {
            A: "Estou com fome",
            B: "Estou com sono",
            C: "Estou ficando bêbado de estômago vazio e vou passar mal",
            D: "Estou avaliando sua capacidade como churrasqueiro"
        },
        correta: "C",
        explicacao: "Ele não quer carne, ele quer sobreviver. Se você não apressar esse fogo, vai ter um desmaio na laje."
    },
    {
        id: 14,
        disciplina: "Churrasco e Bobeira",
        texto: "O que significa 'vou só dar uma olhada no fogo'?",
        alternativas: {
            A: "Virar a carne",
            B: "Ficar 40 minutos encarando o fogo como se fosse resolver a fórmula da relatividade",
            C: "Colocar mais carvão",
            D: "Apagar o fogo porque já está na hora"
        },
        correta: "B",
        explicacao: "Ele não tá olhando a carne. Ele tá tendo uma experiência espiritual. Deixa o homem em paz."
    },
    {
        id: 15,
        disciplina: "Churrasco e Bobeira",
        texto: "Qual a pior coisa que pode acontecer quando você pergunta 'alguém quer mais cerveja?'",
        alternativas: {
            A: "Ninguém responder",
            B: "Todo mundo falar 'eu vou' e ninguém levantar",
            C: "Alguém falar 'traz um refri pra mim'",
            D: "Alguém pedir água"
        },
        correta: "C",
        explicacao: "Refri no churrasco? Isso é traição. Você vai levar, mas vai chacoalhar antes de abrir. Vingança gelada."
    },
    {
        id: 16,
        disciplina: "Churrasco e Bobeira",
        texto: "O amigo que fica ao lado da churrasqueira sem fazer nada é conhecido como:",
        alternativas: {
            A: "Ajudante",
            B: "Ventilador humano",
            C: "Fiscal de ponto",
            D: "Sommelier de fumaça"
        },
        "correta": "B",
        "explicacao":  "Esse cara é mais inútil que cerca de piscina. Sai daí, rapaz! Vai abrir uma cerveja e me deixa trabalhar."
    },
    {
        id: 17,
        disciplina: "Churrasco e Bobeira",
        texto: "Quando a carne finalmente fica pronta, o que acontece?",
        alternativas: {
            A: "Todo mundo come junto em harmonia",
            B: "Alguém grita 'OLHA A PONTA DA PÁ' e todo mundo corre igual louco",
            C: "O cachorro come metade antes de chegar na mesa",
            D: "Acaba o gás"
        },
        correta: "B",
        explicacao: "Você nunca correu tanto na vida. Perdeu até o chinelo. Mas pegou a costela. Valeu a pena."
    },
    {
        id: 18,
        disciplina: "Churrasco e Bobeira",
        texto: "Qual a frase mais perigosa de se ouvir num churrasco?",
        alternativas: {
            A: "Essa carne tá meio crua",
            B: "Acabou a cerveja",
            C: "Deixa que eu racho a conta depois",
            D: "Vou embora agora"
        },
        correta: "B",
        explicacao: "Todo mundo parou. O churrasco acabou. Alguém chame uma ambulância de cerveja."
    },
    {
        id: 19,
        disciplina: "Churrasco e Bobeira",
        texto: "O amigo que chega com 6 latões de cerveja e come 2 quilos de carne sozinho é chamado de:",
        alternativas: {
            A: "Convidado",
            B: "Prejuízo",
            C: "Parceiro",
            D: "Magro de ruim"
        },
        correta: "B",
        explicacao: "Você já colocou ele na lista negra. Mas vai chamar de novo no próximo churrasco porque ele faz rir. A vida é assim."
    },
    {
        id: 20,
        disciplina: "Churrasco e Bobeira",
        texto: "Qual a única coisa que faz um churrasco terminar antes da meia-noite?",
        alternativas: {
            A: "Acabar a carne",
            B: "O dono da casa falar 'galera, minha esposa quer dormir'",
            C: "Começar a chover",
            D: "Alguém cair na piscina"
        },
        correta: "B",
        explicacao: "Todo mundo olhou pro chão. Pegou as coisas devagar. Ninguém quis olhar pra ela. Churrasco encerrado por decreto."
    },
    {
        id:21,
        disciplina: "Churrasco e Bobeira",
        texto: "Depois de poucas horas de churrasco, qual é o papo mais comum?",
        alternativas: {
            A: "Política",
            B: "Futebol",
            C: "'Mano, lembra aquela vez que a gente...' (ninguém lembra direito)",
            D: "Trabalho"
        },
        correta: "C",
        explicacao: "Essa história já mudou 12 vezes. Não importa. Vocês vão rir igual idiota até o sol rachar. Amém."
    },
    {
    id: 30,
        disciplina: "Soldagem",
        texto: "No processo de soldagem com arame tubular autoprotegido (FCAW-S), qual é a polaridade predominantemente recomendada na maioria das especificações técnicas?",
        alternativas: {
            A: "DCEP (CC+ / Eletrodo Positivo)",
            B: "DCEN (CC- / Eletrodo Negativo)",
            C: "Corrente Alternada (CA) de alta frequência",
            D: "Polaridade variável pulsada senoidal"
        },
        correta: "B",
        explicacao: "A polaridade negativa no eletrodo (DCEN) concentra a proporção adequada de calor na peça e garante a decomposição controlada do fluxo interno para autoproteção no FCAW-S."
    },
    {
        id: 31,
        disciplina: "Soldagem",
        texto: "Qual a principal razão técnica pela qual o processo FCAW-S é amplamente utilizado em soldagens de campo sujeitas a ventos fortes?",
        alternativas: {
            A: "O arco elétrico é fisicamente imune ao sopro magnético sob correntes intensas de ar.",
            B: "A escória líquida possui alta viscosidade que impede o desvio do cordão pelo vento.",
            C: "Ele dispensa o uso de gás de proteção externo, pois a proteção é gerada internamente pelo fluxo do arame.",
            D: "A alta taxa de resfriamento anula a contaminação por nitrogênio atmosférico."
        },
        correta: "C",
        explicacao: "Como os gases protetores nascem da queima do núcleo do próprio arame no arco, não há fluxo gasoso externo para ser soprado pelo vento."
    },
    {
        id: 32,
        disciplina: "Soldagem",
        texto: "Em relação à extensão elétrica do eletrodo (stick-out), como o processo FCAW se comporta comparado ao GMAW convencional?",
        alternativas: {
            A: "Ambos exigem rigorosamente a mesma extensão elétrica (8-12 mm) para manter a estabilidade do arco.",
            B: "O FCAW exige um stick-out maior para permitir o pré-aquecimento por efeito Joule e a correta ativação dos componentes do fluxo.",
            C: "O FCAW exige um stick-out significativamente menor para evitar o superaquecimento prematuro do núcleo poroso.",
            D: "O stick-out no FCAW deve ser minimizado a zero para evitar porosidades causadas pelo nitrogênio do ar."
        },
        correta: "B",
        explicacao: "Uma maior extensão elétrica aquece o arame por resistência elétrica (efeito Joule) antes da fusão, otimizando a atuação e a reação dos componentes do fluxo interno."
    },
    {
        id: 33,
        disciplina: "Soldagem",
        texto: "Para um mesmo diâmetro externo de arame, a transferência por spray no processo FCAW é atingida sob quais condições de corrente em comparação com o GMAW?",
        alternativas: {
            A: "Com correntes menores, devido à maior densidade de corrente na fina bainha metálica do arame tubular.",
            B: "Com correntes maiores, devido à resistência elétrica oferecida pelo fluxo interno não condutor.",
            C: "Exclusivamente com correntes pulsadas acima de 500 A, independentemente da espessura da bainha.",
            D: "Com o mesmo patamar de corrente, uma vez que a área da seção transversal externa determina a transição do arco."
        },
        correta: "A",
        explicacao: "Como a seção condutora se restringe à bainha externa de metal, a densidade de corrente (A/mm²) eleva-se de forma acentuada, antecipando a transição para o modo spray com correntes menores."
    },
    {
        id: 34,
        disciplina: "Soldagem",
        texto: "Na soldagem por Arco Submerso (SAW), qual é a faixa típica recomendada para a altura da camada de fluxo granular sobre o arco elétrico?",
        alternativas: {
            A: "5 a 15 mm",
            B: "60 a 90 mm",
            C: "Mais de 100 mm",
            D: "25 a 50 mm"
        },
        correta: "D",
        explicacao: "Esta espessura de 25 a 50 mm garante o perfeito abafamento do arco elétrico e a contenção de gases sem exercer pressão mecânica exagerada sobre a poça líquida."
    },
    {
        id: 35,
        disciplina: "Soldagem",
        texto: "No sistema SAW Tandem-Arc (com dois arames), como costuma ser configurada a alimentação elétrica dos arames líder e seguidor para mitigar o sopro magnético?",
        alternativas: {
            A: "O arame líder opera em CC+ para garantir penetração profunda e o seguidor opera em CA para reduzir a interferência magnética.",
            B: "Ambos operam obrigatoriamente em CC- para maximizar a taxa de deposição conjunta.",
            C: "O arame líder opera em CA e o seguidor opera em CC- para estabilizar a poça de fusão profunda.",
            D: "Ambos operam em CA defasada em 180 graus com a mesma amplitude de corrente."
        },
        correta: "A",
        explicacao: "A combinação associa a boa penetração da corrente contínua (CC+) no primeiro passe (líder) com a mitigação do sopro magnético propiciada pela corrente alternada (CA) no arame subsequente (seguidor)."
    },
    {
        id: 36,
        disciplina: "Soldagem",
        texto: "Qual é a recomendação normativa típica aplicável ao tratamento térmico pós-soldagem (PWHT) para alívio de tensões em juntas de aço carbono?",
        alternativas: {
            A: "Aquecimento entre 350°C e 450°C, com resfriamento rápido em água para evitar a fragilização.",
            B: "Aquecimento em patamares subcríticos (550°C a 650°C) e taxa de resfriamento controlada de ≤ 200°C/h até atingir 300°C.",
            C: "Aquecimento até a zona de austenitização completa (acima de 900°C), seguido de resfriamento ao ar livre.",
            D: "Estabilização térmica a 150°C por 24 hours, sem controle de taxa de resfriamento posterior."
        },
        correta: "B",
        explicacao: "O aquecimento abaixo da zona crítica (subcrítico) amacia estruturas duras e alivia as tensões por fluência, enquanto o resfriamento lento evita novos gradientes térmicos prejudiciais."
    },
    {
        id: 37,
        disciplina: "Soldagem",
        texto: "Qual o principal benefício mecânico do Shot Peening ou do Laser Shock Peening (LSP) aplicados na superfície de uma junta soldada?",
        alternativas: {
            A: "Maximizar as tensões residuais de tração para elevar o limite de escoamento elástico da ZTA.",
            B: "Eliminar inclusões de escória subsuperficiais através de ondas de choque acústicas.",
            C: "Reduzir o tamanho de grão de forma homogênea em toda a espessura de chapas grossas.",
            D: "Induzir tensões residuais compressivas superficiais, aumentando significativamente a vida em fadiga da peça."
        },
        correta: "D",
        explicacao: "As tensões residuais compressivas induzidas na superfície agem fechando as microfissuras nascentes, o que retarda a iniciação e a propagação de falhas por fadiga sob carregamentos cíclicos."
    },
    {
        id: 38,
        disciplina: "Soldagem",
        texto: "Na soldagem por resistência a ponto (RSW), o calor gerado obedece à lei de Joule (Q = I² × R × t). Qual parcela da resistência elétrica total (R) deve ser a mais expressiva para a formação adequada do nugget (lentilha)?",
        alternativas: {
            A: "A resistência de contato na interface entre as duas chapas que estão sendo unidas.",
            B: "A resistência interna dos próprios eletrodos de cobre.",
            C: "A resistência de contato entre a ponta do eletrodo e a superfície externa da chapa.",
            D: "A resistência intrínseca do metal de base longe da zona de acoplamento mecânico."
        },
        correta: "A",
        explicacao: "Como o pico de resistência elétrica ocorre na interface de união das chapas, o calor se concentra exatamente ali, gerando a fusão localizada ideal para a formação da lentilha soldada."
    },
    {
        id: 39,
        disciplina: "Soldagem",
        texto: "Com base em critérios empíricos consagrados, qual é o diâmetro (d) mínimo recomendado para a lentilha (nugget) de uma solda ponto aceitável em função da espessura da chapa mais fina (e)?",
        alternativas: {
            A: "d = 2 × √e",
            B: "d = 4 × √e a d = 5 × √e",
            C: "d = 6 × √e",
            D: "d = e²"
        },
        correta: "B",
        explicacao: "Esta faixa empírica (adotada por normas como a AWS) garante uma área de cisalhamento robusta o suficiente para suportar as cargas de projeto estipuladas sem sofrer arrancamento prematuro."
    },
    {
        id: 40,
        disciplina: "Soldagem",
        texto: "Por que os fluxos aglomerados utilizados no processo SAW exigem cuidados rigorosos de secagem prévia em estufa, diferentemente dos fluxos fundidos?",
        alternativas: {
            A: "Porque sua granulometria fina impede a passagem do arco elétrico caso fiquem frios.",
            B: "Porque eles sofrem reações exotérmicas espontâneas na presença de oxigênio do ar seco.",
            C: "Porque contêm aglutinantes solúveis (como silicatos) que os tornam altamente higroscópicos, absorvendo umidade do ar facilmente.",
            D: "Porque o resfriamento natural altera sua composição química estrutural ácida."
        },
        correta: "C",
        explicacao: "A higroscopicidade dos aglutinantes químicos retém água/umidade que, se levada ao arco elétrico, dissocia-se em hidrogênio, causando severas porosidades e o risco de trincas a frio."
    },
    {
        id: 41,
        disciplina: "Soldagem",
        texto: "Qual é o impacto mecânico direto das tensões residuais de tração localizadas na Zona Afetada pelo Calor (ZTA) de uma estrutura soldada?",
        alternativas: {
            A: "São altamente prejudiciais, pois facilitam a propagação de microtrincas e reduzem drasticamente a vida útil sob fadiga.",
            B: "São benéficas, pois elevam a ductilidade local e impedem falhas catastróficas por fratura frágil.",
            C: "São irrelevantes para o desempenho mecânico, afetando apenas a estabilidade dimensional estética da peça.",
            D: "Atuam como uma barreira protetora contra o fenômeno de trinca por corrosão sob tensão (SCC)."
        },
        correta: "A",
        explicacao: "Ao tracionar a região da ZTA, essas tensões atuam em conjunto com as forças de carregamento externas, facilitando a abertura de trincas e acelerando o processo de fadiga."
    },
    {
        id: 42,
        disciplina: "Soldagem",
        texto: "Qual a principal função metalúrgica do pré-aquecimento antes da execução da soldagem em aços de alta temperabilidade?",
        alternativas: {
            A: "Aumentar a velocidade de fusão do metal de adição para acelerar a produtividade do processo.",
            B: "Queimar completamente os elementos desoxidantes superficiais para purificar o banho de fusão.",
            C: "Reduzir o gradiente térmico e a taxa de resfriamento, minimizando tensões residuais e evitando a formação de microestruturas frágeis como a martensita.",
            D: "Eliminar a necessidade de escorificação mecânica entre os passes em soldagens multipasse."
        },
        correta: "C",
        explicacao: "Ao desacelerar a taxa de resfriamento da junta soldada, dá-se tempo para transformações de fase mais estáveis e dúcteis, além de favorecer a efusão do hidrogênio."
    },
    {
        id: 43,
        disciplina: "Soldagem",
        texto: "Em termos de velocidade de avanço na soldagem mecanizada monoarame, como o processo de Arco Submerso (SAW) se compara tipicamente ao FCAW-G manual ou semiautomático?",
        alternativas: {
            A: "O SAW opera com velocidades inferiores devido ao peso excessivo da camada de fluxo granular.",
            B: "Ambos operam na mesma faixa de velocidade devido às limitações físicas da poça de fusão aberta.",
            C: "O FCAW-G é sempre mais rápido porque o fluxo gasoso externo acelera o deslocamento do arco elétrico.",
            D: "O SAW atinge velocidades significativamente superiores, variando tipicamente entre 40 e 120 cm/min."
        },
        correta: "D",
        explicacao: "O alto nível de automação e controle do SAW aliado a correntes elétricas muito elevadas possibilita velocidades de avanço e taxas de deposição muito superiores às do FCAW manual."
    },
    {
        id: 44,
        disciplina: "Soldagem",
        texto: "O processo de soldagem por eletroescória (ESW) é tecnicamente recomendado e projetado para qual nicho de aplicação industrial?",
        alternativas: {
            A: "Chapas de grande espessura (geralmente > 25 mm) soldadas na posição vertical em passe único.",
            B: "Chapas finas (< 10 mm) devido ao seu controle térmico extremamente refinado e arco focado.",
            C: "Soldagem de ligas leves de alumínio em alta velocidade na posição sobre-cabeça.",
            D: "Reparos rápidos de tubulações de pequeno diâmetro sob condições de alta pressão."
        },
        correta: "A",
        explicacao: "O processo ESW aproveita a geração de calor por efeito Joule na escória líquida condutora para fundir e unir grandes seções de metal em um único passe contínuo ascendente."
    },
    {
        id: 45,
        disciplina: "Soldagem",
        texto: "Que característica metalúrgica do fluxo contido no interior dos arames tubulares (FCAW) confere a este processo uma boa tolerância a superfícies com oxidação ou ferrugem leve?",
        alternativas: {
            A: "A ausência total de elementos químicos reativos, forçando uma dissolução puramente mecânica da ferrugem.",
            B: "O caráter altamente ácido dos gases de proteção gerados, que corroem quimicamente a carepa de laminação sólida.",
            C: "A presença de potentes agentes desoxidantes (como Al, Mg, Si e Mn) no núcleo do arame que reagem quimicamente com os óxidos superficiais.",
            D: "A capacidade do fluxo de reter oxigênio livre dissolvido no interior da estrutura cristalina final da solda."
        },
        correta: "C",
        explicacao: "Estes elementos desoxidantes ligam-se ao oxigênio livre proveniente da oxidação superficial do metal de base antes que ele reaja com o carbono, direcionando esses óxidos para a escória e evitando porosidades."
    },
    {
        id: 46,
        disciplina: "Soldagem",
        texto: "Na soldagem FCAW-G de aços carbono, qual o efeito do uso de gás CO2 puro no perfil de penetração do cordão em comparação com misturas ricas em Argônio (Ar + CO2)?",
        alternativas: {
            A: "O CO2 puro gera um perfil de penetração raso e estreito em formato de 'dedo de luva'.",
            B: "Ambos geram penetrações idênticas, alterando apenas a taxa de respingos gerada na transferência.",
            C: "Misturas ricas em Argônio conferem uma penetração em bacia significativamente mais larga do que o CO2 puro.",
            D: "O CO2 puro proporciona maior penetração (mais larga e profunda em formato de bacia) devido à sua alta condutividade térmica no arco."
        },
        correta: "D",
        explicacao: "A dissociação endotérmica e subsequente recombinação emocionante do CO2 na superfície da peça transferem alta energia térmica, gerando uma penetração ampla e em bacia."
    },
    {
        id: 47,
        disciplina: "Soldagem",
        texto: "Por que a formação de martensita na Zona Afetada pelo Calor (ZTA) deve ser evitada na maioria das aplicações estruturais de aços?",
        alternativas: {
            A: "Porque reduz drasticamente a dureza e o limite de escoamento, fragilizando a capacidade de carga.",
            B: "Porque ela gera uma microestrutura extremamente dura, frágil e altamente suscetível a trincas induzidas por hidrogênio (trincas a frio).",
            C: "Porque impede a aderência da escória e inviabiliza a execução de passes subsequentes de acabamento.",
            D: "Porque ela evapora sob temperaturas moderadas de serviço, gerando vazios internos na junta soldada."
        },
        correta: "B",
        explicacao: "A estrutura cristalina tetragonal tensionada da martensita possui altíssima dureza mas baixíssima tenacidade (alta fragilidade), sendo o principal sítio para o surgimento de trincas a frio por hidrogênio."
    },
    {
        id: 48,
        disciplina: "Soldagem",
        texto: "Qual é o fator físico primordial responsável pelas elevadas taxas de deposição encontradas no processo FCAW em comparação com o GMAW de mesmo diâmetro externo de arame?",
        alternativas: {
            A: "A alta densidade de corrente decorrente da condução elétrica concentrada exclusivamente na seção da bainha metálica do arame.",
            B: "A ocorrência de intensas reações exotérmicas autossustentadas no fluxo interno do arame tubular.",
            C: "O efeito de resfriamento provocado pelo fluxo central, que contrai o arco e acelera a fusão.",
            D: "O uso exclusivo de tensões operacionais superiores a 45 V que aumentam a força do arco elétrico."
        },
        correta: "A",
        explicacao: "Como a corrente elétrica só passa pela bainha metálica (já que o fluxo interno não conduz eletricidade), a área condutora efetiva diminui, elevando a densidade de corrente e acelerando a fusão por efeito Joule."
    },
    {
        id: 49,
        disciplina: "Soldagem",
        texto: "Quais são duas características fundamentais do processo de soldagem por Feixe de Elétrons (EBW)?",
        alternativas: {
            A: "Dispensa total de sistemas de vácuo e perfil de solda raso e largo ideal para chapas finas.",
            B: "Uso exclusivo de fluxo granular inerte para proteção e proporção de cordão limitada a 1:1.",
            C: "Operação obrigatória com corrente alternada de baixa frequência e penetração restrita a materiais não ferrosos.",
            D: "Exigência de operação em ambiente de alto vácuo e capacidade de gerar cordões com altíssima relação profundidade/largura (superior a 20:1)."
        },
        correta: "D",
        explicacao: "O alto vácuo é obrigatório para evitar a colisão e dispersão dos elétrons com moléculas de ar, e a altíssima concentração de energia viabiliza o efeito keyhole (capilar de vapor) profundo."
    }
];

// Funções auxiliares
function getTodasDisciplinas() {
    const disciplinas = [...new Set(questoesDB.map(q => q.disciplina))];
    return disciplinas;
}

function getQuestoesPorDisciplina(disciplina) {
    if (disciplina === "todas") return questoesDB;
    return questoesDB.filter(q => q.disciplina === disciplina);
}

function getQuestaoById(id) {
    return questoesDB.find(q => q.id === id);
}

// Exportar para uso global
window.questoesDB = questoesDB;
window.getTodasDisciplinas = getTodasDisciplinas;
window.getQuestoesPorDisciplina = getQuestoesPorDisciplina;
window.getQuestaoById = getQuestaoById;

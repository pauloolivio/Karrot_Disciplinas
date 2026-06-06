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
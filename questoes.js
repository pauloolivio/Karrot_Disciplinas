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
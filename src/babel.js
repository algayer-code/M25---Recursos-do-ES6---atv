const alunos = [
    { nome: 'Kamai', nota: 8 },
    { nome: 'Carlos Henrique', nota: 6 },
    { nome: 'João Vitor', nota: 7 },
    { nome: 'Paulo', nota: 4 },
    { nome: 'João Miguel', nota: 5 }
];

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);

console.log(alunosAprovados);
function retornar_status_aluno(nota_1, nota_2){
    let media = (nota_1 + nota_2) / 2;
    let status;

    if(media >= 6){
        status = "Aprovado";
    }else{
        status = "Reprovado";
    }

    return status;
}

let status_alunos_1 = retornar_status_aluno(7,8);
console.log("Aluno 1: " + status_alunos_1);

let status_alunos_2 = retornar_status_aluno(4,7);
console.log("Aluno 2: " + status_alunos_2);
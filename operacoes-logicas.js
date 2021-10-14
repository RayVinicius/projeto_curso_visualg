var nome, nota1, nota2, passou;

passou = false;

nome = prompt("Digite o nome do aluno: ")
nota1 = prompt("Digite a primeira nota: ")  
nota2 = prompt("Digite a segunda nota: ")

media = (parseInt(nota1) + parseInt(nota02)) / 2;

if(media >= 5)
    passou = true;

if(passou && (media >= 7 || media <= 9))  //disjunção exclusiva
    alert("Aprovado!" + nome)
else
    alert("Reprovado!" + nome)
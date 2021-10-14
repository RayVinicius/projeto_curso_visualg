   var nome,nota1,nota2;
   nome = prompt("Qual o nome do aluno? ")
   nota1 = prompt("Qual foi a primera nota? ")
   nota2 = prompt("Qual foi a segunda nota? ")

   media = (parseInt(nota1) + parseInt(nota2)) / 2

   if(media >= 7)
        alert("Aprovado! " + nome)

   else
        alert("Reprovado! " + nome)
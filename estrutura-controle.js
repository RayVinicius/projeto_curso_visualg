    /*   escreval("Qual o nome do aluno? ")
   leia(nome)
   escreval("Qual foi a primera nota? ")
   leia(nota1)
   Escreval("Qual foi a segunda nota? ")
   leia(nota2)
   media <- (nota1 + nota2) / 2
   se media >= 5  entao
      escreval("Aprovado! ", nome)
   senao
      escreval("Reprovado. ", nome)
   fimse*/

   var nome,nota1,nota2;
   nome = prompt("Qual o nome do aluno? ")
   nota1 = prompt("Qual foi a primera nota? ")
   nota2 = prompt("Qual foi a segunda nota? ")

   media = (parseInt(nota1) + parseInt(nota2)) / 2

   if(media >= 7)
        alert("Aprovado! " + nome)

   else
        alert("Reprovado! " + nome)
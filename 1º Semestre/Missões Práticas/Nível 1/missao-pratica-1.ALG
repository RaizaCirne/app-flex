Algoritmo "NumerosPrimos"
// Disciplina  : [Nível 1 - Desvendando Essa Caixa Preta]
// Tutor       : Andre Przewodowski Filho
// Descrição   : Implementar um algoritmo para imprimir e somar todos os números menores ou iguais a um determinado número primo.
// 1º Objetivo : Utilizar comandos iterativos e condicionais para desenvolver o algoritmo.
// 2º Objetivo : Fornecer um número (N) para o algoritmo imprimir e somar todos os números primos menores ou iguais a N.
// Autor(a)    : Raíza Cirne Braz
// Data atual  : 12/10/2022
Var
   N, contador, divisor, quantDiv, soma : Inteiro
Inicio

   divisor <- 1
   quantDiv <- 0
   soma <- 0

   Escreva ("Digite um número: ")
   Leia (N)
   Para contador <- N até 2 passo - 1 faca
      Enquanto (divisor <= contador) faca
         Se (contador % divisor = 0 ) entao
            quantDiv <- quantDiv + 1
         FimSe
         divisor <- divisor + 1
      FimEnquanto
      Se quantDiv = 2 entao
         Escreval ("O número", contador, " é primo ")
         soma <- soma + contador
      FimSe
      quantDiv <- 0
      divisor <- 1
   FimPara
   Escreval ("A soma de todos os números menores iguais a", N, " é:", soma )
Fimalgoritmo

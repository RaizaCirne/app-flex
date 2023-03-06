"""
Implementar um algoritmo de conversão de um número da base decimal para base binária

1º Objetivo: Utilizar recursos lógicos da linguaguem de programação Python, com comandos iterativos.
2º Objetivo: Entrar com qualquer número inteiro positivo na base decimal e o programa deve produzir o número
correspondente na base binária.
"""

num = eval(input('Informe o número inteiro desejado: '))
n = num
resultadodiv = 1
lista = []

while resultadodiv >= 1:
    resto = num % 2
    lista.insert(0, resto)
    resultadodiv = num // 2
    num = resultadodiv

binario = ''.join([str(item) for item in lista])
print('O número {} vale {} na base binária'.format(n, binario))
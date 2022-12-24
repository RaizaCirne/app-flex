"""
Implementar um algoritmo de para obter o conjunto das partes de um conjunto

1º Objetivo: Utilizar estruturas de dados como listas, comandos condicionais e iterativos.
2º Objetivo: Entrar com uma lista que representa um conjunto e o programa deve produzir o seu respectivo conjunto
das partes.
"""


# Função: Cálculo de subconjuntos

def subConj(n):
    return subConj_recursivo([], sorted(n))


def subConj_recursivo(atual, conj):
    if conj:
        return subConj_recursivo(atual, conj[1:]) + subConj_recursivo(atual + [conj[0]], conj[1:])
    return [atual]


# Entrada de Dados
n = [1, 2, 3]
resultado = subConj(n)

print('O número de elementos do conjunto {} é {}'.format(n, len(resultado)))
print('As partes do conjunto {} são: {}'.format(n, resultado))



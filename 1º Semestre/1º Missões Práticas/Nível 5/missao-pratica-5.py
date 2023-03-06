"""
Implementar um programa para manipular dados de um arquivo texto e visualizá-los em um histograma e nuvem de palavras.

1º Objetivo: Gerar dados de teste.
2º Objetivo: Gravar e recuperar dados de arquivos textos.
3º Objetivo: Manipular os dados para visualizá-los em um histograma.
4º Objetivo: Manipular os dados para visualizá-los em uma nuvem de palavras.


1) Título:
Implementação de um programa para manipular dados de um arquivo texto e visualizá-los em um histograma e nuvem de palavras.

2) Objetivo da Prática:
2.1 Gravar e recuperar dados de arquivos textos \
2.2 Manipular os dados para visualizá-los em um histograma \
2.3 Manipular os dados para visualizá-los em uma nuvem de palavras \
2.4 Implementar um programa para gerar dados com nomes de pessoas e respectivas pontuações, gravar em um arquivo, recuperar os dados do arquivo, visualizar os dados das pontuações das pessoas em um histograma e em uma nuvem de palavras.
"""

#Instalação de Pacotes

pip install faker -q
pip install wordcloud -q
pip install num2words -q

#Bibliotecas

import matplotlib.pyplot as plt
from faker import Faker
from wordcloud import WordCloud
from num2words import num2words
from datetime import  datetime
import  numpy as np
import pandas as pd

#Lista

dados_aleatorios = Faker('pt_BR')
dados_lista = []
notas = []
nomes = []

#Gravação de Dados em arquivo

for i in range(20):
    dados = ('Nome: ' + dados_aleatorios.name() + ' - ' + 'Nota: ' + str(dados_aleatorios.random_int(1, 10)))
    dados_lista.append(dados)

with open('Dados.txt', 'w', encoding='utf-8') as arquivo:
    for valor in dados_lista:
        arquivo.write(valor + '\n')

#Recuperando dados do arquivo

with open('Dados.txt', 'r', encoding='utf-8') as arquivo_recuperar:
    for i in range (len(dados_lista)):
        ler = arquivo_recuperar.readline()
        separar_notas = ler.split(' ')
        nota = int(separar_notas[-1])
        notas.append(nota)
        nomes_2 = num2words(nota, lang= 'pt_BR')
        nomes.append(nomes_2)
        nome_str = (' ').join(nomes)

#Histograma

plt.title('Histograma das Pontuações')
plt.xlabel('Pontuações')
plt.ylabel('Probabilidade')
plt.hist(notas,  density=True, facecolor='lightgreen', rwidth=0.80)
plt.show()

#Nuvem de Palavras

nuvem_palavras = WordCloud(background_color='Pink', width=500,height=300).generate(nome_str)
plt.imshow(nuvem_palavras, interpolation='bilinear')
plt.axis("off")
plt.show()
nuvem_palavras.to_file("Nuvem de palavras.png")

"""
Relatório: 

Análise e Conclusão:
a. Qual a importância de manipular arquivos de texto?
O sistema de arquivos executa diversas tarefas utilizando arquivos. Saber manipular dados de arquivos de textos é importante, pois além de armazenar, ler dados, podemos utilizar como arquivo de memória de interface e pegar informações da nuvem que são gravadas. Além disso, são leves, portanto, é possível gravar, ler com facilidade e utilizar informações rapidamente nos bancos de dados.

b. Qual a importância de visualizar dados em um histograma?
O histograma nos mostra uma distribuição dos valores e seu comportamento. Com ele conseguimos juntar dados em grupos ou categorias, o que facilita a visualização, sobretudo, quado temos um grupo volumoso de dados.

c. O que significa a visualização por nuvem de palavras?
É uma imagem que contém diversas palavras que são representadas visualmente. Na nuvem de palavras, o destaque é dado às palavras que aparecem com mais frequência. São muito úteis para análise de texto.
"""









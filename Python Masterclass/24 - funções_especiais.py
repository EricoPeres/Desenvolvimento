# Funções lambda (anonimas)
# Sintaxe:
# lambda argumentos: expressão

#quadrado = lambda x: x ** 2
#for i in range(1,11):
    #print(quadrado(i))
# descobrir se um número é par
#par = lambda x: x % 2 == 0
#print(par(8))
# transformar F em Cecius
#f_c = lambda f: (f - 32) * 5/9
#print(f_c(32))

# Função Map - função que aplica funções
# Sintaxe:
# map(função, iterável)

#num = [1,2,3,4,5,6,7,8]
#dobro = list(map(lambda x: x * 2, num))
#print(dobro)

#palavras = ['Python', 'é', 'uma', 'linguaguem', 'de', 'programação']
#maiúsculas = list(map(str.upper, palavras))
#print(maiúsculas)

# Função filter()
# Sintaxe:
# filter(função, sequência)

#def numeros_pares(n):
    #return n % 2 == 0

#numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13]
#num_par = list(filter(numeros_pares, numeros))
#print(num_par)

#num_impar = list(filter(lambda x: x % 2 != 0, numeros))
#print(num_impar)

# Função reduce - (tem que ser importada) acumula valores de uma sequência
# Sintaxe:
# reduce(função, sequência, valor_inicial)

from functools import reduce

#def mult(x, y):
#    return x * y

#numeros = [1,2,3,4,5,6]

#total = reduce(mult, numeros)
#print(total)

# Soma cumulativa dos quadrados de valores, usando expressão lambda

numeros = [1,2,3,4]
total = reduce(lambda x, y: x ** 2 + y ** 2, numeros)
print(total)
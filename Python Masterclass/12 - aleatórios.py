import random

#valor = random.randint(1,20)
#print(valor)

print('Gerar cinco números aleatórios entre 1 e 50: \n')
for i in range(5):
    n = random.randint(1,50)
    print(f'Número gerado: {n}')

# Gerar um número de ponto flutuante
valor = random.random()
print(f'\nNúmero gerado: {valor * 10}')

# Gerar um número de ponto flutuante arredondando
valor = random.random()
print(f'\nNúmero gerado: {round(valor * 10, 2)}')

# Gerar um número de ponto flutuante especificando o início e o fim
valor = random.uniform(1,5)
print(f'\nNúmero: {round(valor, 4)}')

L = [2,4,6,9,10,13,14,16,18,20,21,23,25]
n = random.choice(L)
print(f'\nNúmero escolhido da lista: {n}')

# retirando uma quantidade de números de uma lista
n = random.sample(L,3)
print(f'\nNúmeros escolhidos da lista: {n}')

# embaralhar os números de uma lista
print(f'\nExibir a lista original: {L}')
print(f'Embaralhar a lista e exibi-la:')
n = random.shuffle(L)
print(f'{L}')
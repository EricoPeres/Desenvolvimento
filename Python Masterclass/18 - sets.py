# Sets são conjuntos não ordenados de elementos únicos
planeta_anao = {'Plutão', 'Ceres', 'Eres', 'Haumea', 'Makemake'}
#print(planeta_anao)
#print(len(planeta_anao))
#print('Ceres' in planeta_anao)

#for astro in planeta_anao:
#    print(astro)

#for astro in planeta_anao:
#    print(astro.upper())

# Criando um conjunto com base de uma lista
#astros = ['Lua', 'Vênus', 'Sirius', 'Marte', 'Lua']
#print(astros, end=' ')
#astro_set = set(astros)
#print(astro_set)

# Comparações entre conjuntos
astros1 = {'Lua', 'Vênus', 'Sirius', 'Marte'}
astros2 = {'Lua', 'Vênus', 'Sirius', 'Marte', 'Cometa de Halley'}
#print(astros1 == astros2)
#print(astros1 != astros2)

# União de conjuntos
#print(astros1 | astros2)
#print(astros1.union(astros2))

# Intersecção de conjuntos
#print(astros1 & astros2)
#print(astros1.intersection(astros2))

# Diferença simétrica de conjuntos
#print(astros1 ^ astros2)
#print(astros1.symmetric_difference(astros2))

# Adicionar e remover elementos em um conjunto
astros1.add('Urano')
astros1.add('Sol')
astros1.remove('Lua')
astros1.discard('Marte')
astros1.pop() # remove um dos elementos aleatoriamente
astros1.clear() # limpa todos os elementos
print(astros1)
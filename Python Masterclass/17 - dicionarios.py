# Dicionários (são coleções desordenadas de itens)

elemento = {
    'Z': 3,
    'nome': 'Lítio',
    'grupo': 'Metáis Alcalinos',
    'densidade': 0.534
}
print(f'Elemento: {elemento['nome']}')
print(f'Densidade: {elemento['densidade']}')
print(f'O dicionário possui {len(elemento)} elementos')

# Atualizar uma entrada
elemento['grupo'] = 'Alcalinos'
print(elemento)

# Adicionar uma entrada
elemento['período'] = 1
print(elemento)

# Listar os itens do dicionário
print(elemento.items())
for i in elemento.items():
    print(i)

# Listar somente as chaves do dicionário
print(elemento.keys())
for i in elemento.keys():
    print(i)

# Listar somente os valores do dicionário
print(elemento.values())
for i in elemento.values():
    print(i)

# Exclusão de itens em dicionários
del elemento['nome']
print(elemento)
# Limpa todos os itens do dicionário
elemento.clear()
print(elemento)
# Exclui o dicionário
del elemento
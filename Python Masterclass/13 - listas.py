# Lista: representa uma sequencia de valores 
# Sintaxe: nome_lista = [valores]

#notas = [5,7,8,6,9]
#print(notas)

n1 = [4,6,7,8,0,3]
n2 = [1,6,3,0,12,11]
valores = n1 + n2
print(valores)
print(type(valores))
print(valores[0])
# imprimir o último valor da lista
print(valores[-1])
# alterando um valor da lista
valores[0] = 9
# imprimindo dois primeiros valores da lista
print(valores[0:2])
# quantos elementos tem na lista
print(f'Quantos elementos tem na litas: {len(valores)}')
# retornar uma versão ordenada da lista
print(sorted(valores))
# retornar uma versão ordenada na ordem inversa
print(sorted(valores, reverse=True))
# somar os valores da lista
print(f'O valor da soma é: {sum(valores)}')
# valor mínimo da lista
print(min(valores))
# valor máximo da lista
print(max(valores))

# acrecentando um valor a lista
valores.append(13)
print(f'\nA lista com a adição do número: {valores}')

# excluíndo um valor a lista
valores.pop(3)
print(f'\nA lista com a exclução do número: {valores}')

# acrecentando um valor em uma posição expecífica
valores.insert(3,21)
print(f'\nA lista depois da inserção do número 21: {valores}')

# verificando se existe um valor específico na lista
print(12 in valores)
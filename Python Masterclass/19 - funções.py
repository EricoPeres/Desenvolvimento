# Funções são um bloco de códigos
# Modularização, reúso de código, legibilidade
# Existem dois tipos de funções, internas (buit-in) ou criadas

#def mensagem():
#    print('Bóson Treinamentos em Tecnologia')
#    print('Curso completo de Python')

#mensagem()

# Função com argumentos
#def soma(a, b):
#    print(a+b)

#soma(12, 7)

# Função com return
#def mult(x, y):
#    return x * y

#a = 5
#b = 8
#c = mult(a, b)
#print(f'O produto de {a} e {b} é {c}')

#def div(k, j):
#    if j != 0:
#        return k / j
#    else:
#        return 'Impossível dividir por zero!'

#if __name__ == '__main__':
#    a = int(input('Digite um número: '))
#    b = int(input('Digite outro número: '))

#    r = div(a, b)
#    print(f'{a} dividido por {b} é igual a {r}')

def quadrado(val):
    quadrados = []
    for x in val:
        quadrados.append(x ** 2)
    return quadrados

if __name__ == '__main__':
    valores = [2,5,7,9,12]
    resultados = quadrado(valores)
    for g in resultados:
        print(g)
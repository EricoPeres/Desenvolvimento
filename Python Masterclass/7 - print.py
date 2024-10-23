# Sintaxe:
# print(objetos, argumentos)

mensagem = 'Função print()'
#print(mensagem)
#print('Aula de Python')

nome = "Érico Stefanni"
#print('Bóson Treinamentos -', nome)

nome = "Érico Stefanni"
canal = "Bóson Treinamentos"
#print(canal, '-', nome)

nome = input('Digite seu nome: ')
#print('Olá ' + nome + ' !Bem-vindo ao curso de Python!')

# para imprimir e continuar na linha
#print('Imprime a mensagem e muda a linha')
#print('Imprime a mensagem e permanece na lina.', end=' ')
#print('Continua na linha')

nome = 'Maria'
idade = 30
msg_formatada = 'O nome dela é {0} e ela tem {1} anos.'.format(nome, idade)
#print(msg_formatada)

nome = 'Fábio'
peso = 73.50
msg = f'Olá, meu nome é {nome} e eu peso {peso} quilos.'
#print(msg)

a = 10
b = 5
res = f'A soma de {a} com {b} é: {a+b}'
#print(res)

valor = 125.5566987
#print(f'O valor é: {valor:.2f}')

# caracter de escape (para imprimir as aspas no número)
valor = 125.5566987
#print(f'O valor é: \'{valor:.2f}\'')

# imprimir como tabela
nome = 'João'
idade = 32
#print(f'Nome:\t{nome}\tidade:\t{idade}')
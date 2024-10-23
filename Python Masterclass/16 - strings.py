curso = 'Curso de Python'
nome = 'Érico'
letra = nome[2]
#print(letra)
#print(len(nome))
# concatenar
#print(curso + ' com ' + nome)
# separar em partes uma string
frase = 'Vamos aprender Python hoje.'
#palavras = frase.split()
#print(palavras)
#for palavra in palavras:
#    print(palavra)
# fazer slice de uma string
#print(frase[0:5])
#print(frase[-3:])

# procurar um caracter em uma string
#email = input('Digite seu endereço de email: ')
#arroba = email.find('@')
#print(arroba)
#usuario = email[0:arroba]
#dominio = email[arroba+1:]
#print(usuario)
#print(dominio)

# associações em string
#produtos = 'carbonato de sódio e óxido de zinco'
#print('sódio' in produtos)
#print('magnésio' in produtos)
#print('magnésio' not in produtos)

# procurando um caracter ou uma sequencia
#item = 'hipoclorito'
#pos = item.find('clor')
#print(pos)
#pos = item.find('flu')
#print(pos)

# trabalhar com maisculos e minusculos
#objeto_celeste = 'galáxia esPiral M31'
#print(objeto_celeste.upper())
#print(objeto_celeste.lower())
#print(objeto_celeste.capitalize())
#print(objeto_celeste.title())

# Criar uma nova string com base em outra
#suplemento = 'cloreto de magnésio'
#n_suplemento = suplemento.replace('magnésio', 'zinco')
#print(suplemento)
#print(n_suplemento)

# Eliminando espaços em uma string
#frase = '        Ômega 3 é bom para a saúde!     '
#print(frase)
#print(frase.lstrip())
#print(frase.rstrip())
#print(frase.strip())

# Alinhamento de texto
#fruta = 'Abacate'
#print(fruta)
#print(fruta.rjust(20))
#print(fruta.center(20))
#print(fruta.ljust(20))
#print(fruta.ljust(20, "-"))

# Prefíxos e sufíxos
#p = 'Bóson Treinamentos'
#print(p.startswith('Bó'))
#print(p.endswith('tos'))

# Docstrings
texto = '''
Doctrings é uma espécie de documentação que podemos
inserir dentro de um módulo, função ou classe no 
Python, entre outros locais.
    Respeita deslocamento do texto e é     multilinhas

'''
print(texto)
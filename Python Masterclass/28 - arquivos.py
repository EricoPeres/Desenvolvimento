# Manipulação de arquivos de texto.

#manipulador = open('arquivo.txt', 'r', encoding='utf-8')
#print(f'\nMétodo read():\n')
#print(manipulador.read())

#print(f'\nMétodo readline():\n')
#print(manipulador.readline())
#print(manipulador.readline())

#print(f'\nMétodo readlines():\n')
#print(manipulador.readlines())
texto = input('Qual o termo deseja procurar no arquivo?')
try:
    manipulador = open('C:\\Users\\55619\\OneDrive\\Documentos\\SERIAL OFFICE 2010.txt', 'r', encoding='utf-8')
    for linha in manipulador:
        linha = linha.rstrip()
        if texto in linha:
            print(f'A string foi encontrada!')
            print(linha)
        else:
            print(f'A string não foi encontrada!')
except IOError:
    print(f'Não foi possível abrir o arquivo')
else:
    manipulador.close()
# Escrever em arquivo de texto
# para escrever 'w'
try:
    manipulador = open('arquivo.txt', 'w', encoding='utf-8')
    manipulador.write('Bóson Treinamentos\n')
    manipulador.write('Como criar um arquivo de texto com Python.\n')
except IOError:
    print(f'Não foi possível abrir o arquivo')
else:
    manipulador.close()
    
# para acresentar 'a'
try:
    manipulador = open('arquivo.txt', 'a', encoding='utf-8')
    manipulador.write('Pyton é muito empregado em IA\n')
    manipulador.write('Inteligência Artificial veio para ficar.')
except IOError:
    print(f'Não foi possível abrir o arquivo')
else:
    manipulador.close()

# escrevendo uma lista
frutas = ['Morango\n', 'Uva\n', 'Caju\n', 'Amora\n', 'Framboesa\n', 'Graviola']
try:
    manipulador = open('arquivo.txt', 'a', encoding='utf-8')
    manipulador.writelines(frutas)    
except IOError:
    print(f'Não foi possível abrir o arquivo')
else:
    manipulador.close()
# Escopo Global e Local

var_global = "Curso Completo de Python"

def escreve_texto():
    var_global = 'Banco de Dados com SQL'
    var_local = 'Érico Stefanni'
    print(f'Variável Global: {var_global}')
    print(f'Variável Local: {var_local}')

if __name__ == '__main__':
    print(f'Executar a função escreve_texto()')
    escreve_texto()

    print('Tentar acessar as variáveis diretamente')
    print(f'Variável Global: {var_global}') # só consigo executar a função global, a local só dentro da função.
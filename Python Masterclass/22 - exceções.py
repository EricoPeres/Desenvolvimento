# Exceção é um objeto que representa um erro que ocorreu ao executar o programa.
# Blocos try ... except

def div(k, j):
    return round(k / j, 2)

if __name__ == '__main__':
    while True:
        try:
            n1 = int(input('Digite um número: '))
            n2 = int(input('Digite um outro número: '))
            break
        except ValueError:
            print('Ocorreu um erro ao ler o valor, tente um número inteiro')

    try:
        r = div(n1, n2)
    except ZeroDivisionError:
        print(f'Não é possível dividir por zero!')
    except:
        print(f'Ocorreu um erro desconhecido, tente novamente.')
    else:
        print(f'Resultado: {r}')
    finally:
        print(f'\nFim do cálculo')
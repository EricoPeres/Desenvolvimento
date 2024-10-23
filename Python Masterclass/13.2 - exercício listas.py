bebidas = []

for i in range(5):
    print(f'Digite uma bebida favorita:')
    bebida = input()
    bebidas.append(bebida)

bebidas.sort()

print(f'\nBebidas escolhidas:')
for bebida in bebidas:
    print(bebida)

print(f'\nSaúde!!')
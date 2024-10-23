# São imutáveis
halogenios = ('F', 'Cl', 'Br', 'I', 'At')
gases_nobres = ('He', 'Ne', 'Ar', 'Xe', 'Kr', 'Rn')
elementos = halogenios + gases_nobres
#print(elementos)
# contar um elemento de uma tupla
t1 = (5,2,6,8,4,5,6,4,4,0,12,22,3,4,5)
#print(t1.count(5))
# fazer slice de uma tupla
#print(elementos[:3])
# verificar se um elemento está presente na tupla
#print('Cl' in halogenios)
# soma de elementos numéricos de uma tupla
print(sum(t1))
# operações não disponíveis em tuplas: .sort(), .append(), .reverse(), .pop()...

#for elemento in elementos:
    #print(f'Elemento químico: {elemento}')

# criar uma lista a partir de uma tupla
grupo17 = list(halogenios)
#print(grupo17)

# criar uma tupla a partir de uma lista
grupo1 = ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr']
alcalinos = tuple(grupo1)
print(alcalinos)
print(type(alcalinos))
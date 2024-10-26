import xmltodict
import os
import json # importar a biblioteca json pra faciliar a visualização dos dados, não é necessário para o funcionamento do programa
import pandas as pd

def pegar_infos(nome_arquivo, valores):
    # print(f"Pegou as informações {nome_arquivo}")
    with open(f'nfs/{nome_arquivo}', "rb") as arquivo_xml:  #ler os arquivos e o caminho, colocar na variável arquivo_xml
        dic_arquivo = xmltodict.parse(arquivo_xml)
        
        try: # o try e expect é para tratar os possíveis erros, mas depois de todos tratados, pode ser removido
            if "NFe" in dic_arquivo: #condicional para procurar as informações nos dois tipos de nota fiscal                        
                infos_nf = dic_arquivo["NFe"]["infNFe"] #pegando as informações desses grupos na nota fiscal
            else:
                infos_nf = dic_arquivo["nfeProc"]["NFe"]["infNFe"]
            numero_nota = infos_nf["@Id"]
            empresa_emissora = infos_nf["emit"]["xNome"]
            nome_cliente = infos_nf["dest"]["xNome"]
            endereco = infos_nf["dest"]["enderDest"] #vai pegar o endereço completo em uma única célula no excel
            if "vol" in infos_nf["transp"]:
                peso = infos_nf["transp"]["vol"]["pesoB"]
            else:
                peso = "Não informado"
            # print(numero_nota, empresa_emissora, nome_cliente, endereco, peso, sep="\n") #para printar os valores das notas na tela
            valores.append([numero_nota, empresa_emissora, nome_cliente, endereco, peso])

        except Exception as e:
            print(e)
            print(json.dumps(dic_arquivo, indent=4))

lista_arquivos = os.listdir("nfs")

colunas = ["numero_nota", "empresa_emissora", "nome_cliente", "endereco", "peso"]
valores = []

for arquivo in lista_arquivos:
    pegar_infos(arquivo, valores)

tabela = pd.DataFrame(columns=colunas, data=valores)
tabela.to_excel("NotasFiscais.xlsx", index=False)

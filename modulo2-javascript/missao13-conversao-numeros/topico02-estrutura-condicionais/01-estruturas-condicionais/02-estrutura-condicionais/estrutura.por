programa
{
	
	funcao inicio()
	{
		//DECLARAÇÃO DAS VARIAVEIS
		real numero1
		real numero2
		caracter operacao

		//ENTRADA DE DADOS DO USUARIO
		escreva("Mini calculadora de dois numeros\n\n")

		escreva("Digite o primeiro numero: ")
		leia(numero1)

		escreva("Digite o segundo numero: ")
		leia(numero2)

		escreva("\nEscolha a operação de desejar efetuar:\n\n")

		escreva("+ - Soma\n")
		escreva("- - Subtração\n")
		escreva("* - Multiplicação\n")
		escreva("/ - Divisão\n\n")

		leia(operacao)

		//EXECUÇÃO DA OPERAÇÃO E IMPRESSÃO DO RESULTADO
		escreva("\nVocê escolheu a operação: "+operacao+"")
		escreva("\nResulatdo: "+numero1+" "+operacao+" "+numero2+" = ")

		se(operacao == '+')
		{
			escreva(numero1 + numero2)
		}
		senao se(operacao == '-')
		{
			escreva(numero1 - numero2)
		}
		senao se(operacao == '*')
		{
			escreva(numero1 * numero2)
		}
		senao se(operacao == '/')
		{
			se(numero2 > 0)
			{
				escreva(numero1 / numero2)
			}
			senao
			{
				escreva("Não é possível dividir ´por 0")
			}
			
		}
		senao
		{
			escreva("operação invalida")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1081; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */
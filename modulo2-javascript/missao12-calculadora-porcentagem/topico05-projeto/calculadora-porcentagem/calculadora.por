programa
{
	
	funcao inicio()
	{
		real valor
		real porcentagem
		real valor_porcentagem
		real valor_desconto
		real valor_juros

		escreva("Calculadora de porcentagem\n\n")

		escreva("Informe o valor: ")
		leia(valor)

		escreva("informe a porcentagem: ")
		leia(porcentagem)

		valor_porcentagem = (porcentagem * valor) / 100
		valor_desconto = valor - valor_porcentagem
		valor_juros = valor + valor_porcentagem

		escreva("\n"+valor+" com "+porcentagem+"% de desconto é "+valor_desconto+"\n")
		escreva(valor+" com "+porcentagem+"% de juros é "+valor_juros+"\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 380; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */
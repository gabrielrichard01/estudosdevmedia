programa
{
	
	funcao inicio()
	{
		inteiro multiplicador
		inteiro contador = 0
		inteiro resultado

		escreva("Sistema de Tabuada\n\n")

		escreva("Informe o multiplicador de 1 até 10: ")
		leia(multiplicador)

		escreva("\nTabuada de "+multiplicador+"\n\n")

		enquanto(contador <= 10)
		{
				resultado = contador * multiplicador
				escreva(contador+" X "+multiplicador+" = "+resultado+"\n\n")
				contador = contador + 1
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 190; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */
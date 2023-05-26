programa
{
	
	funcao inicio()
	{
		real valor_emprestimo
		real taxas_juros = 0.03 //3%

		inteiro contador = 1
		inteiro parcelas_totais = 6

		escreva("Informe o valor do emprestimo: R$ ")
		leia(valor_emprestimo)
		
		enquanto(contador <= parcelas_totais)
		{
			inteiro numero_parcela = contador

			real juros_emprestimo = valor_emprestimo * taxas_juros * numero_parcela

			escreva("A taxa de juros no periodo de "+numero_parcela+" mes(es) é de r$ "+juros_emprestimo+"0\n")

			contador = contador + 1
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 512; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */
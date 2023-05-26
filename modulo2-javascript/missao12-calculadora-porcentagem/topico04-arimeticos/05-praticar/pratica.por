programa
{
	
	funcao inicio()
	{
		real celsius
		real fahrenheit
		real resultado_fahrenheit
		real resultado_celsius

		escreva("Conversor de temperatura\n\n")

		//CONVERTENDO DE CELSIUS PARA FAHRENHEIT
		escreva("Digite uma temperatura em C: ")
		leia(celsius)

		resultado_fahrenheit = celsius * 1.8 + 32

		escreva("A temperatura convertida para Fahrenheit é: "+resultado_fahrenheit+" F\n\n")

		//CONVERTENDO DE FAHRENHEIT PARA CELSIUS
		escreva("Digite uma temperatura em F: ")
		leia(fahrenheit)

		resultado_celsius = (fahrenheit - 32) / 1.8

		escreva("A temperatura convertida para celsius é: "+resultado_celsius+" C\n\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 637; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */
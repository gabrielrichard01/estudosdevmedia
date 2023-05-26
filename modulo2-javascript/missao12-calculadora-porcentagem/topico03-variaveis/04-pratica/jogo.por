programa
{
	
	funcao inicio()
	{
		//Declaração de variaveis
		cadeia jogo
		cadeia plataforma
		inteiro unidade
		real preco
		logico pre_venda

		//Entrada de dados
		escreva("Sistema de cadastro de jogo da loja \n\n")

		escreva("Digite o nome do jogo: ")
		leia(jogo)

		escreva("Digite a plataforma do jogo: ")
		leia(plataforma)

		escreva("Digite o número de cópias disponíveis: ")
		leia(unidade)

		escreva("Digite o preço do jogo:")
		leia(preco)

		escreva("Produto em pré-venda? \nverdadeiro = sim, falso = não\n")
		leia(pre_venda)

		//Exibição dos dados cadastrado
		escreva("\n\nResumo do jogo cadastrado\n\n")

		escreva("Jogo: "+jogo+"\n")
		escreva("Plataforma: "+plataforma+"\n")
		escreva("Unidades disponíveis: "+unidade+"\n")
		escreva("preço: R$ "+preco+"\n")
		escreva("Pré-Venda: "+pre_venda+"\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 828; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */
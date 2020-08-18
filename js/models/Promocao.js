let promocaoController = new PromocaoController();
let texto = 'Clique para alterar o texto';

mensagem.addEventListener('click', event => {

	event.preventDefault();

	texto = prompt('Digite uma mensgem para o painel:');

	if(!texto) {

		texto = 'Clique para alterar o texto';
	}

	promocaoController.altera(texto);

	window.setInterval(() => {

		promocaoController.movimenta(texto.length);
	}, 25);

});


let combustivelButtonController = new CombustivelButtonController();
let botao;

botoes.forEach((button, index) => {
	button.addEventListener('click', event => {

		event.preventDefault();

		botao = event.target;

		indice = index;

		combustivelButtonController.pressiona(botao);
	});
});
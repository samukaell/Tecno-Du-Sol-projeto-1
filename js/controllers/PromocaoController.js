let mensagem = document.querySelector('.infoPlaca');
let indent = 50;

class PromocaoController {

	altera(texto) {

		mensagem.innerText = texto;
	}

	movimenta(tamanho) {

		if(indent <= 0 - tamanho*6) indent = 160; 

		indent -= 1;

		mensagem.style.textIndent = `${indent}px`;
	}
}
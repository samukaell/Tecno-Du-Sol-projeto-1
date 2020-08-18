let botoes = document.querySelectorAll('.botoes .buttonClass');
let valores = document.querySelectorAll('.inputPadrao');
let caixas = document.querySelectorAll('.caixaAtivo');
let indice;
let posicao;

class CombustivelButtonController {

	pressiona(botao) {

		if(!caixas[indice].classList.contains('ativo')) {

			caixas.forEach(caixa => {

				caixa.classList.remove('ativo');
			});

			caixas[indice].classList.add('ativo');

			posicao = 0;
		}

		else {

			posicao++;

			if(posicao > 3) {

				caixas[indice].classList.remove('ativo');
			}
		}

		caixas[indice].style.marginLeft = `${6 + posicao*14}px`;

	}
}
let nString;
let nArray = [];

class AlteraButtonController {

	aumenta() {

		nString = valores[indice].innerText;

		nArray[0] = nString[0];
		nArray[1] = nString[1];
		nArray[2] = nString[2];
		nArray[3] = nString[3];

		if(nString[posicao] == 9) {
		
			nArray[posicao] = 0;
		}
		else {

			nArray[posicao] = parseInt(nArray[posicao]) + 1;
		}

		valores[indice].innerText = `${nArray[0]}${nArray[1]}${nArray[2]}${nArray[3]}`;
	}

	diminui() {

		nString = valores[indice].innerText;

		nArray[0] = nString[0];
		nArray[1] = nString[1];
		nArray[2] = nString[2];
		nArray[3] = nString[3];

		if(nString[posicao] == 0) {
		
			nArray[posicao] = 9;
		}
		else {

			nArray[posicao] = parseInt(nArray[posicao]) - 1;
		}

		valores[indice].innerText = `${nArray[0]}${nArray[1]}${nArray[2]}${nArray[3]}`;
	}
}
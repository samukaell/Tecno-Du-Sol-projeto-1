let alteraButtonController = new AlteraButtonController();
let alteradores = document.querySelectorAll('.volume .buttonClass');

alteradores[0].addEventListener('click', event => {

	event.preventDefault();

	alteraButtonController.aumenta();
});

alteradores[1].addEventListener('click', event => {

	event.preventDefault();

	alteraButtonController.diminui();
});
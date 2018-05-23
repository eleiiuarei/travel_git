

function welcome_country () {
	var countrySpain = document.getElementById('countryPicture');
	countrySpain.addEventListener('mouseenter', function () {countrySpain.src = '../img/Cuba.jpg'});
};

function dame_la_hora() {
	var fecha = new Date();
	document.getElementById('fecha').innerHTML = fecha;
}
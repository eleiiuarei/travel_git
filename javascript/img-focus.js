

/*function dame_la_hora() {
	var fecha = new Date();
	document.getElementById('fecha').innerHTML = fecha;
};*/

function change_picture () {
	var countrySpain = document.getElementById('countryPicture');
	countrySpain.addEventListener('mouseenter', function () {countrySpain.src = '../img/Spain2.jpg'});
};

function welcome_country () {
	var welcomeSpain = document.getElementById('countryName');
	welcomeSpain.addEventListener('mouseenter', function () {welcomeSpain.innerHTML = "Welcome to Spain!"});	
	welcomeSpain.addEventListener('mouseleave', function () {welcomeSpain.innerHTML = "Already leaving?"});
};

function clear_search () {
	var clickSearch = document.getElementById('clickS');
	clickSearch.addEventListener('focus', function() {clickSearch.style.background = "yellow"});
	clickSearch.addEventListener('blur', function() {clickSearch.style.background = "white"});
};

//, 

//
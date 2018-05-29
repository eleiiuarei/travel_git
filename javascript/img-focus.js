

var fecha = document.getElementById('fecha').innerHTML = new Date()

var countrySpain = document.getElementById('countryPicture');
var welcomeSpain = document.getElementById('countryName');

countrySpain.addEventListener('mouseenter', function () {countrySpain.src = '../img/Spain2.jpg'});
countrySpain.addEventListener('mouseout', function () {countrySpain.src = '../img/Spain.jpg'});
welcomeSpain.addEventListener('mouseover', function () {welcomeSpain.innerHTML = "Welcome to Spain!"});	
welcomeSpain.addEventListener('mouseout', function () {welcomeSpain.innerHTML = "Already leaving?"});

//haciendo referencia a varios elementos solo actúa sobre el último.
var countries = document.getElementsByClassName ('country_name');

countries [3].addEventListener ('mouseenter', function() {countries[3].innerHTML = 'WELCOME to America!'});
countries [1, 2].addEventListener ('mouseenter', function() {countries[1, 2].innerHTML = 'WELCOME to Asia!'});
countries [0,1,2,3].addEventListener ('mouseleave', function () {countries [0,1,2,3].innerHTML = 'BYE BYE!'});

//cambios de color en motor de búsqueda
var clickSearch = document.getElementById('clickS');

clickSearch.addEventListener('focus', function() {clickSearch.style.background = "yellow"});
clickSearch.addEventListener('blur', function() {clickSearch.style.background = "white"});

//cambio del enlace principal
var mainLogo = document.getElementById('mainLogo');
var linkLogo = document.getElementById ('linkLogo');

//no entiendo por qué no funciona, porque te redirige y no lo ves??
//mainLogo.onclick () = function () {mainLogo.className = "mainlogo2"};

//creo que no funciona porque href no es attr de mainLogo sino de mainLogo>a ??
//mainLogo.addEventListener('click', function() {mainLogo.href = "https://elpais.com/elpais/2018/01/11/paco_nadal/1515698051_919154.html"});

linkLogo.addEventListener ('click', function() {linkLogo.href = "https://es.wikipedia.org/wiki/Viaje"});
linkLogo.addEventListener ('dblclick', function() {linkLogo.href = "https://htmlcolorcodes.com/es/"});


//cambio de clase con el evento mousemove. funciona pero no entiendo el evento
var continents = document.getElementById('continentsBlock');
continents.addEventListener('mousemove', function(){continents.className = 'continentsbg'});

//mensaje de alerta al click on button
var btnHistory = document.getElementById('btnHistory');
var hiddenEurope = document.getElementById('hiddenEurope');
var alertYes = document.getElementById('alertYes');

btnHistory.addEventListener('click', function(){hiddenEurope.className ='show_alert'});
alertYes.addEventListener('click', function(){hiddenEurope.className = 'hidden_alert'});



/*function clear_search () {
    if (clickSearch.innerHTML != " "){
        return clickSearch.innerHTML = "";
    } else {
    	return clickSearch.innerHTML = "HOOOOLAAA";
    }
};

clickSearch.addEventListener('blur', clear_search());*/



//fecha.addEventListener('onclick')

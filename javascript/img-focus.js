

var fecha = document.getElementById('fecha').innerHTML = new Date()


var countrySpain = document.getElementById('countryPicture');
var welcomeSpain = document.getElementById('countryName');

countrySpain.addEventListener('mouseenter', function () {countrySpain.src = '../img/Spain2.jpg'});
countrySpain.addEventListener('mouseout', function () {countrySpain.src = '../img/Spain.jpg'});
welcomeSpain.addEventListener('mouseover', function () {welcomeSpain.innerHTML = "Welcome to Spain!"});	
welcomeSpain.addEventListener('mouseout', function () {welcomeSpain.innerHTML = "Already leaving?"});

var countries = document.getElementsByClassName ('country_name');
countries [3].addEventListener ('mouseenter', function() {countries[3].innerHTML = 'WELCOME to America!'});
countries [1, 2].addEventListener ('mouseenter', function() {countries[1, 2].innerHTML = 'WELCOME to Asia!'});
countries [0,1,2,3].addEventListener ('mouseleave', function () {countries [0,1,2,3].innerHTML = 'BYE BYE!'});


/* function clear_search () {
        var clickSearch = document.getElementById('clickS');
      empty: empty_input () {
              if (clickSearch.innerHTML != ""){
                      return clickSearch.innerHTML = "";
              }
      }
        clickSearch.addEventListener('focus', function() {clickSearch.style.background = "yellow"});
        clickSearch.addEventListener('blur', function() {clickSearch.style.background = "white"});
};

function empty_input () {
       if (clickSearch.innerHTML != ""){
               return clickSearch.innerHTML = "";
               };
}
console.log(empty_input());*/

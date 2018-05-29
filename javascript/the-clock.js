//creamos el objeto reloj
        var theClock = {
            dameLaHora : function laHora () {
                time = new Date();
      			return time.toLocaleTimeString();
            }
        };
        setTimeout ("theClock.dameLaHora", 500);//setTimeout accede a funciones, pero no sé a cuál tiene que acceder, ni dónde colocarlo, porque todas las funciones están dentro de un objeto.
        
        //nos creamos 3 copias del objeto reloj
        var clock_Spain = theClock.dameLaHora();
        var clock_Vietnam = theClock.dameLaHora();
        var clock_Cambodia = theClock.dameLaHora();
        var clock_Cuba = theClock.dameLaHora();

        console.log('clock_Spain -->',clock_Spain);
        console.log('clock_Vietnam -->',clock_Vietnam);
        console.log('clock_Cambodia -->',clock_Cambodia);
        console.log('clock_Cuba -->',clock_Cuba);

        /*function the_clock () {
          	time = new Date();
        	return time.toLocaleTimeString();
        	setTimeout ("the_clock", 500);// por qué no funciona???
        };
        
        //nos creamos 3 copias del objeto reloj
        var clock_Spain = new theClock();
        var clock_Vietnam = new theClock();
        var clock_Cambodia = new theClock();
        var clock_Cuba = new theClock();*/

        //accedemos a los tres "huecos" donde mostraremos los relojes
    
    document.getElementById('clock_Spain').innerHTML = clock_Spain;
    document.getElementById('clock_Vietnam').innerHTML = clock_Vietnam;
    document.getElementById('clock_Cambodia').innerHTML = clock_Cambodia;
    document.getElementById('clock_Cuba').innerHTML = clock_Cuba;
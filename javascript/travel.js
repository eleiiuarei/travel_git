function movingClock(){ 
   		var exactTime = new Date()
   		var hour = exactTime.getHours()
   		var minute = exactTime.getMinutes()
   		var second = exactTime.getSeconds()
   		minute = checkTime (minute)
   		second = checkTime (second)

   		clock = hour + ":" + minute + ":" + second;

   		document.form_GMT2.timeGMT2.value = clock;

   		setTimeout("movingClock()",1000);
	} 
	function checkTime (i){
		if(i<10){i="0"+i};
		return i;
	}


// hay que incluir el button en html?
/*var button = document.querySelector('button');

button.onclick = function() {
  var name = prompt('What is your name?');
  alert('Hello ' + name + ', nice to see you!');
}*/
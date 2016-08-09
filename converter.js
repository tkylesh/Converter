/*
TODO -
Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
If the temperature is greater than 90F/32C the color of the converted temperature should be red.
If the temperature is less than 32F/0C the color of the converted temperature should be blue.
For any other temperature, the color should be green.
*/




	 
	
	
function displayTemp(){
	//console.log("1234...");
	//document.getElementById("holder").innerHTML = "test";
	//console.log(document.getElementById("deg").value);
	document.getElementById("holder").innerHTML = document.getElementById("deg").value;
}
function clearAll(){
	document.getElementById("holder").innerHTML="";
	document.getElementById("temp1").checked = false;
	document.getElementById("temp2").checked = false;
	document.getElementById("deg").value = "";
}
 

  document.getElementById('convert').addEventListener('click', function() {
  	var f = document.getElementById("temp1").checked;
	var c = document.getElementById("temp2").checked;
  		//alert('test');
  		if (c === true){
  			//alert('test');
  			toCelsius();
  			c.checked = false;
  		} else if (f === true){
  			//alert('test');
  			toFahrenheit();
  			c.checked = false;
  		}


  });

function toCelsius () {
	//(F - 32)/1.8
	var val = document.getElementById("deg").value;
	var cels =((val - 32)/1.8+" C");
	if (cels <= 0 ){
		document.getElementById("holder").style.color="blue";

	}else if(cels >= 32){
		document.getElementById("holder").style.color="red";
	}else{
		document.getElementById("holder").style.color="green";
	}
	//ocument.getElementById("holder").innerHTML =(val - 32)/1.8+" C";
	document.getElementById("holder").innerHTML = celsius;
}

function toFahrenheit () {
	//(C*1.8)+32
	var val = document.getElementById("deg").value;
	var fahr = ((val *1.8)+32+" F");
	//document.getElementById("holder").innerHTML =(val *1.8)+32+" F";
	if (fahr < 32 ){
		document.getElementById("holder").style.color="blue";

	}else if(fahr > 90){
		document.getElementById("holder").style.color="red";
	}else{
		document.getElementById("holder").style.color="green";
	}
	//ocument.getElementById("holder").innerHTML =(val - 32)/1.8+" C";
	document.getElementById("holder").innerHTML = fahr;
	
}
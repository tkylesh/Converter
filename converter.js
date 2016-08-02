




	 
	
	
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
	//ocument.getElementById("holder").innerHTML =(val - 32)/1.8+" C";
	console.log((val - 32)/1.8+" C");
}

function toFahrenheit () {
	//(C*1.8)+32
	var val = document.getElementById("deg").value;
	//document.getElementById("holder").innerHTML =(val *1.8)+32+" F";
	console.log((val *1.8)+32+" F");
}
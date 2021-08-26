console.log("Ejercicio 1")

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
var nombre = "Anderson" , apellido = "arango" , ano = 1996

var edad = 2021 - 1996
console.log(nombre +" "+ apellido +" "+ ano + " "+ edad)

document.getElementById("student_message").innerHTML = "Hola, mi nombre es "+ nombre + " " + apellido + " tengo " + edad +" años y estoy aprendiendo JavaScript";

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

var num1 = 101, num2 = 7
var promedio = (num1 + num2) / 2    
console.log(promedio.toFixed(2))

document.getElementById("result").innerHTML = promedio.toFixed(2);

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

var phone1 = "988866552", phone2 = "99087612366", phone3 = 876543123
var conver = phone3.toString();

if (phone1.length == 9 ) {
    console.log("valido")
  } else {
    console.log("invalido")
  }
  if (phone2.length == 9 ) {
    console.log("valido")
  } else {
    console.log("invalido")
  }
  if (conver.length == 9 ) {
    console.log("valido")
  } else {
    console.log("invalido")
  }


    
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

console.log(Math.pow(32, 6));



console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
console.log("var NAME;   VALIDA PUEDE LLEVAR MAYUSCULA") 
console.log("var $num1;  VALIDA PUEDE LLEVAR $")
console.log("var typeof; INVALIDA ES PALABRA RESERVADA")
console.log("var first-name; INVALIDA NO PUEDE LLEVAR GUION MEDIO")
console.log("var attempt_2; VALIDA PUEDE LLEVAR GUIN BAJO ")
console.log("var 2ndAttempt; INVALIDA NO PUEDE EMPEZAR POR NUMERO")
console.log("var full name; INVALIDA NO PUEDE LLEVAR ESPACIO")


console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

var quantity = "25";
var number = 6;
var pressure;
var temperature = null;

console.log(quantity += quantity); 
console.log( (7+5) / number + 2 ); 
console.log(pressure); 
console.log(temperature); 
console.log(typeof pressure); 
console.log(typeof temperature);

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")



var sena = "www.sena.edu.co", google = "https://www.google.com";

console.log( sena.replace( "www.sena.edu.co" , "https://www.sena.edu.co" ) )
console.log( google.replace( "https://" , "" ) )

document.getElementById("url_2").innerHTML = sena.replace( "www.sena.edu.co" , "https://www.sena.edu.co" ) 
document.getElementById("url_4").innerHTML = google.replace( "https://" , "" )





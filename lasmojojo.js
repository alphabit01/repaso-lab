/*
Calcular el suelo semanal de un trabajador con base en las horas que trabaja
EJ: Carol gana 10000 por hora y trabaja 20 horas a la semana
200000
*/

function salaryWeek(hours, payment){
	return hours * payment;
}

/*
Calcular la cantidad de dígitos de un número ,
 por ej: 1986, deberá retornar 4 */

function numberOfDigits(number){
	var count = 0;
	var digits = number.toString(); 
	for(var i = 0; i < digits.length; i++){
		count++;
	}
	for(var i =0; i < length; I++){
		count++;
	}
	return count;

}



//palíndromos

"alpha".split("").reverse().join("")


"alpha".split("")

"alpha".split("").reverse()


function palindromo(word){
	var long = word.length;
	for(var i=0; i < long; i++){
		if(word[i] !== word[long - 1 - i]){
			return false;
		}
	}
	return true;
}


function palindromo(word){
    var long = word.length;
    for(var i=0; i < long; i++){
        if(word[i] !== word[long - 1 - i]){
            return false;
        }
    return true;
}

/* algortimo de luhn

El algoritmo de Luhn es un método creado para la verificación de números de identificación, como los números de las tarjetas de crédito (Visa, MasterCard) o el IMEI de los teléfonos móviles.

Su creador fue Hans Peter Luhn, un científico de IBM y su uso ha sido tan extendido que desde que fuera creado hoy controla la creación y validación de todos los plasticos que se otorgan a los tarjetahabientes de todo el mundo.


Este algoritmo es muy simple, nos dice que dada un número que contenga solamente dígitos [0-9], una tarjeta de crédito es válida si y solo si, obteniendo la reversa de este número, y la suma sus dígitos debe ser un múltiplo de 10, es decir que la suma módulo 10 debe ser igual a cero.

La forma en sumar es la siguiente, una vez hayamos invertido el número, si es posición impar, sumamos el dígito, si es posición impar, multiplicamos ese dígito por dos y sumamos los dígitos de ese número, para hacerlo más práctico, si el doble de ese dígito es mayor o igual a 10, le restamos 9 a ese doble, y finalmente se debe verificar que la suma que se realizó sea un múltiplo de 10.

Así funciona el algoritmo de Luhn
Explicare el algoritmo de validación con un ejemplo.

Tenemos el número 49927398716.

Multiplicamos por 2 los dígitos que ocupan las posiciones pares empezando por el final:
(1×2) = 2, (8×2) = 16, (3×2) = 6, (2×2) = 4, (9×2) = 18
Sumamos los dígitos que ocupaban las posiciones impares con los dígitos de los productos obtenidos:
6 + (2) + 7 + (1+6) + 9 + (6) + 7 + (4) + 9 + (1+8) + 4 = 70
Si el resto de dividir el total entre 10 es igual a cero, el número es correcto:
70 mod 10 = 0

*/


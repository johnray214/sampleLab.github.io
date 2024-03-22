var Resistance = prompt('Enter the Value of Resistance(R)');
var Current = prompt('Enter the Value of Current(I)');

let a ={
   result:Voltage = Resistance * Current,
   Power:Voltage * Current
};


document.getElementById('R').innerHTML='Resistance (R) ' + Resistance + ' Ohms';
document.getElementById('I').innerHTML = 'Current (I) ' + Current + ' Amperes'
document.getElementById('A').innerHTML='Voltage (V) ' + a.result + ' Volts' + "<br>" + 'Power (P) ' + a.Power + ' Watts'
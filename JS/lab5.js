var p1 = 10;
var p2 = 5;

function product(){
    return p1 * p2;
}

 document.getElementById('p1').innerHTML='The first number is: '+ p1;
 document.getElementById('p2').innerHTML='The second number is: '+ p2;
 document.getElementById('result').innerHTML='The product of 2 number is    : ' + product(p1,p2);
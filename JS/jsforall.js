/* Lab 2 */
const button1 = document.getElementById("btn-outline");

let mgatexts1 = document.getElementById("mgatext1");
let mgatexts2 = document.getElementById("mgatext2");
let mgatexts3 = document.getElementById("mgatext3");
let mgatexts4 = document.getElementById("mgatext4");

button1.addEventListener("click", function () {
   mgatexts1.innerHTML = "Welcome to BSIT Web Dev";
   mgatexts2.innerHTML = "CCSICT 2-1";
   mgatexts3.innerHTML = "Integrative Programming";
   mgatexts4.innerHTML = "John Ray Yu";
});

/* Lab 3 */
const button2 = document.getElementById("btn-outline2"),
   x = document.getElementById("x"),
   y = document.getElementById("y"),
   z = document.getElementById("z"),
   l = document.getElementById("logic");

button2.addEventListener("click", function () {
   const X = 5,
      Y = 5,
      Z = 6;

   x.innerHTML = `x = ${X}`;
   y.innerHTML = `y = ${Y}`;
   z.innerHTML = `z = ${Z}`;
   l.innerHTML = `(x==y) = ${X == Y} (x==z) = ${X == Z}`;
});

/* Lab 4 */
const button3 = document.getElementById("btn-outline3");

button3.addEventListener("click", function () {
   var Resistance = prompt("Enter the Value of Resistance(R)");
   var Current = prompt("Enter the Value of Current(I)");

   let a = {
      result: Resistance * Current,
      Power: Resistance * Current * Current,
   };

   document.getElementById("R").innerHTML =
      "Resistance (R) " + Resistance + " Ohms";
   document.getElementById("I").innerHTML =
      "Current (I) " + Current + " Amperes";
   document.getElementById("A").innerHTML =
      "Voltage (V) " +
      a.result +
      " Volts" +
      "<br>" +
      "Power (P) " +
      a.Power +
      " Watts";
});

/* Lab 5 */
const button4 = document.getElementById("btn-outline4");

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let multiply = document.getElementById("result");

button4.addEventListener("click", function () {
   var P1 = 10;
   var P2 = 5;
   var Result = P1 * P2;
   product(P1, P2, Result);
});

function product(P1, P2, Result) {
   p1.innerHTML = "The first number is: " + P1;
   p2.innerHTML = "The second number is: " + P2;
   multiply.innerHTML = "The product of 2 number is: " + Result;
}

/* Lab 6 */
const button5 = document.getElementById("btn-outline5");

button5.addEventListener("click", function () {
   let N1 = prompt("Enter first Number");
   let N2 = prompt("Enter Second Number");
   let N3 = prompt("Enter 3rd Number");
   let N4 = prompt("Enter 4th Number");

   let result = {
      addition: Number(N1) + Number(N2) + Number(N3) + Number(N4),
      multiply: N1 * N2 * N3 * N4,
      division: N1 / N2 / N3 / N4,
      subtraction: N1 - N2 - N3 - N4,
   };

   document.getElementById("prompt1").innerHTML = "The 1st Number is: " + N1;
   document.getElementById("prompt2").innerHTML = "The 2nd Number is: " + N2;
   document.getElementById("prompt3").innerHTML = "The 3rd Number is: " + N3;
   document.getElementById("prompt4").innerHTML = "The 4th Number is: " + N4;
   document.getElementById("results").innerHTML =
      "The Result of Addition is: " +
      result.addition +
      "<br>" +
      "The Result of Multiply is: " +
      result.multiply +
      "<br>" +
      "The Result of Division is: " +
      result.division.toFixed(4) +
      "<br>" +
      "The Result of Subtraction is: " +
      result.subtraction;
});

/* Scroll */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
   anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
         behavior: "smooth",
      });
   });
});

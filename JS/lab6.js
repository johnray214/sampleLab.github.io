/* Lab 6 */
const button5 = document.getElementById("button5");

button5 = addEventListener("click", function () {
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
      result.division +
      "<br>" +
      "The Result of Subtraction is: " +
      result.subtraction;
});


// Ask the user to enter the side lengths of the triangle.
var sideA = prompt("Enter the value of side A");
var sideB = prompt("Enter the value of side B");
var sideC = prompt("Enter the value of side C");

// This function determines the type of triangle based on the side lengths.
function checkTriangle(sideA, sideB, sideC) {
  if (sideA == sideB  && sideB == sideC) {
    return "Equilateral";
  }
  else if ( sideA == sideB || sideB == sideC || sideC == sideA) {
    return "Isoceles";
  } else {
    return "Scalene";
  }
}

// Display the result of triangle type.
let result = checkTriangle(sideA , sideB, sideC);
alert("The triangle is " + result + ".");
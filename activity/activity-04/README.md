Create a function that determines if a triangle is equilateral, scalene, or isosceles given the length of the sides of the triangle.

1. In the main function, prompt the user three times to input three numbers using the prompt()function. These three numbers are the measurements of the length of the sides of the triangle. Make sure that the user is typing numbers. Use the isNaN() function to check. To
   implement this, you can declare three variables and the value for each variable is a prompt for the user. Refer the sample below:
   var a = prompt();
   var b = prompt();
   var c = prompt();

2. Create a function determineTriangle(a, b, c) that accepts the three numbers from the user as input.

3. The output of the determineTriangle(a, b, c) function is the type of the triangle. Use if...else statements for this feature. If all three sides of the triangle are equal, then output “The triangle isEQUILATERAL.” If only two sides are equal, output “The triangle is ISOSCELES,”
   else, output “The triangle is SCALENE.”

4. Print the output inside the determineTriangle(a, b, c) function using the window.alert() function.

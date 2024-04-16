/* 

Digits Multiplication
LEVEL: undefined


You are given a positive number. Your function should calculate the product of the digits excluding any zeroes.

For example: The number given is 123405. The result will be 1*2*3*4*5=120 (don't forget to exclude zeroes).

example

Input: A positive integer (number).

Output: The product of the digits as an integer (number).

Examples:

digitsMultip(123405) == 120
digitsMultip(999) == 729
digitsMultip(1000) == 1
digitsMultip(1111) == 1
digitsMultip(638332), 2592

How it is used: This task can teach you how to solve a problem with simple data type conversion.

Precondition:
0 < number < 106


*/

//Answer//

function digitsMultip(data: number): number {
  const Arraynumber = data.toString().split("").map(Number)

  const totalValue = Arraynumber.reduce((sum, next) => {
    return next != 0 ? sum * next : sum
  }, 1)

  return totalValue
}

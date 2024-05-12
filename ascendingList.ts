/*
LEVEL: elementary+
Determine whether a sequence of elements is ascending such that each of its elements is strictly larger than (and not merely equal to) the preceding element. Empty sequence is considered as ascending.

example

Input: Array with integers (number).

Output: Logic value (boolean).

Examples:

isAscending([-5, 10, 99, 123456]) ==  true
isAscending([99]) ==  true
isAscending([4, 5, 6, 7, 3, 7, 9]) ==  false
isAscending([]) ==  true
isAscending([-5, -6]) ==  false
isAscending([1, 1, 1]) ==  false

The mission was taken from Python CCPS 109 Fall 2018. It is taught for Ryerson Chang School of Continuing Education by Ilkka Kokkarinen

*/

//Answer//

function isAscending2(array: number[]): boolean {
  if (array.length <= 1) return true
  if (Array.from(new Set(array)).length != array.length) return false
  const copiaArray = [...array]
  copiaArray.sort((a, b) => a - b)

  return array.every((e: number, indice) => e == copiaArray[indice])
}

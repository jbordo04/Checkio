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

/* map iteration*/
function isAscending1(values: number[]): boolean {
  let bool = true
  if (values.length <= 1) bool = true
  values.map((numb, index) => {
    if (numb == values[index + 1]) {
      bool = false
    } else if (numb < 0) {
      if (numb > values[index + 1] && values[index] < 0) {
        bool = false
      }
    } else if (numb > 0) {
      if (numb > values[index + 1]) {
        bool = false
      }
    }
  })

  return bool
}

/* for iteration*/
function isAscending(values: number[]): boolean {
  let bool = true
  const sorted = [...values]
  sorted.sort((a, b) => a - b)
  for (let i = 0; i < values.length; i++) {
    if (values[i] == values[i + 1]) {
      bool = false
      break
    }
    if (sorted[i] !== values[i]) {
      bool = false
      break
    }
  }

  return bool
}

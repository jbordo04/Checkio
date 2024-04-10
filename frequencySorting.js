/*
LEVEL: Undefined
Sort the given sequence so that its elements should be grouped and those groups end up in the decreasing frequency order, that is, the number of times element appears in the sequence. If two elements have the same frequency, their groups should end up according to the natural order of elements. For example:

example

If you want to practice more with the similar case, try Sort Array by Element Frequency mission.

Input: Array of integers (number).

Output: Array of integers (number).

Examples:
frequencySorting([1, 2, 3, 4, 5]) === [1, 2, 3, 4, 5]
frequencySorting([3, 4, 11, 13, 11, 4, 4, 7, 3]) === [4, 4, 4, 3, 3, 11, 11, 7, 13]


How it is used: For analyzing data using mathematical statistics and mathematical analysis, and for finding trends and predicting future changes (systems, phenomena, etc.).

Preconditions:

array length <= 100;
max number <= 100.
The mission was taken from Python CCPS 109. It is taught for Ryerson Chang School of Continuing Education by Ilkka Kokkarinen

*/

//Answer//

function frequencySorting(numbers) {
  const array = []
  numbers.map((number) => {
    const index = array.findIndex((item) => item[0] == number)
    if (index == -1) {
      const newArr = []
      newArr.push(number)
      array.push(newArr)
    } else {
      array[index].push(number)
    }
  })
  array.sort((a, b) => {
    if (a.length !== b.length) {
      return b.length - a.length
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return a[i] - b[i]
      }
    }
  })
  const finalArray = []
  for (let i = 0; i < array.length; i++) {
    array[i].map((num) => finalArray.push(num))
  }

  return finalArray
}
// frequencySorting([1, 2, 3, 4, 5])
// frequencySorting([3, 4, 11, 13, 11, 4, 4, 7, 3])

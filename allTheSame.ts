/*
LEVEL: Elementary
In this mission you should check if all elements in the given sequence are equal.

example

Input: Array.

Output: Logic value (boolean).

Examples:
allTheSame([1, 1, 1]) ===  true
allTheSame([1, "a", 1]), === false
allTheSame([1, 1, 1, 2]), === false
allTheSame([1, 2, 1]), === false
allTheSame([]) === true
allTheSame([1]) === true

*/

//Answer//

function allTheSame(elements: any[]): boolean {
  //const array =  elements.filter(element => value == element)
  //return !(elements.length - array.length > 0)
  return !(
    elements.length -
      elements.filter((element) => element == elements[0]).length >
    0
  )
}

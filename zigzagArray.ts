/*
LEVEL: undefined  
Your function should create an array of arrays, that represents a two-dimensional grid with the given number of rows and cols.

This grid should contain integers (number) from start to start + rows * cols - 1 in ascending order, but the elements of every odd-index row have to be listed in descending order, so that when read in ascending order, the numbers zigzag through the two-dimensional grid.

example

Input: Two integers (number) - rows and columns. One optional integer (number) - start.

Output: Array of arrays.

Examples:

createZigzag(3, 5) == [
  [1, 2, 3, 4, 5],
  [10, 9, 8, 7, 6],
  [11, 12, 13, 14, 15],
]
createZigzag(5, 1) ==  [[1], 
                        [2],
                        [3], 
                        [4], 
                        [5]]
createZigzag(3, 3, 5) == [[5, 6, 7], 
                          [10, 9, 8],
                          [11, 12, 13]]

The mission was taken from Python CCPS 109 Fall 2018. It is taught for Ryerson Chang School of Continuing Education by Ilkka Kokkarinen

*/

//Answer//

function createZigzag(
  rows: number,
  cols: number,
  start: number = 1
): number[][] {
  const array: number[][] = []
  let itemArray: number[] = []
  let asc = true
  for (let i = 0; i < rows; i++) {
    for (let b = 0; b < cols; b++) {
      if (asc) {
        itemArray.push(start)
        start++
      } else {
        itemArray.unshift(start)
        start++
      }
    }
    asc = !asc
    array.push(itemArray)
    itemArray = []
  }

  return array
}

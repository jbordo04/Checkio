/*
LEVEL: undefined
You are given an Array of numbers data. Replace every element in it with the biggest element among the elements to its strict right (not including current element). The last element should be replaced with -1. Return modified sequence as Array of numbers.

Take a look at the following example:

[17, 18, 5, 4, 6, 1] -> [18, 6, 6, 6, 1, -1]
Explanation:

data1[0] --> the greatest element to the right of data[0] is element at index 1 - 18;
data1[1] --> -//- at index 4 - 6;
data1[2] --> -//- at index 4 - 6;
data1[3] --> -//- at index 4 - 6;
data1[4] --> -//- at index 5 - 1;
data1[5] --> there are no elements to the right of element with index 5, so we put -1.
Input: An Array of numbers.

Output: An Array of numbers.

Examples:
replaceBiggest([17, 18, 5, 4, 6, 1]) == [18, 6, 6, 6, 1, -1]
replaceBiggest([1, 2, 3, 4, 5, 6]) ==  [6, 6, 6, 6, 6, -1]
replaceBiggest([1, 1, 1]) == [1, 1, -1]

*/

//Answer//

function replaceBiggest(data: number[]): number[] {
  let arraycopy = data.slice()
  const finalArray = data.map((item, index) => {
    if (index == data.length - 1) return -1
    arraycopy = arraycopy.splice(1)
    const numb = Math.max(...arraycopy)
    return numb
  })

  return finalArray
}

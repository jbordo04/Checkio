/*
LEVEL: simple*
You have to split a given Array into two Arrays inside an Array. 
If input sequence has an odd amount of elements, then the first Array inside result Array should have more elements. 
If input sequence has no elements, then two empty Arrays inside result Array should be returned.


Input: An Array.

Output: An Array of two Arrays.

Examples:
splitList([1, 2, 3, 4, 5, 6]) === [[1, 2, 3],[4, 5, 6]]
splitList([1, 2, 3, 4, 5]) === [[1, 2, 3], [4, 5]]
splitList([1, 2, 3]) ===  [[1, 2], [3]]; 
splitList([1]) === [[1], []]
splitList([]) === [[], []]
*/

//Answer//

function splitList(values: number[]): number[][] {
  const largo = Number(values.length) //6
  let copy1: number[] = []
  let copy2: number[] = []
  if (largo == 0) return [[], []]
  copy1 = values.slice(0, Math.ceil(largo / 2))
  copy2 = values.slice(Math.ceil(largo / 2))

  return [copy1, copy2]
}

/*
LEVEL: undefined
Given an Array of items, some of which may be duplicated, create and return a new Array that is otherwise the same as items, but only up to k occurrences of each element are kept, and all occurrences of that element after those first k are discarded. Note also the counterintuitive but still completely legitimate edge case of k == 0 that has a well defined answer of an empty list!

Input: An Array and a number.

Output: An Array.

Examples:

removeAfterKth([42, 42, 42, 42, 42, 42, 42], 3) == [42, 42, 42]
removeAfterKth([42, 42, 42, 99, 99, 17], 0) == []
removeAfterKth([1, 1, 1, 2, 2, 2], 5) == [1, 1, 1, 2, 2, 2]
removeAfterKth(["tom", 42, "bob", "bob", 99, "bob", "tom", "tom", 99], 2) 
==  ["tom",42,"bob","bob",99,"tom",99]
removeAfterKth([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1]) == [1, 2, 3, 4, 5]

This task is taken from the course CCPS 109 Computer Science I, as taught by Ilkka Kokkarinen.


*/
//Answer//

interface Iobj {
  [key: string | number]: number
}

function removeAfterKth(
  items: (string | number)[],
  k: number
): (string | number)[] {
  const finalarray: (string | number)[] = []

  let numberid: string | number = 0
  const obj: Iobj = {}
  items.map((item: string | number, index: number) => {
    if (index == 0) {
      finalarray.push(item)
      obj[item] = 1
      numberid = item
    }
    if (index != 0 && numberid == item && obj[item] < k) {
      finalarray.push(item)
      obj[item] += 1
    }
    if (item != numberid) {
      if (obj[item]) {
        if (obj[item] < k) {
          finalarray.push(item)
          obj[item] += 1
          numberid = item
        }
      } else {
        obj[item] = 1
        finalarray.push(item)
      }
    }
  })

  return k == 0 ? [] : finalarray
}

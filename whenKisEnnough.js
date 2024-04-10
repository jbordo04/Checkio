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

This task is taken from the course CCPS 109 Computer Science I, as taught by Ilkka Kokkarinen.


*/

function removeAfterKth(items, k) {
  const finalarray = []
  let count = 0
  let block = false
  let numberid = 0
  const obj = {}
  items.map((item, index) => {
    // if (obj[item]) obj[item] += 1
    // else obj[item] = 1
    // console.log("c:", count, "rf:", numberid, "i:", index, items.length)
    // console.log(item, index)
    console.log(obj)
    if (index == 0) {
      obj[item] = 1
      count += 1
      numberid = item
      return
      // console.log(count)
    }
    // count old ref gets K value, push last values, not currently reference
    if (count == k || obj[item] == k) {
      console.log("touch K", count, obj[item])
      const newArray = Array(count).fill(() => finalarray.push(numberid))
      newArray.map((item) => item())
      numberid = item
      count = 0
      block = true
      return
    }

    //when from get k value, show new value
    if (item != numberid && block) {
      numberid = item
      if (obj[item]) obj[item] += 1
      else obj[item] = 1
      count = 1
      block = false
      return
    }

    //Before get k value, change item number
    if (item != numberid && obj[item] <= k && !block) {
      console.log("bef K", count, numberid)

      const newArray = Array(count).fill(() => finalarray.push(numberid))
      newArray.map((item) => item())
      numberid = item
      if (obj[item]) obj[item] += 1
      else obj[item] = 1
      count = 1
      return
    }
    //End Array and still have count to push
    if (!items[index + 1] && !block) {
      count += 1
      if (obj[item]) obj[item] += 1
      else obj[item] = 1
      if (obj[item] <= k) {
        const newArray = Array(count).fill(() => finalarray.push(numberid))
        newArray.map((item) => item())
        return
      }
    }
    if (index != 0 && numberid == item && !block) {
      count += 1
      obj[item] += 1
      return
    }
  })

  console.log(k == [] ? "[]" : finalarray)
  // }

  // return k == 0 ? [] : finalarray;
}
// removeAfterKth([42, 42, 42, 42, 42, 42, 42], 3)
removeAfterKth([1, 1, 1, 2, 2, 2], 5)
// removeAfterKth(["tom", 42, "bob", "bob", 99, "bob", "tom", "tom", 99], 2)
//["tom",42,"bob","bob",99,"tom",99]

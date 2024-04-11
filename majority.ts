/* 
LEVEL: undefined
We have an array of logic values (boolean). Let's check if the majority of elements are true.

Some cases worth mentioning: 1) an empty array should return false; 2) if true-s and false-s have an equal amount, function should return false.

example

Input: An array of logic values (boolean).

Output: A logic value (boolean).

Examples:
isMajority([true, true, false, true, false]) == true 
isMajority([true, true, false]) == true
isMajority([true, true, false, false]) == false 
isMajority([true, true, false, false, false]) == false

*/

//Answer//

function isMajority(items: boolean[]): boolean {
  let valuepos: number = 0
  let valueneg = 0
  items.map((item: boolean) => {
    if (item == true) {
      valuepos += 1
    } else {
      valueneg += 1
    }
  })
  return items.length == 0 ? false : valueneg >= valuepos ? false : true
}

/*
LEVEL: simple
Maybe it's a cipher? Maybe, but we don’t know for sure.

Maybe you can call it "homomorphism"? I wish I knew this word before.

You need to check that the string A is isometric to the string B. There exists a function that turns characters from A into characters in the same spot in B.

Characters in A correspond to a unique character value in B. Characters in B are allowed to correspond to multiple character values in A.


Input: Two strings (string).

Output: Logic value (boolean).

Examples:

isometricStrings("add", "egg") == true
isometricStrings("foo", "bar") == false
isometricStrings("bar", "foo") == true
isometricStrings("", "") == true

Precondition:
both strings have the same length.

*/

//Answer//

function isometricStrings(line1: string, line2: string): boolean {
  if (line1 == "" && line2 == "") return true
  const obj = {}
  line1.split("").map((letter, i) => {
    const split2 = line2.split("")
    obj[letter] = split2[i]
    if (letter in obj && obj[letter] != split2[i]) return false
  })
  // const data1 = new Set(line1.split(""))
  // const data2 = new Set(line2.split(""))
  // const keys1 = [...data1.keys()].length
  // const keys2 = [...data2.keys()].length
  // // data1.length
  // return keys1 >= keys2 && keys2 <= 2 ? true : false
  return true
}

console.log(isometricStrings("paper", "title")) // true

/*
LEVEL: Elementary
Check if a given string has all symbols in upper case. If the string is empty or doesn't have any letter in it - function should return false.

Input: A string (string).

Output: A logic value (boolean).

Examples:
isAllUpper("ALL UPPER") == true
isAllUpper("all lower") == false
isAllUpper("mixed UPPER and lower") == false
isAllUpper("    ") == false
isAllUpper("DIGITS123") ==  true  
isAllUpper("123") ==  false  
Precondition: a-z, A-Z, 1-9 and spaces.

*/
function isAllUpper(text: string): boolean {
  const data = text.replace(/[0-9]/g, "").trim().replace(" ", "")
  if (data === "") return false

  data.split("").forEach((letter) => {
    if (letter !== letter.toUpperCase()) return false
  })
  return true
}

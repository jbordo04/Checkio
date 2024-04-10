/*
LEVEL: Elementary
In a given text you need to sum the numbers while excluding any digits that form part of a word.

The text consists of numbers, spaces and letters from the English alphabet.

example

Input: A string (string).

Output: An integer (number).

Examples:
sumNumbers("hi") == 0
sumNumbers("who is 1st here") == 0
sumNumbers("my numbers is 2") == 2
sumNumbers("This picture is an oil on canvas painting by Danish artist Anna Petersen between 1845 and 1910 year"
    ) == 3755
sumNumbers('5 plus 6 is') == 11

*/

//Answer//

function sumNumbers(text: string): number {
  let values = 0
  const textspl = text.split(" ")
  for (let i = 0; i < textspl.length; i++) {
    const value = Number(text[i])
    if (!isNaN(value)) values += value

    // if (text[i].match(/[0-9]/)) {
  }
  return values
}

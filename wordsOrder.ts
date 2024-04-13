/*
LEVEL: Elementary+
You have a text and a sequence of words. You need to check if the words in sequence appear in the same order as in the given text.

example

Cases you should expect while solving this challenge:

a word from the sequence is not in the text - your function should return false;
any word can appear more than once in a text - use only the first one;
two words in the given sequence are the same - your function should return false;
the condition is case sensitive, which means 'hi' and 'Hi' are two different words;
the text includes only English letters and spaces.
Input: Two arguments. The first one is a given text as a string (string), the second is array of words as strings (string).

Output: Logic value (boolean).

Examples:
wordsOrder("hi world im here", ["world", "here"]) == true
wordsOrder("hi world im here", ["here", "world"]) == false
wordsOrder("hi world im here", ["world"]) == true
wordsOrder("hi world im here", ["world", "here", "hi"]) == false
wordsOrder("hi world im here", ["world", "world"]) == false

*/

//Answer//

function wordsOrder(textspl: string, words: string[]): boolean {
  let value = false
  const text = textspl.split(" ")
  let oldvalues: string[] = []
  let loop = 0
  let indexWords = 0
  for (let i = 0; i < text.length; i++) {
    const setWords = Array.from(new Set(words))
    //if words are doubled, is always false
    if (setWords.length != words.length) {
      break
    }
    //if word not match and is not a repetive word
    if (
      words.includes(text[i]) &&
      text[i] != words[indexWords] &&
      !oldvalues.includes(text[i])
    ) {
      value = false
      break
    }
    if (text[i] == words[indexWords]) {
      //last text and words match
      if (i == text.length - 1) {
        value = true
      }
      //if complete matches words and still not all text
      if (indexWords == words.length - 1) {
        value = true
        oldvalues.push(words[indexWords])
        loop += 1
        words = words.slice()
        oldvalues = []
        indexWords = 0
      } else {
        oldvalues.push(words[indexWords])
        indexWords += 1
      }
    }
    if (i == text.length - 1 && loop > 0) {
      value = true
    }
  }

  return value
}

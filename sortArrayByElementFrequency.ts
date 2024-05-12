/*
LEVEL: elementary+
Sort the given Array so that its elements should be grouped and those groups end up in the decreasing frequency order, that is, the number of times element appears in Array. If two elements have the same frequency, their groups should end up in the same order as the first appearance of element in the Array.

example

If you want to practice more with the similar case, try Frequency Sorting mission.

Input: Array

Output: Array

Examples:


frequencySort([4, 6, 2, 2, 6, 4, 4, 4]) == [4, 4, 4, 4, 6, 6, 2, 2]

frequencySort([4, 6, 2, 2, 2, 6, 4, 4, 4]) == [4, 4, 4, 4, 2, 2, 2, 6, 6]

frequencySort(["bob", "bob", "carl", "alex", "bob"]), [
    "bob",
    "bob",
    "bob",
    "carl",
    "alex",
]
frequencySort([17, 99, 42]) == [17, 99, 42]

How it is used: For analyzing data using mathematical statistics and mathematical analysis, and for finding trends and predicting future changes (systems, phenomena, etc.)

Precondition:

elements can be ints or strings
The mission was taken from Python CCPS 109 Fall 2018. It's being taught for Ryerson Chang School of Continuing Education by Ilkka Kokkarinen

*/

//ANSWER//

function frequencySort<T extends number | string>(items: T[]): T[] {
  const count: T[][] = []
  items.map((item: T) => {
    const index = count.findIndex((value: T[]) => {
      if (value[0] && value[0] == item) return true
    })
    const valueToPush: T[] = [item]
    if (index == -1) count.push(valueToPush)
    else count[index].push(item)
  })
  const sorted = count.sort((a, b) => b.length - a.length)
  const join: T[] = []
  sorted.map((item) => item.map((it) => join.push(it)))

  return join
}

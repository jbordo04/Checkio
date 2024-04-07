/*
LEVEL: Elemtnary+
You have a non-negative integer. Try to find out how many digits it has.


Input: A non-negative integer (number).

Output: An integer (number).

Examples:
numberLength(10) ===  2  // 2
numberLength(0) ===  1   // 0
numberLength(4) ===  1   // 4
numberLength(44) ===  2  // 2, 2

 */

//Answer//

function numberLength(value: number): number {
  return String(value).length
}

/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Michael") logs "Hello Michael"
 */
function greet(name) {
  console.log(`Hello ${name}`);
  // Your code here
}

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 */
function isOdd(n) {
  // if ( n%2 ) return true; else return false;
  return (n%2 === 1)
  // return ((n%2) ? true : false);  // Your code here
}

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 *
 * Hint: you can solve this without writing any loops!
 */
function oddsSmallerThan(n) {
if (n%2) return ((n-1) / 2);
else return n/2 
}

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if (n%2) return (n*n);
else return (n*2)

}

export { greet, isOdd, oddsSmallerThan, squareOrDouble };

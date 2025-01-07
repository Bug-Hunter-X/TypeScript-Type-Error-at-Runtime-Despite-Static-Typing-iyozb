function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : 0;
  const numB = typeof b === 'number' ? b : 0; 
  return numA + numB;
}

let result = addSafe("hello", 5); // Returns 5
let result2 = add(10,20); //Returns 30
console.log(result); // 5
console.log(result2); // 30
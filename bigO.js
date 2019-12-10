/* What is the Big O for this?
* 1. Constant - Standing up and asking is a constant process. 
*    Waiting for someone to reply is constant because the amount 
*    of time that the person takes to reply is going to be random(Unsure of this).
*    Picking up the dog and setting up the play date will be a constant process 
*    as well. 
* 2. Linear - (similar constants to the previous one). In this situation we are asking every person 
*    and at the end of it we know that the amount of time spent with each person is the same/ the time
*    will be linear. 
*/

/* Even or Odd 
* 1(n) - constant/ no matter the size of the input, the alogrithm will take the same amount of time to
* complete. The input size also does not change.
*/
function isEven(value) {
  if (value % 2 == 0) {
      return true;
  }
  else{
      return false;
  }
}

/* Are you here?
* O(n^2) - Polynomial/ The algorithm requires two levels of looping (nested loops). 
*/
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
      const el1 = arr1[i];
      for (let j = 0; j < arr2.length; j++) {
          const el2 = arr2[j];
          if (el1 === el2) return true;
      }
  }
  return false;
}

/* Doubler
* O(n) - Linear/ Running times are directly proportional to the size of the input. The algorithm invloves
* looping through a set array length 
*/
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
      array[i] *= 2;
  }
  return array;
}

/* Naive search
* Looping throuh the array is a linear process bbut checking the index of the array is a constant process.
*/
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
          return i;
      }
  }
}


/* Creating pairs
* Polynomial - The nested forloops on the same array indicates that it's polynomial process. 
*/
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++) {
          console.log(arr[i] + ", " +  arr[j] );
      }
  }
}

/* Computer the sequence 
* Linear - The running size is proportional to the size of the input. 
* the if, else if, and else statements are constant/accessing array and basic arithmetic.
* Fibonacci 
*/
function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

      if (i === 1) {
          result.push(0);
      }
      else if (i == 2) {
          result.push(1);
      }
      else {
          result.push(result[i - 2] + result[i - 3]);
      }
  }
  return result;
}

/* An efficient search
*  Logarithemic - minIndex = currentIndex + 1 and maxIndex = currentIndex - 1 are shortening the probelm size 
*  which is a property of logarithmic 
*/
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
      currentIndex = Math.floor((minIndex + maxIndex) / 2);
      currentElement = array[currentIndex];

      if (currentElement < item) {
          minIndex = currentIndex + 1;
      }
      else if (currentElement > item) {
          maxIndex = currentIndex - 1;
      }
      else {
          return currentIndex;
      }
  }
  return -1;
}

/* Random element 
* constant - same amount of time to complete the process no matter the size of the input. 
*/
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/* What Am I?
* Looking for prime numbers - input is proportional to the lenth of the process
*/
function isWhat(n) {
  if (n < 2 || n % 1 != 0) {
      return false;
  }
  for (let i = 2; i < n; ++i) {
      if (n % i == 0) return false;
  }
  return true;
}

/* Tower of Hanoi 
*  Three disks -  
*/
// function TOH(num, source, temp, dest) {
//   if(num === 1){
//       print(source, dest)
//   }

//   // if(num === 2) {
//   //     print(source, temp)
//   //     print(source, dest)
//   //     print(temp, dest)
//   // }

//   // if(num === 3) {
//   //     print(source, dest)
//   //     print(source, temp)
//   //     print(dest, temp)
//   //     print(source, dest)
//   //     print(temp, source)
//   //     print(temp, dest)
//   //     print(source, dest)
//   // }

// }

function Hanoi(n, A, C, B) {
  if(n==0)
    return;
  Hanoi(n-1, A, B, C);
  print(A,C);
  Hanoi(n-1, B, C, A);
}

function print(source, dest){
    console.log(`moving${source} -> ${dest}`)
}
// Hanoi(4,'A','C','B')

//Iterative 

function countingSheep(num){
  for(let i=num; i>=0; --i){
    if(i === 0) {
      return console.log('All sheep jumped over the fence');
    }
    console.log(i+': Another sheep jumps over the fence');
  }
}

function powerCalculator(base, n){
  if(n <= 0) {
    return 'power must be greater than 0';
  }
  return base ** n
}

function reverseString(string){
let result = ''
  for(let i=string.length-1; i >= 0; --i){
    result = result + string[i]
  }
  console.log(result)
}

function triangularNum(num) {
let value = 0
  for(let i=0; i<=num; i++){
    value = value + i
  }
  console.log(value)
}


function stringSplitter(string,sym){
let result = []
let temp = ''
  for(let i=0; i<string.length; i++){
    if(string[i] != sym){
      temp = temp + string[i]
    }
    else {
      result = [...result, temp]
      temp = ''
    }
  }
  result = [...result, temp]
  console.log(result)
}

function fibonacci(num){
let result = 0
let temp = [0,1,1]

for(let i=3; i<num+1; i++){
  temp = [...temp, (temp[i-1]+temp[i-2])]
}
  return temp[num]
}

function factorial(num){
let temp = 1

if (num == 0){
  return 'No'
}

  for(let i=1; i<num+1; i++){
    temp = temp * i
  }
  return temp 
}

console.log(factorial(5))

// Recursion Big O 

/* countSheep
* o(n) linear - running times are directly proportional to the size (n) of the input.
*/

/* powerCalculatorRec
* o(n) linear - running times are directly proportional to the size (n) of the input.
*/

/* reverseString
* o(n) linear - running times are directly proportional to the size (n) of the input.
*/

/* triangularNumber
* o(n) linear - running times are directly proportional to the size (n) of the input.
*/

/* stringSplitter
* o(n) linear - running times are directly proportional to the size (n) of the input.
*/

/* factorial
* o(n) - linear - running times are directly proportional to the size (n) of the input.
*/

/* fibonacci
* o(2n) linear - running times are directly proportional to the size (n) of the input.
*/

/* maze
* o(4n) linear - running times are directly proportional to the size (n) of the input.
*/

/* mazeAll
* o(n) linear - running times are directly proportional to the size (n) of the input.
*/

/* anagrams
* o(n) linear - running times are directly proportional to the size (n) of the input.
*/

/* organization
* o(n) linear - running times are directly proportional to the size (n) of the input. 
*/

/* binaryRep 
* o(n) linear - running times are directly proportional to the size (n) of the input.
*/

//Interative Big O

/* countSheep
* o(n) linear - running times are directly proportional to the size (n) of the input.
*/

/* powerCalculatorRec
* o(n) linear - running times are directly proportional to the size (n) of the input.
*/

/* reverseString
* o(n) linear - running times are directly proportional to the size (n) of the input.
*/

/* triangularNumber
* o(n) linear - running times are directly proportional to the size (n) of the input.
*/

/* stringSplitter
* o(n) linear - running times are directly proportional to the size (n) of the input.
*/

/* factorial
* o(n) - linear - running times are directly proportional to the size (n) of the input.
*/

/* fibonacci
* o(2n) linear - running times are directly proportional to the size (n) of the input.
*/

/* maze
* o(4n) linear - running times are directly proportional to the size (n) of the input.
*/

/* mazeAll
* o(n) linear - running times are directly proportional to the size (n) of the input.
*/

/* anagrams
* o(n) linear - running times are directly proportional to the size (n) of the input.
*/

/* organization
* o(n) linear - running times are directly proportional to the size (n) of the input. 
*/

/* binaryRep 
* o(n) linear - running times are directly proportional to the size (n) of the input.
*/


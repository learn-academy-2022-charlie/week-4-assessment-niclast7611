// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { isTypedArray } = require("util/types")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


describe("shuffled", ()=>{
    it("takes in an array, removes the first item from the array and shuffles the remaining content.", ()=>{

        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

      expect(shuffled(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
      expect(shuffled(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    
   })
  })

//   I GOT RED
//   FAIL  ./code-challenges.test.js
//   shuffled
//     ✕ takes in an array, removes the first item from the array and shuffles the remaining content. (9 ms)
//   minAndMax
//     ✓ returns an array of the minimum and maximum numbers in that order. (8 ms)
//   noRepeats
//     ✓ returns one array with no duplicate values (1 ms)

//   ● shuffled › takes in an array, removes the first item from the array and shuffles the remaining content.

//     ReferenceError: shuffled is not defined



// b) Create the function that makes the test pass.

//I would great a function that takes in an array of strings
    //I created a function named shuffled that takes in an array as an argument 
//I would then use .slice(1) which would cut the array at index of run removing the first index of 0 and save that to a variable named arrayMinusOne
//i would then use .sort() to create a random number that would change the indexs of each item in the array. 
    // I used .sort and math.random which created a number between 0 and .999 and minused .5 from that so dpeending on the number (a negative or positive) the index would be moved forwards or backwards.and i saved that to a variable called shuffleArr
    // i would return that shuffleArr

const shuffled = (array) => {
    let arrayMinusOne = array.slice(1)
    let shuffleArr = arrayMinusOne.sort(() => Math.random() - 0.5)
    return shuffleArr

}

// Output in console - 
// colors1 ['yellow', 'green', 'pink', 'blue']
// colors1 ['blue', 'yellow', 'pink', 'green']

// colors2 ['ochre', 'periwinkle', 'aquamarine', 'indigo', 'saffron']
// colors2 ['saffron', 'aquamarine', 'ochre', 'periwinkle', 'indigo']

// I GOT GREEN
// PASS  ./code-challenges.test.js
// shuffled
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content. (10 ms)
// minAndMax
//   ✓ returns an array of the minimum and maximum numbers in that order. (7 ms)
// noRepeats
//   ✓ returns one array with no duplicate values (3 ms)


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.
describe('minAndMax', () => {
    it('returns an array of the minimum and maximum numbers in that order.', () => {
        const nums1 = [3, 56, 90, -8, 0, 23, 6]
        // Expected output: [-8, 90]
        const nums2 = [109, 5, 9, 67, 8, 24]
        // Expected output: [5, 109]
        expect(minAndMax(nums1)).toEqual([-8, 90])
        expect(minAndMax(nums2)).toEqual([5, 109])
    })
})

// I GOT RED
// FAIL  ./code-challenges.test.js
// minAndMax
//   ✕ returns an array of the minimum and maximum numbers in that order. (2 ms)

// ● minAndMax › returns an array of the minimum and maximum numbers in that order.

//   ReferenceError: minAndMax is not defined

// b) Create the function that makes the test pass.

//PSUEDO CODE 
// Create a function that takes an array of numbers as a parameter
    //Created a function named minAndMax that took arrNums as the parameter 
//Inside of the function I need to create an empty array to which i will push the min and max value into
    //I created and emptyArr array assigned to empty brackets
//I need to sort the given array from least to greatest
    //I used the built in method .sort to sort the array from least to greatest and assigned that to a new variable named orderArr
//I need to grab the 0th index (which is the smallest value) and the last value (which is the largest value) and push both of those values into the empty array
    //I used the .push built in method to push the 0th index and the last index
        //i got the last index using .length-1 
//I will return the empty array 

const minAndMax = (arrNums) => {
    let emptyArr = []
    let orderArr = arrNums.sort((a,b) => a-b)
    emptyArr.push(orderArr[0], orderArr[orderArr.length-1])
    return emptyArr
}

// I GOT GREEN 
// PASS  ./code-challenges.test.js
// minAndMax
//   ✓ returns an array of the minimum and maximum numbers in that order. (2 ms)




// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe('noRepeats', () => {
    it('returns one array with no duplicate values', () => {
        const testArray1 = [3, 7, 10, 5, 4, 3, 3]
        const testArray2 = [7, 8, 2, 3, 1, 5, 4]
        // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
     expect(noRepeats(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})

// I GOT RED
// FAIL  ./code-challenges.test.js
// minAndMax
//   ✓ returns an array of the minimum and maximum numbers in that order. (3 ms)
// noRepeats
//   ✕ returns one array with no duplicate values

// ● noRepeats › returns one array with no duplicate values

//   ReferenceError: noRepeats is not defined



// b) Create the function that makes the test pass.

//PSUEDO CODE 
// Create a function that takes two arrays of numbers as arguments
    //I created a function named noRepeats that takes in two arrays of nums as arguments
//I need to combine both of the arrays into one
    //I used .concat to combine both arr1 with arr2 and assigned that to fullArr
// i need to see if there are any duplicate numbers
// if there are only push one of them into an empty array 

//I admit I had to look this one up for insight and ideas and I stumbled across Set
    //Set is an object that lets you store unique values of any type
        //Meaning I can store all the numbers in the fullArr in an object with no repeating numbers
    //The logic of the emptyArr is this
        //Starting from inside the parenthesis we are creating a new Set that is searching through fullArr(the two combined arrays)
            //It is saving all the numbers in that set
        //But since its an object not an array we need to convert the object back to an array thats why I use Array.from 
            //Array.from allows me to create arrays from array like objects.
            // Set {3, 7, 10, 5, 4, 8, 2, 1}
            //This is what it looks like before we use Array.from

        //So I am converting the Set object into an array and returning emptyArr which is what I assigned all that logic too. 

//Even though I had to use outside resources to solve this hopefully the lines above show that I understand the methods I used in order to get the returned result. 


const noRepeats = (arr1, arr2) => {
    let fullArr = arr1.concat(arr2)
    let emptyArr =  Array.from(new Set(fullArr))
    return emptyArr
}
    

// I GOT GREEN
// PASS  ./code-challenges.test.js
//   minAndMax
//     ✓ returns an array of the minimum and maximum numbers in that order. (3 ms)
//   noRepeats
//     ✓ returns one array with no duplicate values





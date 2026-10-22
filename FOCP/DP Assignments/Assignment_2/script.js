// Assignment2:StringandArrayProblem-SolvingToolkit

// Problem statement: Implement a collection of reusable JavaScript functions to solve common programming problems.


// Task 1 - Write a function to reverse a string without using reverse().

function reverse_str(str){
    let reversed_str = ""
    for (let index = str.length-1; index >=0 ; index--) {
        reversed_str+= str[index]
    }
    return reversed_str;
}

console.log(reverse_str("Hello"));


// Task 2 - Write a function to check whether a string is a palindrome

function ispalindrome(str){
    let reversed_str = reverse_str(str)
    if (str.toLowerCase() === reversed_str.toLowerCase()){
        return true
    }
    else{
        return false
    }
}

console.log(ispalindrome("moM"));


// Task 3 - Write a function to count vowels and consonants in a string.

function count_vowel_consonants(str){
    let vowel = "aAeEiIoOuU";
    let vowels_in_word = "";
    let consonants_in_word = "";
    let trimmed_str =str.replace(/\s+/g,"").trim(); 

    for (let index = 0; index < trimmed_str.length; index++) {

        if (vowel.includes(trimmed_str[index])){
            vowels_in_word+=trimmed_str[index];
        }
        else{
            consonants_in_word+= trimmed_str[index];
            
        }
        
    }
    return `Vowels: ${vowels_in_word.length}   Consonants: ${consonants_in_word.length}`
}

console.log(count_vowel_consonants("Hello My name"));


// Sort method 
function self_sort(arr){
    const original_arr_length = arr.length
    let sorted_arr = []
    for (let index = 0; index <original_arr_length; index++) {
        let num1 = arr[0]    
        for (let i = 0; i < arr.length; i++) {
            let num2 = arr[i]
            if (num1>=num2){
                num1=num2
            }
            else if (num1<num2){
                num1= num1
            }
        }
        sorted_arr.push(num1)
        arr.splice(arr.indexOf(num1),1)
    }
    return sorted_arr
}

// console.log(self_sort([1,2,3,4]));


// Task 4 - Write a function to find the second-largest distinct number in an array.

function second_largest(arr){
    let sorted_arr = self_sort(arr)
    return sorted_arr[sorted_arr.length-2]
}

console.log(second_largest([1,2,3,4]));




















// function second_highest(arr){
//     let num1 = arr[0]
    
//     for (let index = 0; index < arr.length; index++) {
//         let num2 = arr[index]
//         if (num1>=num2){
//             num1==num2
//         }
//         else if (num1<num2){
//             num1= num2
//         }
//     }
//     // console.log(arr);
    
//     // console.log(arr.indexOf(num1));
//     let highest_index = arr.indexOf(num1)
//     let chopped = arr.splice(arr.indexOf(num1),1)
//     console.log(`${num1} is the first highest`);

//     num1 = arr[0]
    
//     for (let index = 0; index < arr.length; index++) {
//         let num2 = arr[index]
//         if (num1>=num2){
//             num1==num2
//         }
//         else if (num1<num2){
//             num1= num2
//         }
//     }
//     console.log(`${num1} is the second highest`);
//     arr.splice(highest_index,0,chopped)
//     console.log(arr);
    
// }

// let arr = [10, 25,190, 7, 40,100,120,15]
// second_highest(arr)
// function getSecondHighest(arr) {

//   // Handle edge cases where array has fewer than 2 elements
//     if (arr.length < 2) return null;

//     let highest = -Infinity;
//     let secondHighest = -Infinity;

//     for (let num of arr) {
//         if (num > highest) {
//         // Current highest becomes second highest, new num becomes highest
//         secondHighest = highest;
//         highest = num;
//         } else if (num > secondHighest && num !== highest) {
//         // If num is smaller than highest but larger than second highest
//         secondHighest = num;
//         }
//     }

//     return secondHighest;
//     }

// let arr =[10, 25,190, 7, 40,100,120,15];
// console.log(getSecondHighest(arr)); // Output: 120
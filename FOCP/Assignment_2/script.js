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





// Task -5 - Write a function remove duplciate elements from an array without using Set. 

let arr3  =  [8,1,1,2,2,2,8,4,4,5,5,6,6,7]

function remove_duplicate(arr3){

    arr3 = arr3.sort()

    let officer = 0 
    no_of_unique = 1 

    for (let index = 1; index < arr3.length; index++) {
        if (arr3[index]!=arr3[index-1]){
            arr3[officer+1] = arr3[index]
            officer++
            no_of_unique++
        };
        
    }
    arr3.splice(officer+1)
    return arr3;
}

console.log(remove_duplicate(arr3));

// Sort - nlogn
// loop - n 
// Time complexity - nlogn  





// Task 6 - Write a function to find the sum of all even numbers in an array.

function sumEven(arr) {
    let sum = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            sum += num;
        }
    }

    return sum;
}

console.log(sumEven([1, 2, 3, 4, 5, 6])); // 12


// Task 7 - Write a function to find the frequency of a given element in an array.

function frequency(arr, element) {
    let count = 0;

    for (let num of arr) {
        if (num === element) {
            count++;
        }
    }

    return count;
}

console.log(frequency([1, 2, 3, 2, 4, 2, 5], 2)); // 3


// Task 8 - Write a function to check whether two strings are anagrams.

function areAnagrams(str1, str2) {
    str1 = str1.toLowerCase().replace(/\s/g, "");
    str2 = str2.toLowerCase().replace(/\s/g, "");

    if (str1.length !== str2.length) {
        return false;
    }

    return str1.split("").sort().join("") ===
           str2.split("").sort().join("");
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false


// Task 9 - Write a function to move all zeros to the end of an array
// while maintaining the order of non-zero elements.

function moveZeros(arr) {
    let result = [];
    let zeroCount = 0;

    for (let num of arr) {
        if (num === 0) {
            zeroCount++;
        } else {
            result.push(num);
        }
    }

    while (zeroCount > 0) {
        result.push(0);
        zeroCount--;
    }

    return result;
}

console.log(moveZeros([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
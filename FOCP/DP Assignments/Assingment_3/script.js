function processArray(arr,callback){
    return callback(arr)
}


function square(arr){
    let sqr_arr = []
    for (let index = 0; index < arr.length; index++) {
        sqr_arr.push(arr[index]**2);   
    }
    return sqr_arr
}

console.log(processArray([1,2,3,4,5],square));


function onlyEven(arr){
    let even = []
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]%2===0){
            even.push(arr[index])
        };
        
    }
    return even
}

console.log(processArray([1,2,3,4,5],onlyEven));


function processString(str,callback){
    return callback(str)
}


function upper(str){
    new_str = ""
    for (let index = 0; index < str.length; index++) {
        new_str+= str[index].toUpperCase();
        
    }
    return new_str
}

console.log(processString("hello",upper));

function count_words(str){
    return str.split(" ").length
}
console.log(processString("hello Sir",count_words));


function calculate(a,b,callback){
    return callback(a,b);
}


const add = (x,y)=>x+y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => (y !== 0 ? x / y : "Cannot divide by zero");

function findElement(arr,callback){
    for (let index = 0; index < arr.length; index++) {
        if (callback(arr[index])){
            return arr[index]
        };
        
    }
    return undefined
}

const greaterthan50 = findElement([20,30,650,60,560],(num)=>num>50);
console.log(greaterthan50);

// 2) Write a JavaScript function to get all possible subsets of given length of the given
// array.

function allSubsets(arr , n , newArr = [] , i = 0){
    if (arr.length === n) {
        return arr
    }
    for (; i < arr.length; i++) {
        let myArr = [].concat(arr);
            myArr.splice(i,1);
        if(myArr.length === n){
            newArr.push(myArr)
        } else {
            allSubsets(myArr,n,newArr,i)
        }
    }
    return newArr.sort() 
}

console.log(allSubsets([1,2,3,4,5,6],3))


// 4) Implement Debounce decorator 

let anyFunction =  () => {
    return console.log("debounce")
} 

function debounce(fn, ms) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this), ms);
    };
}

let delayed = debounce(anyFunction, 2000)


// 3) Create a decorator delay(f, ms) that delays each call of ‘f’ by ‘ms’ milliseconds.

let anyFunction =  () => {
    return console.log("debounce")
}

function delayDecor(fn,ms){
    return function () {
         setTimeout(() => fn(),ms)
    }
}

let delayed = delayDecor(anyFunction,2000)

// 1) Create a function that builds a tree

//sa der chem grel

let treeNodes = [
    {id: "root", children: [1, 2]},
    {id: 1, children: [3,]},
    {id: 2, children: [4, 5]},
    {id: 3, children: [6]},
    {id: 4, children: [7]},
    {id: 5, children: []},
    {id: 6, children: []},
    {id: 7, children: [8, 9]},
    {id: 8, children: []},
    {id: 9, children: [10]},
    {id: 10, children: []},
]

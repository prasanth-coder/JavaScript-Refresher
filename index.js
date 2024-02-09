// scope
//  - functional scope 
//  - block scope
//  - global scope

let a = 13;
function outer(){
    let b = 12;
    function inner(){
        let c = 11;
        //console.log(a,b,c);
    }
    inner();

}

outer();


//closure

function outer1(){
    let counter = 0;
    function inner1(){
        counter++;
        //console.log(counter)
    }

    return inner1;
}

const fn = outer1();
fn();
fn();
// output will be 1 and 2.

//

let fruit = ["Apple","Orange","Pine Apple","Pomegranede"];
let veg = ["cauliflower","beetroot"];

//push -> add element to array in end
//pop -> remove element in end
//shift -> removes first element
//unshift -> add element at beginning
//concat -> join two arrays
//slice -> return the copy of array from given index

console.log([...veg,...fruit])


const sum = (...num) => {
    return num.reduce((tot,n) => tot+n,0);
}

console.log([1,2,3])



// fruit.unshift('Gauva');
// console.log(fruit)
// fruit.shift();
//console.log(fruit.concat(veg))
//console.log(fruit.slice(1,2))
// console.log(fruit)
// console.log(fruit.splice(1,1,"test"),fruit)


const fun = (name) => {
    return "Hello " + name
}

console.log(fun("Prasanth"))


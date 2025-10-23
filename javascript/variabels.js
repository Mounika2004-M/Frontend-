//  1. var
// Feature	Explanation
// Scope	Function Scope – Only accessible inside the function where it's declared.
// Reassignable	 Yes – You can change the value.
// Redeclarable	 Yes – You can declare it again in the same scope.
// Hoisting	    Hoisted – Moved to the top of the function, but initialized with undefined.

// var is a global scope
// let is a local scope

var a=100
{
    console.log(a)
}


var a= 100
{
     a=200
}
console.log(a)


var b=100
{
    let b=300
    b=50
    console.log(b)
}
console.log(b)


let c=200
{
    c=100
}
console.log(c)// 100


let d=200
{
     let d=100
}
console.log(d)// 200

var name="mounika",course="python fullstack",fee="15000"
console.log(name)
console.log(course)
console.log(fee)

name = "veera"
console.log(name)

let name1="mounika1234";
console.log(name1)
// console.log(course)
// console.log(fee)

name1 = "veera12345687656789098765"
console.log(name1)

let name3="csdjkbcdjbc";
{
    let name3="ljvkrjhvejbvl"
    console.log(name3)
}
console.log(name3)

const name_1="mounika"
console.log(name_1)

name_1="veena"












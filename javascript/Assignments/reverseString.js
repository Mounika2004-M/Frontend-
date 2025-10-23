function reverseString(str){
    let reverse= ""
    for( const char of str){
        reverse=char+reverse
    }
    return reverse
}
console.log(reverseString(mounika))

function reverseString(str){
    let reversed= ""
    for(let i=str.length-1; i>=0; i--){
        reversed  += str[i]
    }
    return reversed
}
console.log(reverseString("mounika"))
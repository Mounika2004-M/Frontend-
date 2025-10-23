function ispalndrome(str){
    let reversed= ""
    for(char of str){
        reversed=char+reversed
    }
    if (reversed === str){
        return true
    }

}
console.log(ispalndrome("madam"))
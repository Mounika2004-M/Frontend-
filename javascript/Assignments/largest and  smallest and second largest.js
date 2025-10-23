function largSmlSlg(arr){
 
    let largest = arr[0]
    let smallest =arr[0]

    for (let i=1; i<arr.length; i++){
        if (arr[i]>largest){
            largest = arr[i]
        }
        if(arr[i]<smallest){
            smallest = arr[i]
        }
    }        return {largest , smallest}

}
console.log(largSmlSlg([5, 12, 3, 45, 7, -2, 0]))
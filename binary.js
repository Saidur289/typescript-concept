const arr = [3, 5, 6, 7, 9, 11]
const getMid = (arr, target) => {
    let low = 0
    let high = arr.length - 1 
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        console.log(mid);
        let guess = arr[mid]
        if(guess === target){
          return mid
        }
        else if(guess > target){
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
    return -1
}
console.log("Final Output:", getMid(arr, 7));
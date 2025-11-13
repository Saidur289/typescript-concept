const array = [5, 3, 8 , 4, 2] ;
const insert = (array) => {
    for(let i=1; i <array.length; i++){
        let j = i - 1
        let current = array[i]
        while(j>=0 && array[j] > current){
            array[j+1] = array[j]
            j--
        }
        array[j+1] = current

    }
    return array
}
console.log(insert(array));
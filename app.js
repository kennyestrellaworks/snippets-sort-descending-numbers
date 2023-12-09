const arrayToSort = [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log('arrayToSort', arrayToSort)
let sortDescendedArray = []
let tempArray = []
let currentIndex = 0
let nextIndex = 0

// Checking if current 'largestNumber' exist in 'arrayToSortCopy'. If not, we push it to 'tempArray' and return it.
const mutateArrayToSortCopy = function(arrayToSortCopy, largestNumber) {
    let tempArray = []
    for (let i = 0; i < arrayToSortCopy.length; i++) {
        if (largestNumber !== arrayToSortCopy[i]) {
            tempArray.push(arrayToSortCopy[i])
        }        
    }
    return tempArray
}

// Process of finding the 'largestNumber' of 'arrayToSortCopy'.
const findlargestNumber = function(theArray) { 
    currentIndex = 0
    for (let i = 0; i < theArray.length; i++) {
        if (theArray[currentIndex] <= theArray[nextIndex]) {
            currentIndex = nextIndex
        } 
        nextIndex++
        // console.log('theArray', theArray)     
    }
    nextIndex = 0
    return theArray[currentIndex]
}

const processSortAscended = function() {
    let arrayToSortCopy = []
    arrayToSortCopy = [...arrayToSort,]
    let counter = arrayToSort.length
    while (counter !== 0) {
        // Finding the largest number of 'arrayToSortCopy'.
        let largestNumber = findlargestNumber(arrayToSortCopy)
        sortDescendedArray.push(largestNumber)
        // Supposed to be a copy of 'arrayToSortCopy' but excluding the 'largestNumber'.
        let mutatedArrayToSortCopy = mutateArrayToSortCopy(arrayToSortCopy, largestNumber)
        arrayToSortCopy = [...mutatedArrayToSortCopy,]
        counter--        
    }    
}

processSortAscended()
console.log('sortDescendedArray', sortDescendedArray)

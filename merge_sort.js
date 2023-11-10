const mergeSort = (array) => {
    const merge = (leftArray, rightArray) => {
        const mergedArray = [];
        let leftPointer = 0;
        let rightPointer = 0;
        while (leftPointer < leftArray.length || rightPointer < rightArray.length) {
            if (!(leftPointer < leftArray.length)) {
                mergedArray.push(rightArray[rightPointer]);
                rightPointer += 1;
                continue;
            } else if ((!(rightPointer < rightArray.length))) {
                mergedArray.push(leftArray[leftPointer]);
                leftPointer += 1;
                continue;
            } else if (leftArray[leftPointer] < rightArray[rightPointer]) {
                mergedArray.push(leftArray[leftPointer]);
                leftPointer += 1;
            } else {
                mergedArray.push(rightArray[rightPointer]);
                rightPointer += 1;
            }
        }
        return mergedArray;
    }

    if (array.length < 2) {
        return array;
    }
    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid))
    return merge(left, right);
}

module.exports = {
    mergeSort
}
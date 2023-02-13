function mergeSortRecursion(arr) {
    if(arr.length == 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);

    return merge(mergeSortRecursion(left), mergeSortRecursion(right));
}

function merge(leftArr, rightArr) {
    const result = [];
    let iL = 0;
    let iR = 0;
    
    while(iL < leftArr.length && iR < rightArr.length) {
        if(leftArr[iL] < rightArr[iR]) {
            result.push(leftArr[iL]);
            iL++
        } else {
            result.push(rightArr[iR]);
            iR++;
        }
    }

    while(iL < leftArr.length) {
        result.push(leftArr[iL]);
        iL++;
    }

    while(iR < rightArr.length) {
        result.push(rightArr[iR]);
        iR++;
    }

    return result;
}

console.log(mergeSortRecursion([9,3,6,1,7,5,3]));

// [9,3,6]            [1,7,5,3]
//[9]  [3,6]      [1,7]       [5,3]
//     [3] [6]    [1] [7]     [5] [3]

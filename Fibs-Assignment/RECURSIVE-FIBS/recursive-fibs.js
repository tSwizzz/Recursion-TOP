const fibsRec = (num, arr = [0, 1]) => {
    if (arr.length >= num) {
      return arr.slice(0, num);
    }
    let sum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(sum);
    return fibsRec(num, arr);
}
  
console.log('Fibonacci numbers up to 8', fibsRec(8));



//function fibsRec(n){
//    if (n === 1) return [0];
//    if (n === 2) return [0,1];
//
//    return [...fibsRec(n-1), fibsRec(n-1)[n - 2] + fibsRec(n-1)[n - 3]];
//}
//
//console.log(fibsRec(10));


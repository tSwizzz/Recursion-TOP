let array = [];
let fibNum;

let number = prompt("Give me a number");
fibs(number);

function fibs(num) {
    if(num == 0) return;
    else if(num == 1) array.push(0);
    else if(num == 2) array.push(0, 1);
    else {
        array = [0,1];
        for(let k = 2; k < num; k++ ) {
            fibNum = array[k - 1] + array[k - 2];
            array.push(fibNum);
        }
    }
}
console.log(array);



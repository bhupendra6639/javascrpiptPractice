//using for loop 6 iteration 
const array = [34, 12, 65, 32, 2, 88, 43]

let small = array[0];
for (i = 1; i < array.length; i++) {
    if (array[i] < small) {
        small = array[i];
    }
}
console.log(small);

//using for loop with two pointer

for (let i = 1, j = array.length - 1; i < j; i++, j--) {

    if (array[i] < small) {
        small = array[i]
    }
    if (array[j] < small) {
        small[array[j]];
    }
    console.log(`no of pass:-${i}`);
}
console.log(small);

console.log("array or small variable upper declare all example", array)
let x = 1;
let y = array.length - 1;
pass = 0;
while (x < y) {
    if (array[x] < small) {
        small = array[x];
    }
    else if (array[y] < small) {
        small = array[y];
    }
    x++;
    y--;
}
console.log(small)

let p = 0;
let

    q = array.length - 1;
let small1;
while (p < q) {
    if (array[p] < array[q]) {
        small1 = array[p];
    }
    if (array[q] < array[p]) {
        small1 = array[q];
    }
    p++;
    q--;
}
console.log(`small no is ${small1}`);

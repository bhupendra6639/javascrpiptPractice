const array = [1, 2, 3, 4, 5, 6];
// TWO POINTER
const result = [];
for (let i = 0, j = array.length - 1; i < array.length / 2; i++, j--) {
    // console.log(array[i], array[j]);
    const pair = [array[i], array[j]];
    result.push(pair);
}
console.log(result);

let Arraynew = [1, 2, 3, 4, 5, 6];
let i = 0;
let j = Arraynew.length - 1;
let whileresult = [];
while (i < j) {
    if (Arraynew[i] < Arraynew[j]) {
        // console.log(Arraynew[i], Arraynew[j]);
        whileresult.push([Arraynew[i], Arraynew[j]])
        i++;
        j--;
    }
}
console.log(whileresult);

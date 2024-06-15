// // const a=[12,3,4,34,11,56,1]

// // const a = 17;
// // flag = true;
// // for (let i = 2; i < 17; i++) {
// //     if (a % i == 0) {
// //         flag = false;
// //         console.log("not prime");
// //         break;
// //     }

// // }
// // if (flag == true) {
// //     console.log("nuber is prime:-")
// // }

// // const array1 = [12, 23, 14, 15, 40];
// // console.log(array1);
// // let newarray = [];
// // const max = array1[0];
// // for (i = 0; i < array1.length; i++) {
// //     if (array1[i] <= max) {
// //         newarray = array1[i];
// //     }
// // }
// // console.log(newarray);

// // const array1 = [1, 2, 3, 4, 5];
// // const newarray = [];
// // const removeelement = 4;

// // for (i = 0; i <= array1.length; i++) {
// //     if (array1[i] === removeelement) {
// //         continue;
// //     }
// //     else {
// //         newarray.push(array1[i]);
// //     }
// // }

// // array1.forEach((Number) => {
// //     if (Number !== removeelement) {
// //         newarray.push(Number);
// //     }
// // })
// // console.log(newarray);
// // const array1 = [1, 2, 3, 4, 5];
// // const newarray = [];
// // const removeelement = 4;

// // array1.forEach((numbers) => {

// //     if (removeelement !== numbers) {
// //         newarray.push(numbers);
// //     }
// // })
// // console.log(newarray);

// // console.log(JSON.stringify(counter, null, 5));
// let fName = "yash arun patil yy r";
// let counter = {};
// let maxkey = "";

// for (let i = 0; i < fName.length; i++) {
//     let letter = fName[i];
//     if (letter === " ") {
//         continue;
//     }
//     if (counter[letter]) {
//         counter[letter] = counter[letter] + 1;
//     }
//     else {
//         counter[letter] = 1;
//     }
//     if (maxkey == "" || counter[letter] > counter[maxkey]) {
//         maxkey = letter;
//     }

// }
// console.log(JSON.stringify(counter, null, 2));
// console.log(maxkey);


const fname = "BHUPENDRA NANDULAL PATIL";
const counter = {};
let max = "";
for (let i = 0; i < fname.length; i++) {
    const letter = fname[i];
    if (letter === " ") {
        continue
    }
    if (counter[letter]) {
        counter[letter] = counter[letter] + 1;
    }
    else {
        counter[letter] = 1;
    }
    if (max === "" || counter[letter] > counter[max]) {
        max = letter;
    }
}

console.log(JSON.stringify(counter, null, 2));
console.log(max);
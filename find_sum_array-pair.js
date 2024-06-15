// const array = [1, 2, 3, 4, 5, 6];
// let sum = 6;
// const result = [];

// for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//         if (array[i] + array[j] === sum) {
//             result.push([array[i], array[j]]);
//             break;
//         }
//     }
// }
// console.log(result);


// console.log("########################################")

// function sumofArray({ array1, sum1 }) {
//     let result = [];
//     for (let i = 0; i < array1.length; i++) {
//         for (let j = i + 1; j < array1.length; j++) {
//             if (array1[i] + array1[j] === sum1) {
//                 result.push([array1[i], array1[j]]);
//                 break;
//             }
//         }
//     }
//     console.log(result);
// };
// let array1 = [1, 2, 3, 4, 5, 6];
// let sum1 = 6;
// sumofArray({ sum1, array1 });




// const array = [1, 2, 3, 4, 5, 6];
// let result = [];
// let i = 0;
// let j = array.length - 1;
// sum = 6;
// while (i < j) {
//     if (array[i] + array[j] === sum) {
//         result.push([array[i], array[j]]);
//         i++;
//         j--;
//     } else if (array[i] + array[j] > sum) {
//         j--;
//     } else if (array[i] + array[j] < sum) {
//         i++;
//     }
// }
// console.log(result);
const array = [1, 2, 3, 4, 5, 6];
let result = [];
let sum = 6;
let i = 0;
let j = array.length - 1;
while (i < j) {
    if (array[i] + array[j] === sum) {
        result.push([array[i], array[j]]);
        i++;
        j--;
    }
    else if (array[i] + array[j] > sum) {
        j--;
    }
    else if (array[i] + array[j] < sum) {
        i++;
    }
}
console.log(result);


console.log("######TWO POINTER############");

const array1=[1,2,3,4,5,6];
let p=0;
let q=array.length-1;
while(p<q)
    {
        if(array1[p]<array1[q])
            {
                
            }
    }

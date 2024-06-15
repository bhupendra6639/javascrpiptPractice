// // //spread operator use:-
// // const a = [1, 2, 3, 4, 4, 5];
// // const b = [6, 7, 8, 9, 0];
// // console.log([...a, ...b]);

// // person1 = {
// //     name: "bhupendra",
// //     age: 20
// // }

// // console.log(person1);

// // person1 = {
// //     ...person1,
// //     name: "vishal"
// // }
// // console.log(person1);

// // console.log(Object.keys(person1));
// // console.log(Object.entries(person1));
// // console.log(Object.values(person1));
// // // // const a=[12,3,4,34,11,56,1]

// // // // const a = 17;
// // // // flag = true;
// // // // for (let i = 2; i < 17; i++) {
// // // //     if (a % i == 0) {
// // // //         flag = false;
// // // //         console.log("not prime");
// // // //         break;
// // // //     }

// // //prime number:
// // function primeno(no) {
// //     let flag = true;
// //     for (i = 2; i < no; i++) {
// //         if (no % i == 0) {
// //             flag = false;
// //             console.log("number is not prime:-" + no)
// //             break;
// //         }
// //     }
// //     if (flag == true) {
// //         console.log("number is prime:-" + no);
// //     }
// // };
// // primeno(10);
// // primeno(17);
// // primeno(47);

// // console.log("########### POINTER##############")
// // function twopointer(array) {
// //     array.sort();
// //     console.log(array);
// //     let i = 0;
// //     let j = array.length - 1;
// //     while (i < j) {
// //         if (array[i] < array[j]) {
// //             console.log(array[i], array[j]);
// //             i++;
// //             j--;
// //         }
// //     }

// // }
// // const array = [1, 2, 3, 4, 5, 6];
// // twopointer(array);
// // twopointer([8, 7, 6, 5, 4, 3, 2, 1]);


// // //Sum of array find pair:-
// // console.log("ARRAT SY<")
// // function sumArray(array) {
// //     console.log(array.sort());
// //     const sum = 6;
// //     let i = 0;
// //     let j = array.length - 1;
// //     while (i < j) {
// //         if (array[i] + array[j] === sum) {
// //             console.log(array[i], array[j]);
// //             i++;
// //             j--;
// //         }
// //         else if (array[j] + array[j] > sum) {
// //             j--;
// //         }
// //     }
// // };
// // sumArray([2, 1, 4, 6, 5, 7, 9]);


// // function primeno(no) {
// //     let flag = true;
// //     for (let i = 2; i < no; i++) {
// //         if (no % i === 0) {
// //             flag = false;
// //             console.log("no is not prime:-" + no);
// //             break;
// //         }
// //     }
// //     if (flag === true) {
// //         console.log("no is prime:-" + no);
// //     }
// // }
// // // primeno(10);
// // // primeno(7);

// // for (i = 0; i < 100; i++) {
// //     primeno(i);
// // }
// // function palllindrome(no) {
// //     var sum = 0;
// //     var temp, rem;
// //     temp = no;
// //     while (no > 0) {
// //         rem = no % 10;
// //         sum = sum * 10 + rem;
// //         no = no / 10;
// //     }
// //     if (temp === sum) {
// //         console.log("no is pallindrome:-" + no);

// //     }
// //     else {
// //         console.log("not pallindrome:=")
// //     }
// // }
// // // palllindrome(121);
// // for (let i = 1; i <= 1000; i++) {
// //     // palllindrome(i);
// //     palllindrome(i)
// // }

// // const array = [1, 2, 3, 4, 5, 6];
// // // TWO POINTER
// // const result = [];
// // for (let i = 0, j = array.length - 1; i < array.length / 2; i++, j--) {
// //     // console.log(array[i], array[j]);
// //     const pair = [array[i], array[j]];
// //     result.push(pair);
// // }
// // // console.log(result);

// // let Arraynew = [1, 2, 3, 4, 5, 6];
// // let i = 0;
// // let j = Arraynew.length - 1;
// // let whileresult = [];
// // while (i < j) {
// //     if (Arraynew[i] < Arraynew[j]) {
// //         // console.log(Arraynew[i], Arraynew[j]);
// //         whileresult.push([Arraynew[i], Arraynew[j]])
// //         i++;
// //         j--;
// //     }
// // }
// // console.log(whileresult);
// // function twopointer(array) {
// //     array.sort();
// //     console.log(array);
// //     let i = 0;
// //     let j = array.length - 1;
// //     let whileresult = [];
// //     while (i < j) {
// //         if (array[i] < array[j]) {
// //             whileresult.push([array[i], array[j]]);
// //             i++;
// //             j--;
// //         }
// //     }
// //     console.log(whileresult);
// // }
// // twopointer([1, 2, 3, 4, 5, 6]);
// // twopointer([6, 5, 4, 3, 2, 1]);


// // const array = [1, 2, 3, 4, 5, 6];
// // let i = 0;
// // let j = array.length - 1;
// // let result = [];
// // while (i < j) {
// //     if (array[i] < array[j]) {
// //         result.push([array[i], array[j]]);
// //         i++;
// //         j--;
// //     }
// // }
// // console.log(result);

// // const array = [1, 2, 3, 4, 5, 6];
// // let i = 0;
// // let j = array.length - 1;
// // let sum = 6;
// // let result = [];
// // while (i < j) {
// //     if (array[i] + array[j] === sum) {
// //         result.push([array[i], array[j]]);
// //         i++;
// //         j--;
// //     }
// //     else if (array[i] + array[j] > sum) {
// //         j--;
// //     }
// //     else if (array[i] + array[j] < sum) {
// //         i++;
// //     }
// // }
// // console.log(result);
// ////
// // const array = [1, 2, 3, 4, 5, 6];
// // let result = [];
// // let sum = 6;
// // let i = 0;
// // let j = array.length - 1;
// // while (i < j) {
// //     if (array[i] + array[j] === sum) {
// //         result.push([array[i], array[j]]);
// //         i++;
// //         j--;
// //     }
// //     else if (array[i] + array[j] > sum) {
// //         j--;
// //     }
// //     else if (array[i] + array[j] < sum) {
// //         i++;
// //     }
// // }
// // console.log(result);


// // function twopointer(array) {


// //     let result = [];
// //     let i = 0;
// //     let j = array.length - 1;
// //     let sum = 6;
// //     while (i < j) {
// //         if (array[i] + array[j] === sum) {
// //             result.push([array[i], array[j]]);
// //             i++;
// //             j--;
// //         }
// //         else if (array[i] + array[j] > sum) {
// //             j--;
// //         }
// //         else if (array[i] = array[j]) {
// //             i++;
// //         }
// //     }
// //     console.log(result);
// // }
// // let array1 = [1, 2, 3, 4, 5, 6]
// // twopointer(array1)

// // function pallindrome(no) {

// //     var sum = 0, r, temp;
// //     temp = no;
// //     while (no > 0) {
// //         r = no % 10;
// //         sum = sum * 10 + r;
// //         no = parseInt(no / 10);
// //     }

// //     if (temp === sum) {
// //         console.log(sum);
// //     }
// //     else {
// //     }
// // }
// // console.log("no is pallindrome:-");
// // for (let i = 101; i < 500; i++) {
// //     pallindrome(i);
// // }

// // function armstrome(no) {

// //     var sum = 0, r, temp;
// //     temp = no;
// //     while (no > 0) {
// //         r = no % 10;
// //         sum = sum + (r * r * r);
// //         no = parseInt(no / 10);
// //     }

// //     if (temp === sum) {
// //         console.log(sum);
// //     }
// //     else {
// //     }
// // }
// // console.log("armstrome numbers:-");
// // for (let i = 1; i < 500; i++) {
// //     armstrome(i);
// // }
// // function add_array_pair(a) {
// //     a.sort();
// //     console.log(a)
// //     let sum = 6;
// //     for (let i = 0; i < a.length / 2; i++) {
// //         for (let j = a.length - 1; j >= a.length / 2; j--) {
// //             if (a[i] + a[j] === 6) {
// //                 console.log(a[i], a[j]);
// //                 continue;
// //             }
// //             else if (a[i] + a[j] !== 6) {
// //                 continue;
// //             }

// //         }
// //     }

// // }
// // add_array_pair([1, 2, 3, 4, 5, 6])
// // add_array_pair([6, 5, 4, 3, 2, 1])

// // function primeno(no) {
// //     let flag = true;
// //     for (let i = 2; i < no; i++) {
// //         if (no % i === 0) {
// //             flag = false;
// //             break;
// //         }
// //     }
// //     if (flag === true) {
// //         console.log(no);
// //     }
// // }
// // console.log("prime no is:-");
// // for (i = 1; i < 30; i++) {
// //     primeno(i);
// // }
// const
//     array = [34, 12, 65, 32, 1, 88, 43];
// let i = 0;
// let j = array.length - 1;
// let small = array[0]
// while (i < j) {
//     if (array[i] < array[j]) {
//         temp = array[i]
//         array[i] = array[j]
//         array[j] = temp;
//     }
// }
// console.log(array)/



const fname = "Bhupendra nandulal patil";
const counter = {};
let maxkey = "";
for (i = 0; i < fname.length; i++) {
    let letter = fname[i];

    if (letter === " ") {
        continue;
    }
    else if (counter[letter]) {
        counter[letter] = counter[letter] + 1;

    }
    else {
        counter[letter] = 1;
    }
    if (maxkey === "" || counter[letter] > counter[maxkey]) {
        maxkey = letter
    }
}
console.log(counter);
console.log(maxkey);
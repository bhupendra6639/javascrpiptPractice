// const fname1 = "YASH ARUN PATIL YY R";

// const counter = {};

// for (let i = 0; i < fname1.length; i++) {
//     const letter = fname1[i];

//     if (letter === " ") {
//         continue;
//     }

//     if (counter[letter]) {
//         counter[letter] = counter[letter] + 1;
//     } else {
//         counter[letter] = 1;
//     }
// }

// console.log(JSON.stringify(counter, null, 5));
let fname1 = "yash arun patil yy r";
let counter = {};
let maxkey = "";

for (let i = 0; i < fname1.length; i++) {
    let letter = fname1[i];
    if (letter === " ") {
        continue;
    }
    if (counter[letter]) {
        counter[letter] = counter[letter] + 1;
    }
    else {
        counter[letter] = 1;
    }
    if (maxkey == "" || counter[letter] > counter[maxkey]) {
        maxkey = letter;
    }

}
console.log(JSON.stringify(counter, null, 2));
console.log(maxkey);


let name1 = "BHUPENDRA NANDULAL PATIL";
let counter1 = {}
let maxkey1 = "";
for (let i = 0; i < name1.length; i++) {
    let letter = name1[i];
    if (letter === " ") {
        continue;
    }
    if (counter1[letter]) {
        counter1[letter] = counter1[letter] + 1;
    }
    else {
        counter1[letter] = 1;
    }
    if (maxkey1 === "" || counter1[letter] > counter1[maxkey1]) {
        maxkey1 = letter;
    }
}
console.log(JSON.stringify(counter1, null, 2));
console.log(maxkey1);


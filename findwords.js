// 

// let i = 0;
// let j = 0;
// let found = false;
// while (i < string.length) {
//     if (string[i] === find[j]) {
//         i++;
//         j++;
//         while (j < string.length) {
//             if (string[i] !== find[j]) {
//                 j = 0;
//                 break;
//             }
//             i++;
//             j++;
//             if (j === find.length - 1) {
//                 found = true;
//             }
//         }
//     }
//     else {
//         i++;
//     }
//     if (found) {
//         break;
//     }
// }
// console.log(found)


const findworld = (string, find) => {
    let found = false;
    let i = 0;
    let j = 0;
    while (i < string.length) {
        if (string[i] === find[j]) {
            i++;
            j++;
            while (j < find.length) {
                if (string[i] !== find[j]) {
                    j = 0;
                    break;
                }
                i++;
                j++;
                if (j < find.length - 1) {
                    found = true;
                }
            }
        }
        else {
            i++
        }
        if (found === true) {
            break;
        }
    }
    console.log(found);
}
const string = "my name is bhupendra";
const string1 = "my name is patilbhupendra";
const string3 = "my name is nilesh";
const find = "bhupendra";
//find true
findworld(string, find);
//find false
findworld(string3, find);
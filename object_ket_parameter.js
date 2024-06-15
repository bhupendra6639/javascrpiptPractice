// const object = {
//     x: 6,
//     y: 8,
//     z: 5,
//     0: 7,
//     "v": 0,
//     _name: 'Yash',
//     sayHi: () => console.log("Hi"),
// };

// // const z = 'y';
// // console.log(object);

// // console.log(object.x);

// // console.log(object.y);

// // console.log(object[z]);

// const printObjectKey = (key) => {
//     if (object[key]) {
//         if (typeof object[key] === 'function') {
//             console.log(object[key]());
//         } else {
//             console.log(object[key]);
//         }
//     } else {
//         console.log(`${key} does not exit`);
//     }
// }

// printObjectKey("sayHi");
const object = {
    x: "bhupendra",
    y: "Nandulal",
    z: "patil",
    sayHi: () => console.log("Hi"),
    vishal: () => {
        console.log("patil")
        return "vishal"
    }
}
console.log(object);
console.log(object["sayHi"])
let x = object["sayHi()"]
console.log(x)//because undefinde sayhii function is key pair its not return

const printObjectkey = (key) => {
    if (object[key] !== undefined) {
        if (typeof object[key] === 'function') {
            console.log(object[key]())
        }
        else {
            console.log(object[key]);
        }
    }
    else {
        console.log(`key not exits ${key}`)
    }
}
printObjectkey("x")
printObjectkey("sayHi")
x = "sayHi";
printObjectkey(x);//d\sayHii function calll because X assign sayHi
printObjectkey(2)//key not exits
printObjectkey("vishal")
let y = object["vishal"]
console.log(y)

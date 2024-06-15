// // Array spread operator
// const x = [1, 2, 3];
// const y = [4, 5];

// const z = [...x, ...y];

// console.log(z[4]);

// console.log("z ", z)

// // Objects
// const students = [];

// const student1 = {
//     id: 1,
//     name: "Jay Patil",
//     school: "RCP",
//     address: "New Ganesh Colony",
//     dob: "05/04"
// };

// console.log(student1.name);
// console.log("#####", student1["name"]);

// let student2 = {
//     id: 2,
//     name: "Bharat Sutar",
//     school: "RCP",
//     address: "Ganesh Colony",
//     dob: "15/08"
// };

// student1.address = "Andheri East";
// delete student2.school;
// student2.college = "RCP";

// // Add new key using spread operator..

// student2 = {
//     ...student2,
//     id: 3,
//     address: "Sarswati Colony",
//     age: 20,
// };

// console.log("S1 :", student1);
// console.log("S2 :", student2);

// students.push(student1);
// students.push(student2);

// console.log(students)

// // strings
// let name = "Yash Patil";
// const newName = name.replace("Y", "J");
// console.log("Name", name);
// console.log("New Name", newName);

// console.log(typeof name);
// console.log("4th letter of name is ", name[3]);

// // Number
// const monbileNumber = 100;
// console.log("Mobile Number", monbileNumber)
// // Boolean
// const flag = true;
// console.log("Flag", flag);

// // Sort
// const array = [4, 2, 9, 1];
// array.sort();
// console.log(array);



// let x = [1, 2, 3, 4];
// let y = [5, 6, 7];
// console.log("simople sprint:-");
// console.log(x, y);
// console.log("using spread operator:");
// console.log(...x, ...y);


// console.log("+++++++++++map function")
// y.map((_y) => {
//     x.push(_y);
// })
// console.log(x);

// x.forEach(i => {
//     console.log(x[i] * x[i]);
// });
// let student1 = {
//     id: 47,
//     name: "bhupendra",
//     age: 20,
//     sex: "male",
//     address: "DHARANGAON"
// };
// // console.log(obj);
// // console.log(obj.name);
// // obj.name = "vishal";
// // console.log(obj.name);

// // student1 = {
// //     ...student1,
// //     name: "jay",
// //     id: "53",
// //     address: "wavad"
// // }
// console.log(student1);

// let student2 = {
//     id: 47,
//     name: "bhupendra",
//     age: 20,
//     sex: "male",
//     address: "DHARANGAON"
// };
// console.log(student2);
// console.log("#########################################");

// let student = [];
// student.push(student1);
// student.push(student2);
// console.log(student);
// console.log("delete" + delete (student1.name));
// console.log(student1);
// student1.name = "jay";
// console.log(student1);

// console.log("##########################");
// let nameits = "bhupendra nandulal patil";
// console.log(nameits);
// let namechange = nameits.replace("bhupendra", "vishal");
// console.log(namechange);
// console.log(typeof (namechange));

// console.log(nameits.charAt(3));



// 

const array = [1, 2, 3, 4, 5];
const Newarray = [];
toRemoveArray = 4;

array.forEach((number) => {
    if (toRemoveArray !== number) {
        Newarray.push(number);
    }
}
)
console.log(Newarray);

bhupendra = {
    id: 47,
    name: "patil",
    gender: "male"
};
console.log(bhupendra);
bhupendra2 = {
    id: 47,
    name: "patil",
    gender: "male"
};

const a = [1, 2, 3, 4, 5, 6];
const b = [1, 2, 3, 9, 10];
console.log([...a, ...b]);
const change = [];
for (i = 0; i < a.length; i++) {
    for (j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
            console.log(a[i], b[j]);
            break;
        }
    }
}

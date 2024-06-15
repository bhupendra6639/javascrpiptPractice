const Arrat1 = [1, 2, 3, 4, 5, 6];
const Arrat2 = [8, 9, 10, 11, 12];

console.log([...Arrat1, ...Arrat2]);


obj1 = {
    id: 1,
    gender: "male",
    name: "bhupendra",
    age: 20
}
console.log(obj1)
console.log(Object.values(obj1.name));
console.log([...Arrat1, ...Arrat2, obj1])

Arrat1.map((numbers) => {
    console.log(numbers)
})
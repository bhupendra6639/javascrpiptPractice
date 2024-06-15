const object = {
    x: 5,
    y: 7,
    z: 1,
}
console.log(object)
console.log(object["x"])
a = "y";
const keys = Object.keys(object);
const values = Object.values(object);
const entries = Object.entries(object);
console.log(keys)
console.log(values)
console.log(entries)
let small;
let _key;
for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (small === undefined) {
        small = object[key]
    }
    else if (object[key] < small) {
        small = object[key]
        _key = key;
    }
}
console.log(`small key is:-${_key} ans value is:- ${small}`);

for (let j = 0; j < values.length; j++) {
    let key = keys[j];
    if (small === undefined) {
        small = object[key];
    }
    else if (object[key] < small) {
        small = object[key];
        _key = key;
    }
}
console.log(`small key is:-${_key} ans value is:- ${small}`);


for (x = 0; x < keys.length; x++) {
    let key = keys[x];
    if (small === undefined) {
        small =object[key]
    }
    else if(object[key]<small)
        {
            small
        }

}
function oldNewDelete(oldArray, newArray) {

    let deleted = [];
    for (let i = 0; i < oldArray.length; i++) {
        let available = false;
        for (let j = 0; j < newArray.length; j++) {
            console.log("old Array elemet is:-" + oldArray[i] + " new Array elelemt is:-" + newArray[j]);
            if (oldArray[i] === newArray[j]) {
                available = true;
                break;
            }
        }
        if (!available) {
            deleted.push(oldArray[i]);
        }
    }
    console.log("delete array element is:-" + deleted)

}
let oldArray = [1, 2, 3];
let newArray = [2, 3];
oldNewDelete(oldArray, newArray);
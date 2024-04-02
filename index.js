const ask = prompt("Enter a list of comma-separated froyo flavors: ");

let flavorList = ask.split(",");
const myObj = {};

for (let i = 0; i <  flavorList.length; i++) {
    let currentFlavor = flavorList[i];
    if (currentFlavor in myObj) {
        myObj[currentFlavor]++;
    } else {
        myObj[currentFlavor] = 1;
    } 
}
console.table(myObj);


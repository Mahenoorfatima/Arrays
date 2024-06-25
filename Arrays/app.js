let cities = ["Karachi" , "Lahore" , "Islamabad" , "Faislabad" , "Hyderabad"];

//for loop
for(let i = 0; i < cities.length; i++){
    console.log("for loop method: ",cities[i]);

}


//for of
for (let city of cities){
    console.log("for of loop method: ", city);
}

//for of + upperCase
for(let city of cities){
    console.log("for of loop method + upperCase: ",city.toUpperCase());
}

//Practice Qno1
let marks = [85 , 97 , 44 , 37 , 76 , 60];
//for average marks of entire class 

let sum = 0;
for(let val of marks){
    sum = sum + val;// sum=+val another way of code this line
}

let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);

//Practice Qno2
let items = [250 ,645, 300, 900, 60];

let i = 0;
for(let val of items){
    console.log(`Value at index ${i} = ${val}`);
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`Value ater offer ${items[i]}`);
    i++;
}

// Usind for loop
for(let k = 0; k < items.length; k++){
    let offer = items[k] / 10;
    items[k] -= offer;
}

console.log(items);

//Practice Qno3
let companies = ["Uber", "Microsoft", "PSMC", "PPL", "FRSM", "DFSM"];
console.log(companies);

//Removed First One
companies.shift();
console.log("After Removed First One :", companies);

//Replace PSMC to Google
companies.splice(1 , 1 , "Google");
console.log(companies);

//Add Amazaon at the end
companies.push("Amazon");
console.log("Added Amazon at the end" , companies);
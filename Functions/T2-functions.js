//survey data object
const data = [
    {
        question: "What is your choice of beverage ?",
        type: "LIST",
        options: ["Tea", "Coffee", "Soft drinks", "Water"],
        responses: ["Coffee", "Coffee", "Tea", "Soft drinks", "Coffee", "Coffee", "Water"]
    },
    {
        question: "What is your favourite travel destination ?",
        type: "MCQ",
        options: ["England", "Australia", "UAE", "Malaysia"],
        responses: ["England" , "Norway", "England", "France", "England", "Malaysia", "UAE"]
    },
    {
        question: "Which chocolates do you like ?",
        type: "CHECKBOX",
        options: ["Dairy milk", "Five star", "Milky bar", "Munch", "KitKat"],
        responses: [["Five star", "Milky bar", "Munch", "KitKat"],
            ["KitKat"],
            ["Five star", "Milky bar", "Munch", "KitKat"],
            ["KitKat"],
            ["Dairy milk"],
            ["Dairy milk"],
            ["Dairy milk", "KitKat"]
        ]
    }
]

// const listData = data[0];
// const mcqData = data[1];
// const checkboxData = data[2];


//new map to store the bev response
let beverage = new Map();

// let len1 = data[0].options.length;
for(let option of data[0].options){
    beverage.set(option, 0);
}

beverage.set("Other", 0);

for(let response of data[0].responses){
    if(beverage.has(response)){
        beverage.set(response, beverage.get(response) + 1);
    }
    else{
        beverage.set("Other", beverage.get("Other") + 1 );
    }
}

console.log(beverage);

//new map to store the destination response
let destination = new Map();


for(let option of data[1].options){
    destination.set(option, 0);
}

destination.set("Other", 0);
for(let response of data[1].responses){
    if(destination.has(response)){
        destination.set(response, destination.get(response) + 1);
    }
    else{
        destination.set("Other", destination.get("Other") + 1);
    }
}


console.log(destination);

//new map to store the chocolate response
let chocolate = new Map();

// let len1 = data[0].options.length;
for(let option of data[2].options){
    chocolate.set(option, 0);
}

chocolate.set("Other", 0);
for(let response of data[2].responses){
    for(let arr of response){           //arr is element of the array(response)
        if(chocolate.has(arr)){
            chocolate.set(arr, chocolate.get(arr) + 1);
        }
        else{
            chocolate.set("Other", chocolate.get("Other") + 1);
        }
    }

}

console.log(chocolate);

// beverage.forEach((value, key, map) => {
//     console.log(`${key}: ${value}`);
// } );
// destination.forEach((value, key, map) => {
//     console.log(`${key}: ${value}`);
// } );
// chocolate.forEach((value, key, map) => {
//     console.log(`${key}: ${value}`);
// } );


//displaying on html page
document.write("<h4>What is your choice of beverage ?</h4>{<br>");
for(let bev of beverage.keys())
{
    document.write(bev, ": ", beverage.get(bev), ",<br>");
}
document.write("} <br><br>");

document.write("<h4>What is your favourite travel destination ?</h4>{ <br>");
for(let des of destination.keys())
{
    document.write(des, ": ", destination.get(des), ",<br>");
}
document.write("} <br><br>");

document.write("<h4>Which chocolates do you like ?</h4>{ <br>");
for(let choc of chocolate.keys())
{
    document.write(choc, ": ", chocolate.get(choc), ",<br>");
}
document.write("} <br>");

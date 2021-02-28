//
let numbers = [1, 1, 2, 3, 4, 4, 4, 5];
let len = numbers.length;
let count = 1;

let my_map = new Map();

for(let i=0; i<len;i++){
    while(numbers[i] === numbers[i+1]){
        count++;
        i++;
    }
    // let my_key = numbers[i];
    my_map.set(numbers[i], count);
    count = 1;
}

// .. another method to iterate over:

// for(let num of numbers){
//     if(my_map.has(num)){
//         my_map.set(num, my_map.get(num) + 1);
//     }else{
//         my_map.set(num, 1);
//     }
// }

// ...to set key-value in map:

// my_map.set('x', "fox");
// my_map.set('y', "trout");
// my_map.set('z', "above my head");

// for (let j=0; j<my_map.size ; j++){
//     console.log(my_map.get(j));
// }

// for (let lyric of my_map) {
//     console.log(lyric); // cucumber, tomatoes, onion
// }

// my_map.forEach( (value, key, map) => {
//     console.log(`${key}: ${value}`); // cucumber: 500 etc
// });

my_map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
} );

console.log(my_map);


document.write("{ <br>");
for(let num of my_map.keys())
{
    document.write(num, ": ", my_map.get(num), ",<br>");

}
document.write("} <br>");

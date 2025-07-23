// function add(x,y){
//     console.log(x+y);
// }
// let a = 2;
// let b = 4;
// const arrowSum = (a,b) => {
//     console.log(a+b);
// }

// const stringVowel = (str) => {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0 ;
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i].toLowerCase())) {
//             count++;
//         }
//     }
//     return count;
// }

// For each function and call back functions
let arr = [1,2,3,4,5];
arr.forEach(function printVal(val){
    console.log(val);
});

arr.forEach((val)=> {
    console.log(`${val*2}`);
});

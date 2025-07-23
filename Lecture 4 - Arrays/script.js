// Avg marks of students ; 
// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for (let mark of marks){
//     sum+= mark;
// }
// console.log(`The average marks are : ${sum/marks.length}`);

//---------------------------------------

//10% off on all array items 

let prices = [250,645,300,900,50]
for(let ind = 0;ind<prices.length;ind++){
    prices[ind] = prices[ind] - prices[ind]*0.1;
}
console.log(prices);
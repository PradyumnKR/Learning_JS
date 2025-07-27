let arr = [1, 2, 3, 4,5,6];

const sum = arr.reduce((res,current) => {
    return res>current? res : current}
);
console.log(sum);
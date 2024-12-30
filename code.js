let a = window.prompt("Length of the cathetus A?");
let b = window.prompt("Length of the cathetus B?");

a = Number(a);
b = Number(b);

let hyptoneuseVal = (a * a + b * b) ** 0.5;
console.log(hyptoneuseVal);

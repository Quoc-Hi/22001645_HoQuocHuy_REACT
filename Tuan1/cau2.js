var massMark = 78;
var heightMark = 1.69;
var massJohn= 92;
var heightJohn = 1.95;
var massMark2 = 95;
var heightMark2 = 1.88;
var massJohn2 = 85;
var heightJohn2 = 1.76;

var markBMI = (massMark/(heightMark*heightMark));
var johnBMI = (massJohn/(heightJohn*heightJohn));

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
} else {
    console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
}

var markBMI2 = (massMark2/(heightMark2*heightMark2));
var johnBMI2 = (massJohn2/(heightJohn2*heightJohn2));

if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI (${markBMI2.toFixed(1)}) is higher than John's (${johnBMI2.toFixed(1)})!`);
} else {
    console.log(`John's BMI (${johnBMI2.toFixed(1)}) is higher than Mark's (${markBMI2.toFixed(1)})!`);
}
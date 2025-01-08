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

var markHigherBMI = markBMI >johnBMI;
console.log("Data1: Mark co BMI cao hon John khong ", markHigherBMI);

var markBMI2 = (massMark2/(heightMark2*heightMark2));
var johnBMI2 = (massJohn2/(heightJohn2*heightJohn2));

var markHigherBMI2 = markBMI2 > johnBMI2;
console.log("Data2: Mark co BMI cao hon John khong", markHigherBMI2);

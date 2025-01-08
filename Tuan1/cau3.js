function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

// Test Data 1
var dolphinsAverage1 = calculateAverage(96, 108, 89);
var koalasAverage1 = calculateAverage(88, 91, 110);

console.log("Test Data 1:");
if (dolphinsAverage1 > koalasAverage1 && dolphinsAverage1 >= 100) {
    console.log("Dolphins danh chien thang!");
} else if (koalasAverage1 > dolphinsAverage1 && koalasAverage1 >= 100) {
    console.log("Koalas danh chien thang!");
} else if (
    dolphinsAverage1 === koalasAverage1 &&
    dolphinsAverage1 >= 100 &&
    koalasAverage1 >= 100
) {
    console.log("Hoa!");
} else {
    console.log("Khong co doi nao danh chien thang.");
}

// Test Data Bonus 1
var dolphinsAverageBonus1 = calculateAverage(97, 112, 101);
var koalasAverageBonus1 = calculateAverage(109, 95, 123);

console.log("\nTest Data Bonus 1:");
if (dolphinsAverageBonus1 > koalasAverageBonus1 && dolphinsAverageBonus1 >= 100) {
    console.log("Dolphins danh chien thang!");
} else if (koalasAverageBonus1 > dolphinsAverageBonus1 && koalasAverageBonus1 >= 100) {
    console.log("Koalas danh chien thang!");
} else if (
    dolphinsAverageBonus1 === koalasAverageBonus1 &&
    dolphinsAverageBonus1 >= 100 &&
    koalasAverageBonus1 >= 100
) {
    console.log("Hoa!");
} else {
    console.log("Khong doi nao danh chien thang.");
}

// Test Data Bonus 2
var dolphinsAverageBonus2 = calculateAverage(97, 112, 101);
var koalasAverageBonus2 = calculateAverage(109, 95, 106);

console.log("\nTest Data Bonus 2:");
if (dolphinsAverageBonus2 > koalasAverageBonus2 && dolphinsAverageBonus2 >= 100) {
    console.log("Dolphins danh chien thang!");
} else if (koalasAverageBonus2 > dolphinsAverageBonus2 && koalasAverageBonus2 >= 100) {
    console.log("Koalas danh chien thang!");
} else if (
    dolphinsAverageBonus2 === koalasAverageBonus2 &&
    dolphinsAverageBonus2 >= 100 &&
    koalasAverageBonus2 >= 100
) {
    console.log("Hoa!");
} else {
    console.log("Khong doi nao danh chien thang.");
}

//Ham tinh diem trung binh
const diemTB = (diem1, diem2, diem3) => {
    return (diem1+diem2+diem3)/3;
}

const avgDolphins1 = diemTB(44,23,71);
const avgKoalas1 = diemTB(65,54,49);
const avgDolphins2 = diemTB(85,54,41);
const avgKoalas2 = diemTB(23,34,27);

//Ham kiem tra doi chien thang
const kiemTraWin = (avgDolphins, avgKoalas) => {
    if(avgDolphins>= 2*avgKoalas) {
        console.log(`Dolphins chien thang (${avgDolphins} vs. ${avgKoalas})`);
    }else if(avgKoalas >= 2*avgDolphins) {
        console.log(`Koalas chien thang (${avgKoalas} vs ${avgDolphins})`);
    }else {
        console.log("Khong co doi nao thang.");
    }
};

kiemTraWin(avgDolphins1,avgKoalas1);
kiemTraWin(avgDolphins2,avgKoalas2);
/* ================= Khai báo hàm kiểu cũ ================= */
/* function congHaiSo(x,y){
    if(y === undefined){
        y = 2
    }
    return x + y
}

const tong = congHaiSo(4);
console.log(tong); */

/* ================= Khai báo hàm ES6 ================= */
const congHaiSo = (x , y = 2) => x + y
const tong = congHaiSo(4, 5);
console.log(tong);
//Cách khai báo hàm ES5
/*function congHaiSo(x, y){
     return x + y
 }*/

//Cách khai báo hàm ES6
/* const congHaiSo = (x, y) => {
    return x + y
}
const tong = congHaiSo(10, 10);
console.log(tong); */

/* const vietTen = (ten) => {
    console.log(ten);
} */

/* const vietTen = ten => console.log(ten);
vietTen('Kieu Manh'); */

/* const nhanDoi = x => x*2;
console.log(nhanDoi(2)); */


//Tên hàm: congHaiSo
const congHaiSo = (x,y) => x + y;
console.log(congHaiSo(6,5));
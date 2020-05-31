//Bài tập: Hiển thị thông tin thức ăn trong ngày của tôi
/* const buaAn = {
    buaSang: 'xoi',
    buaTrua: 'pho',
    buaToi: 'com'
};

const traiCay = ['cam', 'quyt', 'mit'];

//Cách viết cũ
console.log(`Sang nay toi an ${buaAn.buaSang} va trang mieng bang ${traiCay[0]}`);

//Cách viết mới - Khai báo destructure
const {buaSang, buaTrua, buaToi} = buaAn;
const [traiCay1, traiCay2, traiCay3] = traiCay;

console.log(`Sang nay toi an ${buaSang} va trang mieng bang ${traiCay1}`); */


//Bài tập 2: Tạo 1 object sinh viên (tên, tuổi, mã SV). Lấy thông tin ra và in ra thông tin: "Tôi tên là, ? tuổi, mã sinh viên là..."

const studentObj = {
    name: "Kieu",
    age: 26,
    code: 'SV26',
}

const {name, code, age} = studentObj;

console.log(`Toi ten la ${name}, ${age}, ma sinh vien la ${code}`);
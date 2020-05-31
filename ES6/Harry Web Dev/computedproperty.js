/* ================= Example 1 ================= */
const computedPropertyName = 'buaToi';

const buaAn = {
    buaSang: 'xoi',
    buaTrua: 'pho',
    [computedPropertyName]: 'bun',
}

console.log(buaAn);


/* ================= Example 2 ================= */
/*Hiển thị thông tin  gồm hovaten, tuoi, quoc tich cua 1 nguoi*/
const ten = 'Ten'; 
var hoVaTen = [`hoVa${ten}`];

const nguoi = {
    
    hoVaTen: 'Kieu Xuan Manh', // Computed property name
    quocTich: 'Viet Nam',
    tuoi: 26,
}

//sử dụng spread để nối tiếp objetc
const thongTinDayDu = {
    ...nguoi,
    banThan: 'Nguyen Thi Loan',
    tuoiBanThan: 25,
}

var {hoVaTen, quocTich, tuoi, banThan, tuoiBanThan} = thongTinDayDu;

console.log(`Toi ten la ${hoVaTen}, nguoi ${quocTich}, ${tuoi}. Ban tri ki la ${banThan}, ban ay ${tuoiBanThan} tuoi`);
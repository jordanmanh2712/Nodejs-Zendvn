const buaAn = {//Object
    buaSang: 'xoi',
    buaTrua: 'pho',
    buaToi: 'com'
}

const bangChuCai = ['a','b','c'];//Array

//For..in 
for(let moiBuaAn in buaAn) console.log(moiBuaAn);//Object
for(let chuCai in bangChuCai) console.log(chuCai);//Array
for(let moiBuaAn in buaAn) console.log(buaAn[moiBuaAn]);//Object
//For...of
for(let chuCai of bangChuCai) console.log(chuCai);//Array


/* Cho 1 bien ten va in tung ki tu viet hoa cua bien ten ra man hinh  */
const ten = 'Kieu Manh';
for(let kitu of ten) console.log(kitu.toUpperCase());
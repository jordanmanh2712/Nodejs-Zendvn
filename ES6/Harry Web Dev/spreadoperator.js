//Object Example
const buaAn = {
    buaSang: 'xoi',
    buaTrua: 'pho',
    buaToi: 'com'
};

//Sử dụng spread operator để nối tiếng object
const buaAn1 = {
    ...buaAn, 
    buaKhuya:"Bun",
};

console.log(buaAn);
console.log(buaAn1);


//Array Example
const tapHopSo = [0,1,2,3];
const tapHopSo1 = [...tapHopSo, 5, 7, 9];

console.log(tapHopSo1);

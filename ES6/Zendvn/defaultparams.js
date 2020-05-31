/* ================= Normal function ================= */
function showInfo(name, price = 20){
    return `Course name: ${name}, price: ${price}`;
}

console.log(showInfo("Javascript") + " USD");
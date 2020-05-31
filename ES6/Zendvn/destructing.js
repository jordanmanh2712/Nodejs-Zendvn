/* ==================== CASE 01 ====================== */
/* let arr = [133, 'ES6', false];

let [id , name, free] = arr;
console.log(id + ' - ' + name + ' - ' + free); */


/* ==================== CASE 02 ====================== */
let objCourse = {
    id: 456,
    name: "ES6",
    free: false,
}

let {id, name, free, createBy = "admin"} = objCourse;
console.log(id + ' - ' + name + ' - ' + free + ' - ' + createBy);

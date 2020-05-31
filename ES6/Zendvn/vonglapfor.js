let todoArr = [
    "Play Football",
    "Coding",
    "Studying Typescript",
];

/* ================== CASE 1 - Cách bình thường =================*/
/* console.log(todoArr);
console.log(length);

let length = todoArr.length;
for(let i = 0; i < length; i++){
    console.log(todoArr[i]);
} */


/* ==========  CASE 2 - Vòng lặp For ... in trong Array ========== */
/* for(let index in todoArr){
    console.log(index + ": " + todoArr[index]);
} */


/* =========  CASE 3 - Vòng lặp For ... of trong Array=========== */
/* for(let todo of todoArr){
    console.log(todo);'
} */


/* ============  CASE 4 ============= */
//Object
let todoObj = {
    id: 169,
    name: 'Play Football',
    status: false
}

//Vòng lặp for ... in
for(let index in todoObj){
    console.log(index + ": " + todoObj[index]);
}

//Không in được Vòng lặp for ... of trong Object
/* for(let pro of todoObj){
    console.log(pro);
}
 */
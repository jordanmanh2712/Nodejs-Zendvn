//Hàm arrow function trong mảng
/* let courses = ["Android", "Java", "PHP", "Angular"];
console.log(
    courses.map(course => {
        return course.toUpperCase();
    })
); */

//Case 2 in array
let scores = [9,2,8,4,7,3,1,8];

//Kết quả trả về từ bé đến lớn
scores.sort(
    (x, y) => x - y
);

console.log(scores);
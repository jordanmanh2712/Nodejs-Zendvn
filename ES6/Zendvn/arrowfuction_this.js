/* 
    Hiển thị thông tin khóa học John đã tham gia
    VD:
    John study Android
    John study PHP
    John study Java
*/

/* ================= 01_this ================= */
/* let student = {
    name: "Peter",
    courses: ["Android", "PHP", "Java"],
    showInfo: function(){
        var _this = this;
        this.courses.forEach(function(course){
            console.log(`${_this.name} study ${course}`);
        })
    }
}

console.log(student.showInfo()); */


/* ================= 02_bind(this) ================= */
//bind ít sử dụng
/* let student = {
    name: "Peter",
    courses: ["Android", "PHP", "Java"],
    showInfo: function(){
        this.courses.forEach(function(course){
            console.log(`${this.name} study ${course}`);
        }.bind(this));
    }
}

console.log(student.showInfo()); */



/* =================03_Arrow Function ================= */
let student = {
    name: "Mạnh",
    courses: ["Android", "PHP", "Java"],
    showInfo: function(){
        this.courses.forEach(course =>
            console.log(`${this.name} study ${course}`))
    }
}

student.showInfo();
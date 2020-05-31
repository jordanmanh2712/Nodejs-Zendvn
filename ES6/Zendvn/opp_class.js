/* ================= Class declarations ================= */
class Student{
    constructor(code, name, age){
        //Định nghĩa lớp
        this.code = code;
        this.name = name;
        this.age = age;
    }
    
    //Tính tuổi
    getAge(){
        let today = new Date();
        let year = today.getFullYear();
        return year - this.age;
    }

    //Hiển thị thông tin sinh viên
    showInfo(){
        return this.code + " - " + this.name + " - " + this.getAge();
    }
}

let studentObj = new Student("SV001", "Mạnh", 1993);
console.log(studentObj.showInfo());

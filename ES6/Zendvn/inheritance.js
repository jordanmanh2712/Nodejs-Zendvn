//Class person
class Person{
    constructor(name, code, age){
        //Khởi tạo
        this.name = name;
        this.age = age;
        this.code = code;
    }

    getAge(){
        let today = new Date();
        let year = today.getFullYear();
        return year = this.age;
    }

    showInfo(){
        console.log(this.name + " - " + this.code + " - " + this.getAge());
    }
}

let perObj = new Person("John", 123456, 2000);
perObj.showInfo();

//Class kế thừa tính chất của Person
class Student extends Person {
    constructor(name, code, age, score){
        //Khởi tạo
        super(name, code, age);
        this.score = score;
    }

    showInfo(){
        super.showInfo();
        console.log(" - " + this.score);
    }
}

let studentObj = new Student("Mary", 001, 1994, 9);
studentObj.showInfo();

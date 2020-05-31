let courseWeb = ['PHP', 'Typescript','Javascript']; //2
let courseMobile = ['Android','IOS']; //3

let course = ['HTML', 'Jquery', 'Window Phone']; //1 


//Sử dụng spread để tiếp nối value trong mảng
course = ['HTML', 'Jquery', ...courseWeb, 'Window Phone',...courseMobile];
console.log(course);
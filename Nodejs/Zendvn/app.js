const http = require('http');

const config = require('./myModule/config');/* Module config */
const fs = require('fs');//Module fs - file system
const url = require('url');//Module url

const renderHTML = (path, res) => {//Hàm để đọc file HTML
    fs.readFile(path, (err, data) => {
        if (err) {
            res.write('File not found');
        }else{
            res.write(data);
        }                                 
        res.end();//Kết thúc                                
    });
}

const renderErrorPathName = (res) => {//Hàm xuất lỗi trang khi sai đường dẫn
    res.writeHead(404);
    res.write('File not found');
    res.end();
}

const server = http.createServer((req, res) => {//Tạo server
    const path = url.parse(req.url).pathname;   //Lấy địa chỉ pathname
    switch (path) {//So sánh địa chỉ để xuất file HTML
        case '/about':
            renderHTML('./views/about.html', res);
            break;
        case '/':
            renderHTML('./views/index.html', res);
            break;
        default:
            renderErrorPathName(res);
            break;
    }
    
});


server.listen(config.port, config.hostname, () => {//Xuất kết quả màn hình console
    console.log(`Server running at http://${config.hostname}:${config.port}/`);
});
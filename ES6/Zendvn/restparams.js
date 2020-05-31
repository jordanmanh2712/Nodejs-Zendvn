function caculate(action, ...values){
    let result = 0;
    
    switch(action){
        case '+':
            for(let value of values) result += value;
            break;
        case '-':
            for(let value of values) result -= value;
            break;
    }

    return result;
}

console.log(caculate('-', 10, 3, -8));
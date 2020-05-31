/* ================= Property value shorthand ================= */
/* function getCourse(name, price, free){
    return {
        name,
        price,
        free
    }
}
console.log(getCourse("ES6", "5", false)); */

/* ================= Method Properties ================= */
/* function getCourse(name, price, free){
    return {
        name,
        price,
        free,

        showInfo1: function() {
            console.log(`${name + "-" + price + "-" + free}`);
        },

        showInfo2() {
            console.log(`${name + "-" + price + "-" + free}`);
        },

        showInfo3(delimiter) {
            console.log(`${name + delimiter + price + delimiter + free}`);
        }
    }
}
getCourse("ES6", "5", false).showInfo3("--"); */


/* ================= Computed Property Names ================= */
let propPrefix = "support_";
let bootstrapSupport = {
    [propPrefix + "chrome"]: true,
    [propPrefix + "ie"]: true,
    [propPrefix + "firefox"]: false
}

console.log(bootstrapSupport);
function sayHello() {
    return () => {
        console.log("Hello!");
    };
}

var res = sayHello()
// res();
// console.log(res());


const createBase = (num) => {
    return function (num2) {
        console.log(num+num2) 
    }
}

var addSix = createBase(6)
addSix(10)
addSix(21)
// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }

// console.log(sum(2)(6)(1))


function evaluate(type) {
    return function (a) {
        return function (b) {
            if (type === 'sum') return a + b;
            else if (type === 'mutiply') return a * b;
            else if (type === 'divide') return a / b;
            else if (type === 'substract') return a - b;
        }
    }
}

// console.log(evaluate('sum')(4)(2))
// console.log(evaluate('mutiply')(4)(2))
// console.log(evaluate('divide')(4)(2))
// console.log(evaluate('substract')(4)(2))


//infinite currying

function add(a) {
    return function (b) {
        if (b) return add(a + b)
        else return a;
    }
}

// console.log(add(4)(5)(4)(3)(2)(1)())

//normal function to currying

function currying(fun) {
    console.log(fun)
    return function currying2(...args){
        if(args.length >= fun.length){
            return fun(...args)
        }else{
            return function(...next){
               return currying2(...args, ...next)
            }
        }
    }
}

const sum = (a, b, c) => a + b + c

const res = currying(sum)

console.log(res(1)(2)(3))
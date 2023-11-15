// for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, i * 1000)
// }

// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, i * 1000)
// }

// for (var i = 1; i <= 5; i++) {
//     function call(i) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000)
//     }
//     call(i);
// }

for (var i = 1; i <= 5; i++) {
    let call=(i)=> {
        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    }
    call(i);
}
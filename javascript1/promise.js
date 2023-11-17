console.log('start');

const promise = new Promise((resolve, reject) => {
    console.log('in promise')
    setTimeout(()=>{
        resolve('resolve')
    },3000)
})

promise.then((res)=>{
    console.log(res)
    throw new Error('error')
})
.then(()=>{
    console.log('promise2')
})
.catch((err)=>{
    console.log(err)
})
console.log('end')
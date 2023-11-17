function find(){
    let arr =[];
    for(let i=0;i<100000000;i++){
        arr[i]= i*i;
    }
    return function(index){
        console.log(arr[index])
    }
}

let find2 = find();

console.time('6');
find2(6)
console.timeEnd('6')

console.time('60');
find2(60)
console.timeEnd('60')
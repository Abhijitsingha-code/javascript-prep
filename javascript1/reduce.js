var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

const res = pets.reduce((arr,pet)=>{
    if(!arr[pet]){
        arr[pet]=1
    }else{
        arr[pet]++;
    }
    return arr;
},{})

console.log(res)
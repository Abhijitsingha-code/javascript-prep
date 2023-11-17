let view;

function likeThisVideo2(){
    view="Hello World";
    let count=0;
    return function(){
        if(count===0){
            console.log('Greeting', view);
            count++;
        }else{
            console.log('lol')
        }
    }
}

const likeThisVideo = likeThisVideo2()

likeThisVideo()
likeThisVideo()
likeThisVideo()
likeThisVideo()
likeThisVideo()
likeThisVideo()

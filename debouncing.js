const input = document.querySelector('#inputField')
const debounceDoc = document.getElementById('debounce')
const throttleDoc = document.getElementById('throttle')



let debounceText = debounce(text => {
    debounceDoc.innerText = text;
})

let throttleText = throttle(text => {
    throttleDoc.innerText = text;
})

input.addEventListener('input', (e) => {
    debounceText(e.target.value)
    throttleText(e.target.value)
})

function debounce(fn, delay = 1000) {
    let timer;
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

function throttle(fn, delay = 1000) {
    let isWaiting = false;
    let waitingArgs;

    const timeOutFunc=()=>{
        if(waitingArgs=== null){
            isWaiting=false
        }else{
            fn(...waitingArgs)
            waitingArgs=null
            setTimeout(timeOutFunc, delay)
        }
    }

    return (...args) => {
        if (isWaiting) {
            waitingArgs = args;
            return
        }
        fn(...args)
        isWaiting = true;

        setTimeout(timeOutFunc, delay)

    }
}
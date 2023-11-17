const modular = () => {
    var _counter = 0;

    function add(num) {
        _counter += num;
    }

    function sub(num) {
        _counter -= num;
    }
    function retrieve() {
        return _counter;
    }

    return {add, sub, retrieve};
}

const call = modular();

// console.log(call._counter);

call.add(10);
call.sub(5);
call.add(20);

console.log(call.retrieve())
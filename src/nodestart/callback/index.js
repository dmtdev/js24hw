function first(f) {
    f();
}

first(function () {
    console.log('simple callback');
});

function cb() {
    return 'callback function';
}

function fc(callback) {
    if (typeof callback === 'function') {
        console.log(callback());
    } else {
        console.log('no callback function');
    }
}

fc(cb);
fc()


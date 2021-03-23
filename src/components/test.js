const a = function () {
    console.log('a');
}

function b() {
    console.log('b');
    a();
}


// (function () {
//     console.log('c');
// })()

b();


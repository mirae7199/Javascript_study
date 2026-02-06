// 콜백 함수(Callback Function)란?
// 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미함.

function main(value) {
    console.log(value);
    value(); // 전달받은 함수를 호출
}

function sub() {
    console.log("i am sub");
}

main(sub); // sub 함수 자체를 main 함수에 인수로 전달

main(() => {
    console.log("i am anonymous function");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
    for (let idx=1; idx <= count; idx++) {
        callback(idx);
    }
}


repeat(5, function (idx) {
    console.log(idx);
});

repeat(3, (idx) => {
    console.log(idx * 2);
})

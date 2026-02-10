// Promise
// 날짜를 저장하는 Data 객체처럼 특수한 목적을 위해서 존재하는 내장 객체임.
// 비동기 작업을 효율적으로 처리할 수 있도록 도와준다.
// setTimeout 함수와 같은 비동기 작업들을 감싸는 객체이다.
// 감싸고 있는 비동기 작업을 관리, 실행, 저장, 병렬 실행 ... 

// promise의 3가지 상태
// 대기 (Pending)
// 작업이 완료되지 않은 상태

// 성공 (Fulfilled)
// 비동기 작업이 성공적으로 마무리 된 상태

// 실패 (Rejected)
// 비동기 작업이 실패한 상태

// 대기 -> 성공 (해결되었다. resolve)

// 대기 -> 실패 (거부되었다. reject)

// resolve는 대기 상태를 성공 상태로 바꾸는 함수가 있음.
// reject는 대기 상태를 실패 상태로 바꾸는 함수가 있음.
function add10(num) {
    const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor 라고 부름.

    setTimeout(() => {

        if(typeof num === "number") {
            resolve(num + 10);
        } else {
            reject("num이 숫자가 아닙니다.");
        }

        // resolve("안녕"); // 결과값이 들어있는 것을 확인할 수 있음.
        // reject("왜 실패했는지 이유 ...")
    }, 2000);
});

    return promise;
}

add10(0)
.then((result) => {
    console.log(result);
    return add10(result);
}).then((result) => {
    console.log(result);
    return add10(undefined);
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})

// then 메서드
// -> 그 후에

// promise.then((value) => { // resovle 되었을 때 결과값
//     console.log(value);
// }).catch((error) => { // reject 되었을 때 이유
//     console.log(error); 
// })
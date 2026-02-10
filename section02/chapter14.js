// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 반환해주는 그런 키워드

// 비동기 함수로 변환
async function getData() {
    return new Promise ((resovle, reject) => {
        setTimeout(() => {
            resovle({
                name: "김미래",
                id: "mirae7199",
            });
        }, 1500);
    });
}

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
    // promise 작업이 종료되기까지 기다린다.
    // 그 후 결과값을 할당함.
    const data = await getData();
    console.log(data);
};

printData();
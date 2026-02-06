// 스코프(Scope)란?
// 범위를 뜻한다.
// 변수나 함수에 접근하거나 호출할 수 있는 범위를 말함.
// 전역 스코프 / 지역 스코프
// 전역 스코프: 전체 영역에서 접근 가능
// 지역 스코프: 특정 영역에서 접근 가능

let a = 1; // 전역 스코프

function funcA() { 
    let b = 2; // 지역 스코프
    console.log(a);
}

funcA();
// console.log(b); // b 변수는 지역 스코프이기 때문에 함수 외부에서 접근 불가능

if (true) {
    let c = 1; // 지역 스코프
}
// console.log(c); // c 변수는 지역 스코프이기 때문에 if문 블록 외부에서 접근 불가능

for (let i = 0; i< 5; i++) {
    console.log(i); // i 변수는 지역 스코프이기 때문에 for문 블록 외부에서 접근 불가능
}
console.log(i); // ReferenceError: i is not defined
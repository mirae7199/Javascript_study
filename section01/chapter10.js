// 반복문 (Loop, Iteration)
// 어떠한 동작을 반복해서 수행할 수 있도록 만들어 주는 문법
// 요구사항: 1부터 100까지 콘솔에 하나씩 출력하세요.

for(let i=1; i<=100; i++) {
    console.log(i);
}

// for(초기식; 조건식; 증감식) {
//     반복해서 실행할 코드
// }   

for (let idx=0; idx < 10; idx++) {
    if (idx % 2 === 0) { // 짝수일 때는 다음 반복으로 넘어가게 함.
        
        continue;
    }

    console.log("반복!" + idx);

    if (idx >= 5) {
        console.log("5 이상 반복 정지");
        break;
    }

}
// 배열(Array)이란?
// 여러 개의 값을 순차적으로 담을 수 있는 자료형이다.

// 1. 배열 생성
let arrA = new Array(); // Array 생성자 함수로 배열 생성
let arrB = []; // 배열 리터럴로 배열 생성 (더 자주 사용됨)

let arrC = [
    1, 2, 3, true, "hello", null, undefined
];
console.log(arrC);

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[4];
console.log(item1);
console.log(item2);

// 배열 요소 수정

arrC[1] = false;
console.log(arrC);
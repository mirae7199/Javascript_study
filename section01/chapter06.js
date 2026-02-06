// 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환을 하는 것이다.
let num = 10;
let str = "20";

const result = num + str; // 10이 문자열로 자동으로 바뀌면서 result 값은 1020이 된다.
console.log(result);

// 명시적 형 변환
// -> 개발자가 직접 내장함수 등을 이용해서 직접 형 변환을 명시하는 것이다.
let str1 = "10";
let strToNum1 = Number(str1); // 문자열을 숫자로 변환

let str2 = "10걔";
let strToNum2 = parseInt(str2);

let num1 = 20;
let numToStr1 = String(num1);

console.log(strToNum1 + "입니다.");
console.log(strToNum2);

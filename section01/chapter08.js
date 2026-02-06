// 1. null 방향 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // null 병합 연산자가 undefined가 아닌 값을 찾아 var4에 저장하게 되는 것이다.
console.log(var4);

let var5 = var1 ?? var3;
console.log(var5);

let var6 = var2 ?? var3; // 모든 값이 undefined가 아닐때는 맨 앞에 변수를 값으로 저장하는 것이다.
console.log(var6);

let userName = "김미래";
let userNickName = "mirae";

let displayName = userName ?? userNickName; // 만약 둘 중 값이 undefined가 존재한다면 undefined가 아닌 값을 저장한다.
console.log(displayName);

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자.

let var7 = 1;
var7 = "hello";

let t1 = typeof var7; // var7의 값이 어떤 타입인지 문자열로 반환한다.
console.log(t1);

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식 ? 참일 때 값 : 거짓일 때 값

let var8 = 10;

// 요구사항: 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀" 저장
let res = var8 % 2 === 0 ? "짝" : "홀";
console.log(res);
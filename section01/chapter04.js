// 1. 변수
let age; // let은 변수 선언만 해도 된다. 초기화 안해도 됨.
// 변수를 선언한다. 초기화 한다.
console.log(age);

age = 30;
console.log(age);

// 2. 상수
const birth = "2001.07.19";
// 상수는 값을 변경할 수 없다.
// 선언과 동시에 초기화도 해줘야 한다.

console.log(birth);

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1 $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2 숫자로 시작할 수 없다.
let name1;
let name2;

// 3-3 예약어를 사용할 수 없다.
//let let;

// 4 변수 명명 가이드
let salesCount = 1;
let refundCount = 2;
let totalSalesCount = salesCount - refundCount;

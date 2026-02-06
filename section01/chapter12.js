// 1. 함수 표현식 
function funcA() {
    console.log("funcA");
}
let varA = funcA; // varA 변수에 funcA 함수 자체를 저장할 수 있다.
varA();

// 함수를 변수에 저장하여 사용할 수 있다.
let varB = function funcB() {
    console.log("funcB");
}
varB();
//funcB(); // funcB 함수는 함수 선언이 아닌 함수 표현식이기 때문에 호출 불가능하다. // 따라서 이름을 생략해도 전혀 문제가 없다.

let varC = function () { // 이름을 생략한 함수를 익명함수라고 한다.
    console.log("익명함수");
}
varC();

// 2. 화살표 함수 람다?
let varD = () => {
    return 1;
}

console.log(varD());

// 단순 값 반환일 때는 중괄호와 return 키워드를 생략할 수 있다.
let varE = (value) => value + 2;
console.log(varE(5));
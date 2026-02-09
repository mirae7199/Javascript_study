// 단락 평가(Short-cicuit Evaluation)
let varA = false;
let varB = true;

// 첫번째 피연산자(varA)만으로도 결과를 확정하고
// 두번째 피연산자의 값에 접근하지 않는 것을 단락 평가라고 한다.
console.log(varA && varB); // varA는 false이기 때문에 AND 연산의 결과는 false이다.

// OR 연산에서 첫번째 피연산자 varB가 true이기 때문에 결과는 true이다.
console.log(varB|| varA);

function returnFalse() {
    console.log("False 함수");
    return false;
}

function returnTrue() {
    console.log("True 함수");
    return true;
}

// 두 함수에는 log가 있지만 결과에 뜬 log는 retrunFalse() 함수의 log 뿐이다.
// returnFalse() 함수가 호출되고 결과가 False로 확정되면서
// 두번째 피연산자 returnTrue() 함수는 호출되지 않았기 때문.
console.log(returnFalse() && returnTrue()); 

console.log(returnTrue() && returnFalse()); // 두 함수의 log가 뜬 것을 확인할 수 있음.

console.log(returnTrue() || returnFalse());  

// 단락 평가 활용

function printName(person) {

    if(!person) {
        console.log("person에 값이 없음")
        return;
    }
}

// 단락 평가를 활용하여 개선한 함수
function printName2(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName2();
printName({name: "김미래"});
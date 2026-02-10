 // Truthy / Falsy란?
 // 참이나 거짓을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가하는 특징

 if(1) {
    console.log("true 입니다.");
 } else {
    console.log("false 입니다.");
 }

 // 1은 true를 나타냄

 if (undefined) {
    console.log("true 입니다.");
 } else {
    console.log("false 입니다.");
 }

 // undefined는 false를 나타냄.

 // 1. Falsy한 값
 let f1 = undefined;
 let f2 = null;
 let f3 = 0;
 let f4 = -0;
 let f5 = NaN;
 let f6 = "";
 let f7 = 0n;

 if (!f1) {
    console.log("falsy");
 }

 // 2. Truthy 한 값
 // -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
 let t1 = "hello";
 let t2 = 123;
 let t3 = [];
 let t4 = {};
 let t5 = () => {};
 
// 3. 활용 사례

function printName(person) {
     // 객체가 정의 되지 않았거나 null 일때,
    if (person === undefined || person === null) {
        console.log("person의 값이 없음");
        return; // 아래의 코드가 실행되서 오류가 나는 것을 방지함.
    }
    console.log(person.name);
}

let person = {
    name : "김미래",
    age : 25,
    birth : "2001-07-19",
};

let person2;
printName(person2); // typeError

function printName2(person) {
    // person의 값이 없을 때, Falsy한 값으로 판정되기 때문에
    // not 연산자를 사용하여 오류 방지
    if(!person) { 
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

printName2(person2);
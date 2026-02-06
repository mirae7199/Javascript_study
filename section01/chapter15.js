// 객체(Object)란?
// 객체를 이용하면 현실세계에 존재하는 어떤 사물이나 개념을 표현하기 용이하다.

// 1. 객체 생성
let obj1 = new Object(); // Object 생성자 함수를 이용한 객체 생성
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = { // key : value 쌍으로 이루어짐
    name: "김미래",
    age: 24,
    hobby: "게임",
    job: "BE 개발자",
    10 : 20, // key로 숫자도 사용 가능
    "like cat": true, // 공백이 포함된 key는 따옴표로 묶어야 함
};

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name; // 점 표기법
console.log(name);

let age = person["age"]; // 괄호 표기법
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.1 새로운 프로퍼티를 추가하는 방법
person.job = "FE developer";
person["favoriteFood"] = "치킨";

console.log(person); 

// 3.2 프로퍼티 수정하는 방법
person.job = "edcuator";
person["favoriteFood"] = "피자";
console.log(person);

// 3.4 프로퍼티 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법(in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1, result2);
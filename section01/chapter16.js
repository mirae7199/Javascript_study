// 1. 상수 객체
const animal = {
    type: "고양이",
    name: "초코",
    color: "black",
};

animal.age = 2; // 상수 객체라도 내부 프로퍼티는 추가 가능
animal.name = "콩이"; // 상수 객체라도 내부 프로퍼티는 변경 가능
delete animal.color; // 상수 객체라도 내부 프로퍼티는 삭제 가능
console.log(animal);

// 2. 메서드
// 값이 함수인 프로퍼티를 말함.

const person = {
    name: "김미래",
    // 메서드
    sayHi() {
        console.log("안녕하세요");
    },
};
person.sayHi();
person["sayHi"]();
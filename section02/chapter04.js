// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];

// 4와 5 사이에 스프레드 연산자를 사용하여 
// arr1의 값을 흩뿌림.
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

let obj1 = {
    a: 1,
    b: 2,
};

let obj2 = {
    ...obj1,
    c: 3, 
    d: 4,
};

console.log(obj2);

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3)
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

// 스프레드 연산자 X
function funcB(one, ...rest) { // Rest 매개변수를 사용하면 한번에 모든 매개변수를 가져올 수 있음.
    console.log(rest);
    console.log(one); // one은 따로 저장됨. 순서대로
}

funcB(...arr1);
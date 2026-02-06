// 함수
// 중복으로 작성된 유사한 기능을 하는 코드들을 하나로 묶어서 재사용 가능하다.

// 함수 선언
function greeting() {

    function another() {
        console.log("another function"); // 중첩 함수
    }
    console.log('안녕하세요');
}

// 함수 호출
console.log("함수 호출 전");
greeting(); 
console.log("함수 호출 후");

function getArea(width, height) { // 매개변수  
    let area = width * height;
    return area;
}

let area1 = getArea(10, 20); // 인수를 전달하여 함수 호출
let area2 = getArea(30, 20);

console.log(area1);
console.log(area2);

// 자바스크립트에서는 함수 선언이 함수 호출보다 밑에 있어도 문제없이 동작한다.
// 호이스팅 이라는 것이 있는데
// -> 끌어올리다 라는 뜻이다.
// 내부적으로 알아서 호이스팅 되어 함수가 위로 올라가 동작한다.
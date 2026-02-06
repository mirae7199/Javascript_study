// 1. if 조건문 (if 문)
// 특정 조건에 충족했을 때 실행되는 코드를 작성하기 위한 문법이다.
// 대표적으로 if, switch문이 있다.

let num = 11;

if(num >= 10) {
    console.log("num은 10 이상입니다.");
    console.log("조건이 참 입니다.");
}
else if (num >= 5) {
    console.log("num은 5 이상입니다.");
}
else if (num >= 3) {
    console.log("num은 3 이상입니다.");
}
else {
    console.log("num은 10 미만입니다.");
    console.log("조건이 거짓 입니다.");
}

// else if는 여러 개 작성이 가능하다.
// if로 시작해서 else로 마지막을 끝내야 한다.

// 2. switch 조건문
// -> if문과 기능 자체는 동일하다
// -> 다수의 조건을 처리할 때 if보다 직관적이다.

let animal = "cat";

switch(animal) {
    case "cat": {
        console.log("고양이");
        break;
    }
    case "dog": {
        console.log("강아지");
        break;
    }
    case "bear": {
        console.log("곰");
        break;
    }
    case "tiger": {
        console.log("호랑이");
        break;
    }
    case "snake": {
        console.log("뱀");
        break;
    }
    default: {
        console.log("동물이 아닙니다.");
        break;
    }
}
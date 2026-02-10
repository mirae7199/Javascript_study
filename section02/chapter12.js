function add(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    }, 3000);
};

// add(1, 2); // 3초 뒤에 결과가 나오는 것을 확인할 수 있음.

add(1, 2, (value)=>{ // 비동기 함수의 콜백함수 결과
    console.log(value);
});

// 음식을 주문하는 상황
function orderFood(callback) {
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 3000);
};

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `냉동한 ${food}`;
        callback(freezedFood);
    }, 1500);
};

orderFood((food) => {
    console.log(food);

    cooldownFood(food, (cooldownedFood)=> {
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, (freezedFood) => {
            console.log(freezedFood);
        });
    });

});
// 연달아 콜백함수를 사용하면 콜백 지옥이 될 수 있다.


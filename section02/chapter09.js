// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name: "김미래", hobby:"배드민턴"},
    {name: "차은호", hobby:"게임"},
    {name: "김다호", hobby:"노래"},
];

// 웹페이지에서 필터 조건 걸어서 검색하는데 많이 쓰임.
const filtered = arr1.filter(
    (item) => item.name === "김미래" || item.hobby === "게임");

console.log(filtered);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const newArr = arr2.map((item, idx, arr) => {
    console.log(idx, item);   
    return item * 2;
});

console.log(newArr);

// map 활용

const mapNameResult = arr1.map((item) => {
    return item.name;
});

console.log(mapNameResult);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();
console.log(arr3);

let arr4 = [10, 3, 5];
const sortedArr = arr4.sort((a,b) => {
    if (a > b) {
        // b가 a 앞에 와라
        return 1; // 양수를 반환하면 작은 값이 앞으로
    }else if(a < b) {
        // a가 b 앞에 와라
        return -1;
    }else {
        // 두 값의 자리를 바꾸지 마라
        return 0;
    }
});

console.log(sortedArr);

// 4. toSorted (최근에 추가된 함수)
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi", "im", "winterlood"];
const joind = arr6.join(" ");
console.log(joind);
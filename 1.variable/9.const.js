// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; 이렇게 하면 안됨!

// 1. 상수
const MAX_FRUITS = 5; // 최대 과일의 수가 5; 변하지 않는 수일 경우 const로 작성. 그래서 코딩할 때 const를 써도 되는 상황이라면 let보다는 const로 작성하는 게 제일 베스트

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
// apple = {};
console.log(apple);
apple.name = 'orange';
apple.display = '🍏';
console.log(apple);

// const 객체 { } 일때 객체가 가지고 있는 메모리셀에 할당 된 주소가 있는데 그 메모리셀에 다른 주소를 재할당 할 수 없다. but 그 메모리 주소 안에 있는 데이터는 변경할 수 있다. 

// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
// 모든 표현식은 문인데 문 중에서도 값으로 표현할 수 있는 문을 표현문이라고 한다.
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));
// 무명함수로 add 에 할당하고 호출하는 식으로 해야함. function 다음 이름을 적어줘도 되지만 함수 이름으로 호출시 외부에서 접근할 수 없어 에러가 발생됨.

// 화살표 함수 const name = () => { }
// { } 안에 특정한 일을 하지 않고 값만 리턴하는 함수라면 { } 생략 가능.
add = (a, b) => a + b;

console.log(add(1, 2));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// IIFE (Immediately-Invoked Function Expressions)
(function run() {
  console.log('😍');
})();

// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값을 설정할 수 있다. Default Parameters a = 1, b = 1
function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);
  console.log(arguments);
  console.log(arguments[1]);
  return a + b;
}
add();

// a = 1, b = 1 이런식으로 기본값이 지정되어 있어도 호출할 때 인자값을 넣으면 기본값은 무시된다.

// Rest 매개변수 Rest Parameters
// 얼마나 많은 갯수의 인자가 전달될지 모를 때. 모든 것들을 배열로 받고 싶을 때. 
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7, 8);

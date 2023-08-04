// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.fullName = `${this.lastName} ${this.firstName}`;
    // 만약 위와 같이 함수를 속성으로 넣으면 이름을 호출할때마다 업데이트가 되지 않는다. 그래서 아래처럼 함수로 만든다.
  }
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  } // 속성에 접근하듯이 만들 수 있음. 

  set fullName(value) {
    console.log('set', value);
  } // 할당한 값을 받아서 출력한다. 
}

const student = new Student('수지', '김');
student.firstName = '안나';
console.log(student.firstName);
console.log(student.fullName);
student.fullName = '김철수';

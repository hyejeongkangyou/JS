/*! check-data-types.js © yamoo9.net, 2016 */

/**
 * --------------------------------
 * 올바른 데이터 유형을 체크하는 방법
 * 1. typeof
 * 2. instanceof
 * 3. constructor
 * 4. 사용자 정의 헬퍼 함수 isType()
 * ----------------------------- */

var num, str, boo, fnc, arr, obj;

num = 10;                   // new Number(10)
str = 'java vs javascript'; // new String('java vs javascript')
boo = !false;               // new Boolean(true)
fnc = function() {};        // new Function()
arr = [];                   // new Array()
obj = {};                   // new Object()

// ---------------------------------------------------------------
// 1. typeof 키워드
// !!!!!!!!! typeof의 치명적 설계 오류
// null, []를 올바르게 인식하지 못한다.
// console.log('null:', typeof null);
// console.log('arr:', typeof arr);

// ---------------------------------------------------------------
// 2. instanceof 키워드
// 실체화된 객체(instance) - 객체를 생성하는 생성자(constructor)
// {실체화된 객체} instanceof [객체를 생성하는 생성자]
var check_array_data = arr instanceof Array;
var is_check_array_data = arr instanceof Object;
// console.log('check_array_data:', check_array_data);
// console.log('is_check_array_data:', is_check_array_data);
// null 유형은 instanceof 키워드를 사용하여 데이터 체크가 불가능
// 이유는 instanceof 키워드는 객체만 판별이 가능!!!
// 객체가 아닌 것들(null, undefined)에는 사용할 수 없다.
// console.log('null is:', null instanceof Null);

// !!!!!!!!! instanceof 키워드 사용에 주의가 필요한 부분!
// 원시데이터 유형(9, '문자', false)은 올바르게 체크할 수 없다.

// console.log('num instanceof Number:', num instanceof Number);
// console.log('str instanceof String:', str instanceof String);
// console.log('boo instanceof Boolean:', boo instanceof Boolean);

// ---------------------------------------------------------------
// 3. {object}.constructor 속성(Property)
// 자바스크립트에 존재하는 실체화된 모든 객체(Instance Object)는 기본적으로 가지고 있는 속성이다.
// console.log('num.constructor:', num.constructor);
// console.log('str.constructor:', str.constructor);
// console.log('boo.constructor:', boo.constructor);
// console.log('fnc.constructor:', fnc.constructor);
// console.log('arr.constructor:', arr.constructor);
// console.log('obj.constructor:', obj.constructor);

// console.log('num.constructor === Number:', num.constructor === Number);
// console.log('str.constructor === String:', str.constructor === String);
// console.log('boo.constructor === Boolean:', boo.constructor === Boolean);
// console.log('fnc.constructor === Function:', fnc.constructor === Function);
// console.log('arr.constructor === Array:', arr.constructor === Array);
// console.log('obj.constructor === Object:', obj.constructor === Object);

// ---------------------------------------------------------------
// 4. 사용자 정의 헬퍼 함수
// 모든 객체의 조상이자, 객체 생성자 함수
// 생성자 함수의 특징은 함수 이름의 첫 글자는 대문자.
// 생성자 함수는 .prototype 속성을 가짐.
console.dir(Object.prototype); // {}

// Object.prototype 원형 객체의 능력 중에는 .toString() 함수가 있다.
console.log(typeof Object.prototype.toString); // function

// Object.prototype.toString 함수는 누군가 빌려쓸 수 있다.
// 자바스크립트의 데이터 유형들이 빌려 쓴다.
// Object.prototype.toString.call({data})
// [Object {Date}]

// 위 코드의 수행 결과 아래와 같은 문자열이 반환된다.
// [Object Null]

// 우리는 위 문자열에서 해당 데이터 이름을 가진 것을
// 잘라내야(slice) 한다.

// Object.prototype.toString.call({data}).slice(8, -1);
// Null

// 위 문자열을 소문자로 변환하자
// Object.prototype.toString.call({data}).slice(8, -1).toLowerCase();

function isDataType(d) {
  return Object.prototype.toString.call(d).slice(8, -1).toLowerCase();
}


// // 사용자 정의 생성자 함수
// function Star() {}
// // Star 생성자 함수는 .prototype 속성을 통해
// // 원형 객체를 참조하고 있다.
// Star.prototype; // {}

// var star1 = new Star();
// var star2 = new Star();
// var star3 = new Star();
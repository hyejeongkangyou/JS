// JavaScript Core

// 엄격 모드
'use strict';


// 실행 구문 1

// 변수 x에 숫자 10 상수 값을 대입
var x = 10; // 변하지 않는 수 : 상수 

// 변수 y의 연산 결과는
// 변수 x에 숫자 10을 더한 값이다.
var y = x + 10; // x값에 따라 변하는 수 : 변수 // 20

var z = y * y - 100;


// -------------------------------------------
// 초기 변수 선언
// 방법1.
// var x, y, z;

// 방법2.
// var x; 
// var y; 
// var z;

// 방법3.
// var x = 10;
// var y = x + 20;
// var z = x + y + 10
// -------------------------------------------

// 콘솔(console)에 기록(log)하고 싶다
console.log('x =',x); // x=10
console.log('y =',y); // y=20
console.log('z =',z); 

// --------------------------------------------------------

// 실행 구문 2

// 변수는 한번만 선언되면 되기 때문에 아래에서는 var를 붙여주지 않아도 된다.
// 변수의 상태가 변경되었다. 
x = -19;

// 변수는 단 하나의 값만 저장할 수 있기 때문에 이전에 저장된 내용은 사라지게 된다.
y = x + 10; // -9
// var z = x + y

console.log('x =', x);
console.log('y =', y);

// 이미 위에서 실행된 값이 그대로 실행된다.
console.log('z =', z);


// --------------------------------------------------------

// var 키워드 한번만 사용하는 코딩 패턴(방법)
// var singleton pattern
var a=1, b=2, c=9;
// a = 1;
// b = 2;
// c = 9;

var man = '남자',
    woman = '여자',
    people = '사람들';

// man = '남자';
// woman = '여자',
// people = '사람들';

// --------------------------------------------------------

// 변수 이름 작성 규칙

// 규칙 1.
// 이름 맨 앞에 숫자가 오면 안된다.
// var 9tree; //오류 발생
// 맨 앞이 아니라면 괜찮다.
var t9;

// 규칙 2.
// 이름 사이에 공백(띄어쓰기)은 허용하지 않는다.
// var my name; //오류 발생
// 이름 사이는 공백 대신에 밑줄을 사용한다.
var my_name;

// 규칙 3.
// 이름 작성 시, 특수문자는 '$,_' 단 두가지만 허용.
// var ++#@_name;

// 규칙 4.
// 변수 이름은 모두 대문자를 사용해서 작성하지 않는다.
// 오류가 발생하는 것은 아니지만...
// 관례적으로 이름이 모두 대문자인 경우, 상수로 인식한다.
// var SMART_PHONE;
// 고로 대문자를 변수 이름에 사용하는 경우는
// 카멜 케이스(camelCase)표기법을 따르는 경우가 많다.
var smartPhone;

// 위 변수는 변수(변하는 수)가 아닌 상수를 나타내는 식별법이다.
// const STORAGE;

// 웹 브라우정 경고 창을 띄운다.
// 오늘날 자주 사용되지 않는다.
// consoel.log()가 자주 사용된다.
// window.alert('javaScript 코드 실행');

// ------------------------------------------------------
// 자바스크립트 문장은 점으로 연결되어 이루어진다.

// 친구가 커피를 선물하다.
// 친구.선물하다(커피); = 오브젝트.메서드(아규먼트 - 전달인자);
// 객체.동작(전달인자);






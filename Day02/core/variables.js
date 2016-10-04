/*
 * -------------------------------------
 * 자바스크립트 변수 정의 패턴
 * -------------------------------------
*/

// 패턴 1. 선언만 하는 경우
// undefined 원시 데이터 유형 값으로 변수에 할당(복제)된다.

// var 키워드를 한 번만 사용하는 방법
var tissue, remote_control, cup, mike;
// var 키워드를 변수 이름마다 사용하는 방법
var tissue;
var remote_control;
var cup;
var mike;

// 선언된 이후에 값(Data)을 변수에 할당한다.
tissue         = '티슈'; // 문자열
remote_control = 'true'; //불리언(논리)
cup            = 320; // 숫자
mike           = null // Null "비어 있다"

// 초기 선언 후 런타임 중에 변수에 값을 할당할 수 있다.

// 패턴 2.
// 선언과 동시에 값을 할당(대입, =)하는 경우
var html = document.documentElement; // <html> 문서 객체{참조형 데이터, 값 참조}
var body = document.body; // Legacy 방법(웹의 초창기에 사용되던... 하지만 지금도 빈번하게 사용되는 유물)

// var 키워드를 한번만 사용할 경우
var html = document.documentElement,
	body = document.body;

// 아래 코드와 위 코드는 역할은 동일하나, 사용하는 방법의 차이가 있을 뿐.
var html, body;
html = document.documentElement;
body = document.body;

/*
 * -------------------------------------
 * 데이터 값 복사와 참조
 * -------------------------------------
*/


/** 값 `복사` */

// 원시 데이터(Primitive Data Type) 유형 5가지
// 1. undefined (정의되지 않았다, 부정)
// 2. null 		(비어있다. 부정)
// 3. Number	(숫자형 데이터)
// 4. String	(문자형 데이터)
// 5. Boolean	(논리형 데이터)


var study_name; // undefined
var no_exist_el = document.getElementById('no-ex'); // null
var pre_count = -12; // Number
var course_name = 'JJ 첫걸음 CAMP'; // String
var is_continue = true; // Boolean

var copy_sn = study_name; // copy_sn ????

/** 값 `참조` */
// 참조형 데이터(Reference Data Type) 유형 [객체(Object)]
// 참조 데이터 유형 3가지
// 1. 객체(Plain Object, `{}`)
// 2. 함수(Function Object, `function(){}`)
// 3. 배열(Array Object, `[]`)
var a = 10;
var b = a;
var c = {x: a};
var d = c; // c에 참조된 객체를 d도 참조함.
console.log('a:',a);
console.log('b:',b);
console.log('c:',c);
console.log('d:',d);

a = 100;
b = 200;
c.x = 300;

console.log('a:',a);
console.log('b:',b);
console.log('c.x:',c.x);
console.log('d.x:',d.x); // c에 참조된 객체를 d도 참조하고 있기에 값이 변경됨.













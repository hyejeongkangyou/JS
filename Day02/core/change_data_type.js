/**
 * --------------------------------
 * 데이터 유형을 자동으로 변형
 * ----------------------------- */

/**
 * --------------------------------
 * Number -> String
 */

// 방법 1. 앞,뒤에 홑따옴표(''), 쌍따옴표("")를 추가하는 경우
// e.g) '20', "2103"

// 방법 2. 빈 문자열 ''을 숫자 뒤에 더한다(+)
// e.g) 20 + ''

// 방법 3. 문자 객체가 소유한 함수(메소드, Method)를 사용하는 경우
// e.g) 20.toString();

// 방법 4. 문자 함수를 사용하여 숫자를 문자로 변형
// e.g) String(20)

/**
 * --------------------------------
 * String(Like Number) -> Number
 */

// 방법 1. 숫자형 문자 뒤에 0을 빼거나, 1을 곱하거나 나눈다.
// e.g) '450' - 0, '390' * 1, '-123' / 1

// 방법 2. 숫자형 문자 앞에 + 기호를 붙인다.
// e.g) +'.94'

// 방법 3. 숫자 함수에 숫자형 문자를 전달하여 실행한다.
// e.g) Number('89790');

/**
 * --------------------------------
 * String(Like Unit) -> Number
 * 단위(Unit)의 유형
 * 10px
 * 11pt
 * 1em
 * 2.1rem
 * 100%
 * 80vmin
 * 20vw
 */

// 방법 1. parseInt() 함수에 단위 유형의 문자를 전달한다.   -> 정수(Integer)를 반환
// e.g) window.parseInt('20.3%', 10); //20

// 방법 2. parseFloat() 함수에 단위 유형의 문자를 전달한다. -> 실수(Floating)를 반환
// e.g) window.parseFloat('20.3%', 10) //20.3



// e.g) 문서 객체의 스타일 속성 값을 가져와 조작하는 예시 (parseInt() 활용)
// 문서에서 요소이름(tagName)이 'h1'인 요소를 탐색하여 수집한다.
// Nodelist (노드리스트)
var h1_els = document.getElementsByTagName('h1'); // [ <h1> ]
// 수집된 집합(Nodelist) 내에서 대상 객체를 뽑아내야만 제어가 가능하다.
var h1 = h1_els.item(0); // Programming에서는 시작되는 숫자 값이 0부터 이다.
// 이벤트 속성에 실행할 함수를 연결한다.
h1.onclick = function() {
  console.log('this is heading 1.');
  // 클릭하면 h1 참조 객체의 font-size 값을 가져오고자 한다.
  var current_font_size = h1.style.fontSize;

  // W3C Standard Method
  current_font_size = window.getComputedStyle(h1).fontSize;
  // Microsoft Non Standard Method
  // h1.currentStyle.fontSize;

  // console.log( window.parseInt(current_font_size, 10));
  current_font_size = window.parseInt(current_font_size, 10);

  current_font_size = current_font_size - 10;

  h1.style.fontSize = current_font_size + 'px';
};
// 참고로 수집된 집합 자체에 이벤트를 연결하면 동작하지 않는다.
h1_els.onclick = function() {
  console.log('h1_els 변수에 참조된 것은 노드리스트(집합)이기에 이 코드는 작동되지 않는다.');
};
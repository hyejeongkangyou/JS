var html, head, body;
// 문서에서 CSS 선택자를 물어봐서 문서 요소 객체를 각 변수에 참조한다.
html = document.querySelector('html');
head = document.querySelector('head');
body = document.querySelector('body');

console.log('typeof html:', typeof html);
console.log('typeof head:', typeof head);
console.log('typeof body:', typeof body);

console.log('%c---------------------------', 'color: #3d9a21');

console.log('isDataType(html):', isDataType(html) );
console.log('isDataType(head):', isDataType(head) );
// 아직 <body>가 생성되지 않았기 때문에 null값이 반환된다. 
console.log('isDataType(body):', isDataType(body) ); // null

console.log('%c---------------------------', 'color: #3d9a21');

// if 조건문
// (조건)의 결과 값이 true, false 임에 따라 코드 블록문({})의 실행 여부가 결정됨.
if ( isDataType(html) === 'null' ) {
  console.log('<html> 요소는 아직 생성되지 않았습니다.');
}
if ( isDataType(head) === 'null' ) {
  console.log('<head> 요소는 아직 생성되지 않았습니다.');
}
if ( isDataType(body) === 'null' ) {
  console.log('<body> 요소는 아직 생성되지 않았습니다.');
}
console.log('%c---------------------------', 'color: #3d9a21');
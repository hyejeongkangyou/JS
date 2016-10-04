// 숫자(Number) 유형
// 숫자 상수(실수, 소수, 정수, ..)
var x = 3;
var y = 1.234;
var z = x + y;

//문자(String) 유형
// 문자 상수 "", ''로 감싸진 글
var k = 'Doctor K';
var rem = 'Root Equal M';
var me = 'I\'m a Boy.'; // Escape 처리(Back Slash `\` 사용)
var you = "You're a Girl"


// Event property ,handler, binding

// 한 회만 실행되도록 작성(미션)
// 한번 실행하고 doc.onclick객체의 값을 null로 주게 되면 멈추게 된다.
var doc = document;

doc.onclick = function(){
	console.log('clicked document object')
	doc.onclick = null;
}
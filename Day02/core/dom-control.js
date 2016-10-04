// [Design, 설계]참조하고자 하는 문서 객체에 적절한 메모리 이름 공간을 변수 이름으로 설정한다.
// var html = document.documentElement, 
// 	body = document.body,
// 	page = document.getElementById('page'),
// 	page_headline = page.getElementsByTagName('h1'),
// 	page_child = page.getElementsByClassName('page-child');
	// getElement(s)들은 IE 6-8에서는 작동하지 않는다.

	// attribute: 정적(HTML 속성)
	// property : 동적(CSS, JS 속성)


// 코드가 실행되는 시점(Event)을 감지하여 코드를 처리한다.
// 이벤트 프로그래밍


// Window 객체의 이벤트 속성(Event Property)
// window.onload는 딱 한번 실행된다.
// 처음 웹페이지가 실행될 때 onload가 처음 한번 실행되기 때문에
console.log( window.onload ); // null[초기값]

var action = function(){
	console.log('ready action');
};

// 초기화 수행
var initialization = function(){
	var html 			= document.documentElemet,
		body 			= document.body,
		page			= document.getElementById('page'),
		page_headline 	= page.getElementsByTagName('h1'),
		page_child 		= page.getElementsByClassName('page-child');

	console.log('html', html);
	console.log('body', body);
	console.log('page', page);
	console.log('page_headline', page_headline);
	console.log('page_child', page_child);
}

window.onload = initialization;
// window.onload = action;


// 브라우저가 문서를 해석하고 로드가 될 때 작동
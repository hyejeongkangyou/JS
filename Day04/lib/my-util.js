

// isDataType 데이터 유형을 올바르게 체크해주는 헬퍼 함수
function isDataType(d){
	return Object.prototype.toString.call(d).slice(8, -1).toLowerCase();
}


function checkDomElement(element){
	if( isDataType(element) === 'null'){
		console.info('현재 문서에 선택하고자 하는 문서 요소 객체는 존재하지 않습니다.');
	}else{
		console.log('<'+ element.nodeName.toLowerCase() + '>는 문서 요소객체입니다.');
	}
}

// console {}
// .log()		기록하다
// .info()		정보를 표시하다
// .error()		오류를 출력하다
// .dir()		분석하다
/*
* ----------------------------------------------
* 자바스크립트 데이터 유형
* ----------------------------------------------
* [원시 데이터 유형]
* 숫자(Number) 2019
* 문자(String) '푸르고 깊은 바다', "Design is All. All is Design."
* 불리언(Boolean, 논리) true, false
* 
* [복합데이터 유형]
* 배열(Array)
* 함수(Function)
* 객체(Object)
*/

// 숫자를 변수에 할당
var current_year = 2016;

// 문자를 변수에 할당
var app_name = 'Fast Campus JJ CAMP'

// 불리언을 변수에 할당
var studying = true;
var sleeping = false;

// -------------------------------------------

// 변수에 값 복사와 참조

// 복사하는 경우
var c_year = current_year;

console.log('current_year: ', current_year);
console.log('c_year: ', c_year);

// 참조하는 경우
// 복합 데이터 활용
// 배열 데이터
var study_tools = ['pen', 'note'];
// study_tools 변수가 참조한 값을 class_tools 변수도 참조한 것이다.
// 어느쪽이든 데이터가 변경이 된다면, 두 변수 값 모두 바뀌게 된다.
var class_tools = study_tools;

// pop()의 경우에는 마지막 값을 빼내어 삭제한다.결국 study_tools에서는 'note'만 남게 된다.
study_tools.pop();

console.log('study_tools', study_tools);
console.log('class_tools', class_tools);
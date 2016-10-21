// 자바스크립트 조건 구문
// if, switch, &&, ||

// 조건문 if
// if( isDataType(html) === 'null'){
// 	console.log('<html> 요소는 아직 생성되지 않았습니다.');
// }

// if( isDataType(head) === 'htmlheadelement'){
// 	console.log('<head> 요소는 생성되었습니다.');
// }

// if( isDataType(body) === 'null'){
// 	console.log('<body> 요소는 아직 생성되지 않았습니다.');
// }

var condition = true;

// true
// if(condition){
// 	console.log('실행이 된다.')
// }else{
// 	console.log('실행이 안된다.')
// }

// false
// if(!condition){
// 	console.log('실행이 된다.')
// }else{
// 	console.log('실행이 안된다.')
// }

console.log('%c---------------------------', 'color: #3d9a21');
if(condition === true){
	console.log('Condition is TRUE');
}else{
	console.log('Condition is FALSE');
}

condition = !condition

if(condition === true){
	console.log('Condition is TRUE');
}else{
	console.log('Condition is FALSE');
}


console.log('%c---------------------------', 'color: #3d9a21');
var rank = 1;
// rank 조건이 1이라면 블록문 {} 수행
if( rank === 1){
   console.log( 'rank is One' )
// rank 조건이 2이라면 블록문 {} 수행
}else if( rank === 2){
   console.log( 'rank is Two' )
// rank 조건이 3이라면 블록문 {} 수행
}else if( rank === 3){
   console.log( 'rank is Three' )
// rank 조건이 4이라면 블록문 {} 수행
}else if( rank === 4){
   console.log( 'rank is Four' )
// rank 조건이 1,2,3,4가 아니라면 블록문 {} 수행
}else{
   console.log( 'rank isn\'t One, Two, Three, four' )
}

console.log('%c---------------------------', 'color: #3d9a21');

// var con = 18;

// if( con < 8 ){
// 	console.log( 'condition is '+ con);
// }else if( con>=8 && con<=27){
// 	console.log( 'condition is 8~27');
// }else{
// 	console.log('condition is more than 27')
// }

// con += 10;

// if( con < 0 ){
// 	console.log( 'condition is '+ con);
// }else if( con>=8 && con<=27){
// 	console.log( 'condition is 8~27');
// }else{
// 	console.log('condition is more than 27')
// }

// con -= 21;

// if( con < 0 ){
// 	console.log( 'condition is '+ con);
// }else if( con>=8 && con<=27){
// 	console.log( 'condition is 8~27');
// }else{
// 	console.log('condition is more than 27')
// }

// range 변수 선언 및 숫자 값 복사
var range = 3;

// if 조건 구문( 조건 개수 : 3)
if( range < 8){
	console.log('range값은 8보다 작은 수입니다.');
} else if( range >= 8 && range<=27 ){
	console.log('range값은 8이상, 27 이하의 수입니다.');
} else{
	console.log('range값은 27보다 큰 수입니다.')
}

// ---------------------------------------------------
// 대입(할당) 연산자
// = 오른편에 있는 값을 왼편의 변수에 대입(할당)하다 [값 복사|참조]

// ---------------------------------------------------
// 비교 연산자
// Compare Operator

// >보다 크다
// <보다 작다
// >= 보다 크거나 같다
// <= 보다 작거나 같다
// == 값이 같다( 자동으로 형 변환 발생! 안티 패턴 )
// === 값이 같다( 자동으로 형 변환이 발생 X! 굿 패턴 ) 엄격!!
// != 값이 다르다( 자동으로 형 변환 발생! 안티 패턴 )
// !== 값이 다르다( 자동으로 형 변환 발생 X! 굿 패턴 ) 엄격!!

console.log('%c---------------------------', 'color: #3d9a21');

var drink; // undefined

// if(!drink){ drink = 'default drink'; }
drink = drink || 'default drink';
console.log('drink:', drink);

// if(drink) { drink = 'another drink' ;}
drink = drink && 'another drink';
console.log('drink:', drink);


console.log('%c---------------------------', 'color: #3d9a21');

var im_hungry = false;

im_hungry ? console.log('난 배고파') : console.log('난 아직 배고프지 않아');


// 위 결과와 아래 결과는 동일하다.
im_hungry ? 
console.log('난 배고파') : 
console.log('난 아직 배고프지 않아');

// if(im_hungry){
// 	console.log('난 배고파')
// } else {
// 	console.log('난 아직 배고프지 않아')
// }

// 다항 조건문
// 검사, 마법사, 궁수, 엘프, 사냥꾼, 두르이드
var charactor = '검사';

// 사냥꾼이 아니라면 검사를 비교 검사가 아니라면 궁수를 궁수가 아니라면 엘프를 엘프마저 아니라면 마법사가 된다.
charactor === '사냥꾼'?
  console.log('선택된 캐릭터는 사냥꾼입니다.') :
  charactor === '검사'?
    console.log('선택된 캐릭터는 검사입니다.') :
    charactor === '궁수'?
      console.log('선택된 캐릭터는 궁수입니다.') :
        charactor === '엘프'?
          console.log('선택된 캐릭터는 엘프입니다.') :
          console.log('너는 마법사이구나!');












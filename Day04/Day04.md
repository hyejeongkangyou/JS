## DAY 04 - JJ CAMP

#### 데이터 타입 체크

##### `typeof`의 치명적 설계 오류  

  * null, [](Array)를 올바르게 인식하지 못한다.
  * null, [] 모두 object로 인식한다.

  * 만약 체크하고자 하는 데이터 유형이 2개 이상이라면 괄호()를 사용하여 데이터를 묶어서 체크한다.
	  ```js
	    console.log( typeof num + str );    // 'number'
	    console.log( typeof (num + str) );  // 'string'
	  ```
-

##### `instanceof` 키워드 사용에 주의가 필요한 부분!  

  * 원시데이터 유형(9, '문자', false)은 올바르게 체크할 수 없다.
  * 원시데이터의 리터럴 값은 원시데이터 유형의 값이기 때문에 실질적인 객체가 아니다.
    (자바스크립트 엔진이 원시 데이터유형의 값을 마치 객체인 것처럼 사용할 수 있게 제공하는 것이다(null, undefined 제외))
  * Object는 모든 객체의 조상이기 때문에 Array를 instanceof로 타입 체크를 했을 때 Object와 같은 타입이라고 나오게 된다.

	  ```js
	    console.log(Array instanceof Object); //true
	  ```

  * 원시데이터를 올바르게 체크하기 위해서는 아래와 같이 변수에 생성자 함수로 값을 넣어야 가능하다.

	```js
		var num = 10;
		var str = "JavaScript"
		var boo = false

		console.log('num instanceof Number:', num instanceof Number) // false
		console.log('str instanceof String:', str instanceof String) // false
		console.log('boo instanceof Boolean:', boo instanceof Boolean) // false

		// 생성자 함수로 변수 값을 설정
		var new_num = new Number(10);
		console.log('new_num instanceof Number:', new_num instanceof Number) // true

	```

  * null 유형은 instanceof 키워드를 사용하여 데이터 체크가 불가능
  * 이유는 instanceof 키워드는 객체만 판별이 가능!!!
  * 객체가 아닌 것들(null, undefined)에는 사용할 수 없다.  

-

##### `.constructor` 속성(Property)  

  * 자바스크립트에 존재하는 `실체화된 모든 객체`는 기본적으로 가지고 있는 속성이다. 
  * `.constructor`는 완벽하게 값을 반환한다.
  * `null, undefined`는 객체가 아니므로 데이터 유형을 체크할 수 없는 약점이 있다.
  * `typeof, instanceof`는 키워드 | `.constructor`는 속성

-

##### 데이터 타입 헬퍼 함수 isDataType()

	```js

		var txt = "This is String"
		// 모든 객체의 조상이자, 객체 생성자 함수
		// 생성자 함수의 특징은 함수 이름의 첫 글자는 대문자.
		// 생성자 함수는 .prototype 속성을 가짐.
		console.dir(Object.prototype); // {}

		// Object.prototype 원형 객체의 능력 중에는 .toString() 함수가 있다.
		console.log(typeof Object.prototype.toString); // function
		
		// toString()은 함수로써 .call이란 능력을 사용할 수 있다.
		// Object.prototype.toString 함수는 누군가 빌려쓸 수 있다.(자바스크립트의 데이터 유형들이 빌려 쓴다.)
		// 
		// Object.prototype.toString.call({data})
		// [Object {Date}]

		Object.prototype.toString.call(txt);
		// 위 코드의 수행 결과 아래와 같은 문자열이 반환된다.
		// [object String]

		// 우리는 위 문자열에서 해당 데이터 이름을 가진 것을 잘라내야(slice) 한다.

		// Object.prototype.toString.call({data}).slice(8, -1);
		// 결과값 : String

		// 위 문자열을 소문자로 변환하자
		// Object.prototype.toString.call({data}).slice(8, -1).toLowerCase();
		// 결과값 : string


		// 데이터 유형 체크 헬퍼 함수 isDataType();
		function isDataType(d) {
		  return Object.prototype.toString.call(d).slice(8, -1).toLowerCase();
		}

	```
* 여기서 Object.prototype.toString()을 call 속성으로 불러오는 이유(번역이 정확하지 않을 수 있음)

 * `toString`함수는 `[object [[class(속성)]]]`의 포맷으로 값을 반환하게 된다.
 * 그러나 불행히도, 특별한 내장 객체의 경우 Object.prototype.toString과 toString메소드의 기능을 중첩시키게 된다.
	  ```js
		[1,2,3].toString(); // 값: "1, 2, 3"
	  ```
 * 그래서 우리는 `call function`을 사용하여 `원래의 toString함수 포맷`으로 사용할 수 있게 한다.
	  ```js
		Object.prototype.toString.call([1,2,3]); //"[object Array]"
	  ```

-

## 참고

[Object.prototype.toString.call()에 대한 설명](https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/)

-

##### `console {}`
  * log()   -> 기록하다
  * info()  -> 정보를 표시하다
  * error() -> 오류를 출력하다
  * dir()   -> 분석하다

-

##### if문

> if(조건){실행문}

	```js
	var condition = true;

	if(condition === true){
		console.log('Condition is TRUE');
	}else{
		console.log('Condition is FALSE');
	}
	```

* 조건이 많을 경우 else if문을 함께 사용한다.
	```js
	var con = 18;

	if( con < 8 ){
		console.log( 'condition is '+ con);
	}else if( con>=8 && con<=27){
		console.log( 'condition is 8~27');
	}else{
		console.log('condition is more than 27')
	}
	```
* 조건이 많은 경우에 if문은 좋은 선택지가 아니다.


* if의 괄호밖으로 비교연산자가 나오게 되면 조건문이 된다.

	```js
	var drink; // undefined

	// if(!drink){ drink = 'default drink'; }와 아래의 조건문은 같다.
	// drink가 참이라면 그래도 값이 그대로 유지되고, 참이 아니라면 'default drink' 값을 넣게 된다.
	drink = drink || 'default drink';
	console.log('drink:', drink); // default drink

	// if(drink) { drink = 'another drink' ;}와 아래의 조건문은 같다.
	// drink가 참이라면 drink에 'another drink' 값을 넣게 된다.
	drink = drink && 'another drink';
	console.log('drink:', drink); // another drink
	```

	```js
		var im_hungry = false;
		
		// im_hungry가 true라면 console.log('난 배고파') 실행, false라면 console.log('난 아직 배고프지 않아') 실행

		im_hungry ? console.log('난 배고파') : console.log('난 아직 배고프지 않아');
	```

* 다항 조건문  

	```js
		// 빨강, 검정, 노랑, 초록, 파랑
		var charactor = '노랑';

		// 빨강이 아니라면 노랑을 비교. 노랑이 아니라면 초록을, 초록이 아니라면 파랑을, 파랑마저 아니라면 검정이 된다.
		charactor === '빨강'?
		  console.log('선택된 캐릭터는 빨강입니다.') :
		  charactor === '노랑'?
		    console.log('선택된 캐릭터는 노랑입니다.') :
		    charactor === '초록'?
		      console.log('선택된 캐릭터는 초록입니다.') :
		        charactor === '파랑'?
		          console.log('선택된 캐릭터는 파랑입니다.') :
		          console.log('너는 검정이구나!');
	```

-

###### 연산자

* 대입(할당) 연산자 
* `=` 오른편에 있는 값을 왼편의 변수에 대입(할당)하다 [값 복사|참조]
`
* 비교 연산자(Compare Operator)
	* `>`보다 크다
	* `<`보다 작다
	* `>=` 보다 크거나 같다
	* `<=` 보다 작거나 같다
	* `==` 값이 같다( 자동으로 형 변환 발생! 안티 패턴 )
	* `===` 값이 같다( 자동으로 형 변환이 발생 X! 굿 패턴 ) 엄격!!
	* `!=` 값이 다르다( 자동으로 형 변환 발생! 안티 패턴 )
	* `!==` 값이 다르다( 자동으로 형 변환 발생 X! 굿 패턴 ) 엄격!!

* `if 구문`에서 `대입연산자(=)`를 사용하게 되면, 조건이 무조건 `참`이된다. 반드시 비교연산자를 사용해야 한다.

* `==` 과 `===`의 차이
	```js
		var a = 0;
		var b = '';

		// 빈문자열과 0을 모두 자동으로 형변환 시키기 떄문에 true가 나오게 된다.
		a == b // true

		// 엄격 패턴이기 때문에 자동으로 형변환이 일어나지 않는다.
		a === b // false
	```

-

##### 객체 체크 헬퍼 함수 `checkDomElement()`  

	```js
	function checkDomElement(element){
		if( isDataType(element) === 'null'){
			console.info('현재 문서에 선택하고자 하는 문서 요소 객체는 존재하지 않습니다.');
		}else{
			console.log('<'+ element.nodeName.toLowerCase() + '>는 문서 요소객체입니다.');
		}
	}
	```
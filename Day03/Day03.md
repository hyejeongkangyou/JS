## DAY 03 - JJ CAMP


#### `JavaScript`는 `암묵적`으로 데이터 유형이 변할 수 있기 때문에 체크가 필요하다.(`자바스크립트의 약점`)

문제점

1. 실수 vs 정수
	* IE는 `parseFloat()`를 제대로 처리하지 못한다.
	* 정수로 처리하면(`parseInt()`) 모든 브라우저가 동일하게 표현된다.

2. typeof

	![typeof 오류](screenshot/JJcamp03(typeof).png)

	* `typeof`으로 타입을 체크했을 때 오류가 있다.
	* `null`의 경우 `null`이 객체가 아님에도 불구하고 `object`로 나오게 된다.
	* `array`의 경우도 `object`로 표현한다.
	* `NaN`은 숫자가 아니라는 뜻이나, `typeof(NaN)`의 경우 결과값으로 `number`가 나오게 된다.
	* `instanceof`로 타입을 체크하게 된다.

-

###### 올바른 데이터 유형 체크  

```js
	var playlist = new Array();

	console.log('typeof playlist:', typeof playlist); // object
	console.log( playlist instanceof Array ); // true

```

3. Number()
* Number(null)의 결과값이 `0`이 된다.
* Number(undefined)의 결과값은 `NaN`이다.

* null + 숫자 -> 숫자값
* null + 문자 -> null+문자값

-

###### 생성자 함수
* 생성을 할 수 있는 특별한 힘을 부여받은 함수들은 첫글자가 대문자로 시작한다.
e.g)Boolean(), Number(), String()...

-

###### isNaN  

> isNaN(): 숫자 아니죠?
> true: 그래, 숫자가 아니다.
> false: 아니, 숫자 맞다.


* 함수로 만들어 보자
```js
function isNumber(value){
	return !isNumber(value);
}
```
-

#### 참조형 데이터  

* 변수에 값을 할당할 경우 복사가 아닌, 값 참조가 수행된다.
* 참조가 되는 데이터 유형은 객체이다.
	* 일반적인 객체(Plain Object)
	* 배열 객체(Array Object)
	* 함수 객체(Function Object)  

-

#### 함수 객체  

* 이름이 있는 함수(기명 함수) vs 이름이 없는 함수(무명, 익명 함수)
* function을 변수에 담지 않거나 또는 이름을 설정하지 않으면 에러가 발생하게 된다.
![function 에러](screenshot/JJcamp03(function 에러).png)
* 함수 선언식 vs 함수 표현식

1. 함수 표현식
```js
var myFn = function(){}
```

2. 함수 선언식
```js
function myFn{}
```

* 함수 표현식을 권장한다. 
* 사용성, 접근성, 성능을 고려해야 한다.
* 표현식으로 사용함으로써 함수를 묶어서 사용할 수 있고, 선언식보다 사용하는데 있어 주의를 할 수 있기 때문에 함수는 상단부분에 묶어 표현식으로 사용하는 것이 권장된다.
* 같은 코드를 여러번 쓰는 것보다 만들어진 함수를 재사용하는 것이 좋다.


#### 객체의 프로퍼티  

* 객체의 프로퍼티에는 `null`과 `function()`만 참조 가능하다.

* 객체의 프로퍼티에 함수 참조
```js
객체.onclick = null; // 초기, 기본값
객체.onclick = function(){};
```
* `onclick`은 내장되어 있는 이벤트속성이다.

-

#### 변수 vs 함수, 속성 vs 메소드

* 변수
```js
var eyes = '눈';
var ears = '귀';
```

* 함수
```js
var crying = function() {
 console.log('울다');
};
```

* 객체
```js
var person = {};
// 변수와 함수를 객체가 소유하게 되면
// 변수는 객체의 `속성`이라고 불리게 된다.
// 함수는 객체의 속성임과 동시에 특별히 `메소드`라고 부른다.
person.eyes = eyes;     // 속성
person.crying = crying; // 메소드

// console.dir(person);
```

* console.dir() : 로그 출력시에 객체 정보를 트리형태로 출력해주는 기능!

-

#### 배열  

* 배열 객체는 여러개의 데이터를 기억할 수 있는 공간을 제공한다.
* 배열은 여러개의 데이터를 하나의 변수에 넣을 수 있기 때문에 매우 유용하다.
* 배열은 객체이기 때문에 참조가 된다.
* 생성된 배열 객체를 기억하기 위해 변수에 할당한다.

* 배열 사용하지 않는 경우  

	* 배열을 사용하지 않았을 때 연관된 복수의 데이터 관리는 각 변수마다 하나의 값을 넣어주게 되어 관리가 어렵다.
```js
	var navigation_item_01 = 'Home';
	var navigation_item_02 = 'About';
	var navigation_item_03 = 'Works';
	var navigation_item_04 = 'Projects';
	var navigation_item_05 = 'Contact';
```

* 배열 사용  

	* 배열을 사용할 때에는 연관된 복수의 데이터 관리가 쉽고 효율적이다.
	* 순서로 데이터를 더하는 방식은 순서를 정확히 알아야 하기 때문에 만일 `[7]번째` 없이 `[8]번째`의 변수값을 넣어주게 되면 7번째 자리에 undefined가 오게 되고 문제가 수반되게 되므로 권장하는 방법이 아님.
	![순서로 데이터를 더하는 방식 문제점](screenshot/JJcamp03(Array).png)
	* 배열 객체의 메소드 `.push()` 사용하길 권장! (순서와 상관없이 데이터를 입력할 수 있다.)
```js
	var navigation_items = new Array('Home', 'About', 'Works', 'Products', 'Contact');

	// 순서로 데이터를 더하는 방식
	navigation_items[5] = 'board';
	navigation_items[6] = 'favorite';
	navigation_items[8] = 'items';

	// .push() 방식
	navigation_items.push('board');
	navigation_items.push('favorite');
```

* 배열 생성시에 리터럴을 사용하는 것이 간단명료함. 생성자를 사용했을 때는 문제점이 있다.
* literal : 상수, 즉 그 값 자체( 한 번 정의되면 변경 불가능)  

```js
	new Array(10) // 결과값: [undefined x 10]
```
* 연관배열을 사용한 경우에는 문자열 값이 `.length`값으로 정의되지 않는다.
* 유사배열(Array like Object) =  노드리스트(Nodelist)
```js
	var drinks = [];

	drinks.push('milk');
	drinks.push('juice');
	drinks.push('soju');

	console.log( drinks.length ); // 3

	drinks['clear'] = '음료를 비우다';

	console.dir(drinks);
```
* `pop()`은 배열의 고유속성이다. `pop()`속성을 가지고 있지 않은 객체는 배열이 아니다.

-

#### 객체 속성에 접근하는 방법

* 점 기호를 통한 접근

	> console.log( drinks.clear );

* 각괄호를 사용한 접근

	* 어떤 값이 올지 모르는 변수를 써야 할 때 점(.)기호 대신에 각괄호를 사용한다. 
	* (각괄호 내부에 문자열을 넣어줘야 함)
	* 일반적으로 자주 사용되지는 않지만, 반복문(Loop) 내부에서 특정 변수 값을 순환할 때 종종 사용된다.

	> console.log( drinks['clear'] );

-

#### CSS 문법과 유사해 보이는 객체 리터럴 표현식  

```js
	var css_props = {
	  'font-size': '24px',
	  'color': '#34129f',
	  'border-top-color': 'currentColor'
	};
```

* `font-size`와 같이 `-`가 들어간 경우 `홑따옴표`나 `쌍따옴표`를 꼭 써야하며, 나머지의 경우 안 써도 되지만, 엄격모드에서는 반드시 써야 한다. 그러므로 모든 경우에 `홑따옴표 혹은 쌍따옴표`를 쓰는 것을 권장. 
* 객체이기 때문에 콤마로 구분한다.

-

#### `delete`  
* delete 키워드를 사용하면 `객체의 속성을 제거`할 수 있다.
* 단, `전역(Global Scope) 변수`는 지울 수 없다.
* 그러므로 전역변수를 사용하는 것은 좋은 습관이 아니다!

```js
delete css_props.color; // color 속성이 제거된다.
delete css_props; // css_props는 제거되지 않는다. css_props는 전역 변수.
```

-

### 참고

[자바스크립트 1급 객체](http://bestalign.github.io/2015/10/18/first-class-object/)
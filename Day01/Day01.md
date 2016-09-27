## Day01 - JJ CAMP  

#### 자바스크립트 기본 문법  

###### 상수와 변수
* 상수 : 변하지 않는 수(숫자, 문자열 등)
* 변수 : 다른 값에 따라 변하는 수
* 변수는 단 하나의 값만 저장할 수 있기 때문에 이전에 저장된 내용은 사라지게 된다.(이전에 상위에서 선언했던 값은 삭제되고 새로운 값이 저장되게 된다)
* 변수명은 명시적으로 설정한다.  

###### 상수 선언(const)
* 상수를 선언할 때에는 var 대신 const를 사용하여 선언한다.
* var를 사용하여 선언하게 될 경우 그 상수에 다른 값을 넣어 선언하게 되면 그 값이 바뀌게 된다.
* const의 경우 다른 값을 넣어 선언하게 될 경우 아래의 예와 같이 오류가 발생하게 된다.

```js
  const var MS = 'microsoft'

  MS = 'apple'; // 오류 발생. 런타임 중에 상수값을 바꿀 수 없다.
```


###### 문자열 변경
  * 문자열을 덧붙일 수는 있으나 변경은 불가능하다.  

![문자열 변경 불가능](screenshot/JJcamp01(문자열 변경 불가능).png)


###### 자바스크립트 삽입 위치
* 브라우저는 HTML의 구조와 CSS스타일을 렌더링하는 도중 자바스크립트를 만나게 되면 이에 대한 해석과 구현이 완료될 때까지 브라우저 렌더링을 멈추게 된다.  
* 즉, 자바스크립트의 삽입 위치에 따라 스크립트 실행순서와 브라우저 렌더링에 영향을 미치게 된다법

* `</head>`에 삽입되는 경우  

  * 브라우저 렌더링에 방해가 되어 무거운 스크립트가 실행되는 경우 오랫동안 완성되지 못한 화면을 노출하게 된다.(사용자들은 js파일을 보기전에는 웹페이지의 어떠한 구조나 이미지도 볼 수 없게 된다)
  * `<head>`에서 meta, title, link, style 요소들보다 위에 오게 되면 사용자들은 어떠한 이미지나 구조를 보지 못하게 된다.
  * 문서를 초기화하거나 설정하는 가벼운 스크립트들이 자주 사용된다.
  * 문서의 DOM(Document Object Model)구조가 필요한 스크립트의 경우 document.onload와 같은 로드 이벤트가 추가되어야 에러없이 작동된다.


* `</body>` 위에 삽입되는 경우(put script to bottom!)  

  * 브라우저가 렌더링이 완료된 상태에서 스크립트가 실행되기 때문에 콘텐츠를 변경하는 스크립트의 경우 화면에 노출되어 변환된다.
  (`<head>,<body>`의 내용을 전부다 불러온 후에 스크립트 파일을 로드하기 시작한다)
  * 대부분의 스크립트의 위치로 추천되는 위치
  * 문서의 DOM 구조가 완료된 시점에 실행되기에 별다른 추가설정이 필요없다.

###### 자바스크립트 위치
  * html색이 없을 때에는 body색이 HTML전체에 적용되게 된다.

###### 변수 복사 VS 참조  
  * 변수 복사
    * 원시 데이터 유형인 숫자(Number), 문자(String), 불리언(Boolean)의 경우 데이터 복사가 가능  

  * 변수 참조
    * 복합 데이터 유형인 배열(Array), 함수(Function), 객체(Object)의 경우 데이터 복사가 가능하지 않고, 참고만 가능
    * 변수의 값을 참조할 경우, 다른 한 쪽의 값이 변화했을 때 나머지 참조하고 있는 변수들의 값도 변하게 된다.

###### 참고할 점
  * `<head>`에서는 스크립트 순서대로 실행이 된다.
  * 반면 `<body>`에서는 `<script>`요소가 어떤 요소 아래에 있더라도 스크립트가 먼저 실행되고 난 후 실행된다.

```html
<!DOCTYPE html>
<html lang="ko-KR">
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta charset="UTF-8">
  <script>
    alert('title 위에서 실행');
  </script>
  <title>자바스크립트 호출 실행 흐름</title>
  <style>
    html{
      background: #003652
    }
    body{  background: #fe4940; color: #fff;}
  </style>
  <script>
    alert('style 아래에서 실행');
  </script>
</head>
<body>
  <script>
    alert('body 시작지점에서 실행');
  </script>
  <h1>javaScript 실행 흐름</h1>
  <script>
    alert('h1 뒤에서 실행')
  </script>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius magnam omnis voluptatem laudantium quis, inventore soluta veritatis, culpa consequuntur minus aperiam tempore earum repellat est accusantium rerum rem itaque eligendi!</p>
  <script>
    alert('body 끝에서 실행')
  </script>
</body>
</html>
  ```

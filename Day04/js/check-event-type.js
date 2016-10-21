    // 참조할 객체를 담을  변수 선언
  	var page, article, brand, slogan, mouseEventHandler
  	// 문서 요소객체를 선태갛여 각 변수에 참조
  	page 		= document.querySelector('#page');
  	article 	= document.querySelector('.article');
  	brand 		= document.querySelector('.brand');
  	slogan 		= document.querySelector('.slogan');

   // console.log(page, article, brand, slogan);

   //참조된 문서 요서객체에 각각 이벤트 연결(Binding)
   page.onclick = function(){ console.log('page'); }
   article.onclick = function(){ console.log('article'); }
   brand.onclick = function(){ console.log('brand'); }
   slogan.onclick = function(){ console.log('slogan'); }

   mouseEventHandler = function(event){
   	// Event Object {}
   	if(event.type === 'click'){
   		console.log('clicked DOM Element Node');
   	}else if(event.type === "mouseover"){
   		console.log('mouse overed DOM Element Node');
   	}else if(event.type === "mouseout"){
   		console.log('mouse outed DOM Element Node');
   	}else{
   		consoel.log('mouse click, over, out : X');
   	}
   };

   // 참조된 문서 요소 객체에 각각 이벤트 연결(Binding)
   page.onclick = mouseEventHandler;
   page.onmouseover = mouseEventHandler;
   page.onmouseout = mouseEventHandler;
var page, article, brand, slogan;

page    = document.querySelector('#page');
article = document.querySelector('.article');
brand   = document.querySelector('.brand');
slogan  = document.querySelector('.slogan');

console.log('%c---------------------------', 'color: #3d9a21');

// if( isDataType(page) === 'null' )    { console.log('page는 null입니다.');    }
// if( isDataType(article) === 'null' ) { console.log('article는 null입니다.'); }
// if( isDataType(brand) === 'null' )   { console.log('brand는 null입니다.');   }
// if( isDataType(slogan) === 'null' )  { console.log('slogan는 null입니다.');  }

checkDomElement(page);
checkDomElement(article);
checkDomElement(brand);
checkDomElement(slogan);
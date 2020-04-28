//On récupère la largeur et la hauteur de la fenêtre de l'utilisateur
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
//On récupère des éléments que l'on stocke dans des variables
let container = document.querySelectorAll('.container');
let darkContainer = document.querySelector('#darkContainer');
let nav = document.querySelector('#navMenu');
let listElem = document.querySelectorAll('.hiddenNavElem');
var listCircleElem = document.querySelectorAll('.navCircle');
let arrow = document.querySelector('#logo');

//On change la propriété height de notre darkContainer
darkContainer.style.height = windowHeight + 'px';
nav.style.top = windowHeight/3 + 'px';
nav.style.left = 4/5*windowWidth  + 'px';
//On fait une boucle for pour changer le height de tous les éléments ayant la class container
for (let i = 0; i < container.length; i++) {
    container[i].style.height = windowHeight + 'px';
}
//On fait une boucle for qui parcour tous les éléments de notre tableau listCircleElem
for (let i = 0; i < listCircleElem.length; i++) {
  //On lance une fonction au mouseover qui change la propriété css visibility du jumeau précédent de l'élément séléctionné
  listCircleElem[i].addEventListener('mouseover',function () {
     this.previousSibling.style = 'visibility: visible';
  });
}
//On fait une boucle for qui parcour tous les éléments de notre tableau listCircleElem
for (let i = 0; i < listCircleElem.length; i++) {
    //On lance une fonction au mouseout qui change la propriété css visibility du jumeau précédent
  listCircleElem[i].addEventListener('mouseout',function () {
    let selectedElem = this;
     setTimeout(function () {
       selectedElem.previousSibling.style = 'visibility: hidden';
     }, 2000);
    });
  }
let html = document.querySelector('#htmlLvl');
let css = document.querySelector('#cssLvl');
let js = document.querySelector('#javascriptLvl');
let php = document.querySelector('#phpLvl');
let mysql = document.querySelector('#mysqlLvl');
let bootstrap = document.querySelector('#bootstrapLvl');
let wordpress = document.querySelector('#wordpressLvl');
let jquery = document.querySelector('#jqueryLvl');
let yHtml = html.offsetTop;
let yCss = css.offsetTop;
let yJs = js.offsetTop;
let yPhp = php.offsetTop;
let yMysql = mysql.offsetTop;
let yBootstrap = bootstrap.offsetTop;
let yWordpress = wordpress.offsetTop;
let yJquery = jquery.offsetTop;
let progressHtml = 0;
let progressCss = 0;
let progressJs = 0;
let progressPhp = 0;
let progressMysql = 0;
let progressBootstrap = 0;
let progressWordpress = 0;
let progressJquery = 0;
let htmlDone = false;
let cssDone = false;
let jsDone = false;
let phpDone = false;
let mysqlDone = false;
let bootstrapDone = false;
let wordpressDone = false;
let jqueryDone = false;
//animation Html
let animateHtml = function () {
  if(progressHtml < 80){
    progressHtml += 0.6;
    html.style.width = progressHtml + '%';
    requestAnimationFrame(animateHtml);
  }
   htmlDone = true;
}
//animation css
let animateCss = function () {
  if(progressCss < 60){
    progressCss += 0.6;
    css.style.width = progressCss + '%';
    requestAnimationFrame(animateCss);
  }
   cssDone = true;
}
//animation js
let animateJs = function () {
  if(progressJs < 60){
    progressJs += 0.6;
    js.style.width = progressJs + '%';
    requestAnimationFrame(animateJs);
  }
   jsDone = true;
}
//animation php
let animatePhp = function () {
  if(progressPhp < 60){
    progressPhp += 0.6;
    php.style.width = progressPhp + '%';
    requestAnimationFrame(animatePhp);
  }
   phpDone = true;
}
//animation mysql
let animateMysql = function () {
  if(progressMysql < 40){
    progressMysql += 0.6;
    mysql.style.width = progressMysql + '%';
    requestAnimationFrame(animateMysql);
  }
   mysqlDone = true;
}
//animation bootstrap
let animateBootstrap = function () {
  if(progressBootstrap < 50){
    progressBootstrap += 0.6;
    bootstrap.style.width = progressBootstrap + '%';
    requestAnimationFrame(animateBootstrap);
  }
   bootstrapDone = true;
}
//animation wordpress
let animateWordpress = function () {
  if(progressWordpress < 50){
    progressWordpress += 0.6;
    wordpress.style.width = progressWordpress + '%';
    requestAnimationFrame(animateWordpress);
  }
   wordpressDone = true;
}
//animation jquery
let animateJquery = function () {
  if(progressJquery < 45){
    jquery.style.width = progressJquery + '%';
    progressJquery += 0.6;
    requestAnimationFrame(animateJquery);
  }
  jqueryDone = true;
}

document.querySelector('#firstArrow').addEventListener('click', function(){
  window.scrollTo({
    top: 1,
    left: 0,
    behavior: 'smooth'
  });
});
let myDesc = document.querySelector('#myDescContainer');
let lastScroll = 0;
window.addEventListener('scroll', function () {
  let y = this.scrollY;
  if( y + windowHeight > yHtml && htmlDone == false){
    window.requestAnimationFrame(animateHtml);
  }
  if( y + windowHeight > yCss && cssDone == false){
    window.requestAnimationFrame(animateCss);
  }
  if( y + windowHeight > yJs && jsDone == false){
    window.requestAnimationFrame(animateJs);
  }
  if( y + windowHeight > yPhp && phpDone == false){
    window.requestAnimationFrame(animatePhp);
  }
  if( y + windowHeight > yMysql && mysqlDone == false){
    window.requestAnimationFrame(animateMysql);
  }
  if( y + windowHeight > yBootstrap && bootstrapDone == false){
    window.requestAnimationFrame(animateBootstrap);
  }
  if( y + windowHeight > yWordpress && wordpressDone == false){
    window.requestAnimationFrame(animateWordpress);
  }
  if( y + windowHeight > yJquery && jqueryDone == false){
    window.requestAnimationFrame(animateJquery);
  }

  if(lastScroll < y){
    //scroll bottom
    if( y < windowHeight){
      this.scrollTo({
        top: windowHeight,
        left: 0,
        behavior: 'smooth'
      });
      myDesc.style.opacity = 1;
    }else if(y > windowHeight && y < 2*windowHeight){
      this.scrollTo({
        top: 2*windowHeight,
        left: 0,
        behavior: 'smooth'
      });
      myDesc.style.opacity = 0;
    }
  }else{
    //scroll top
    if(y < windowHeight){
      this.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      myDesc.style.opacity = 0;

    }else if(y < 2*windowHeight){
      this.scrollTo({
        top: windowHeight,
        left: 0,
        behavior: 'smooth'
      });
      myDesc.style.opacity = 1;
    }
  }
 lastScroll = this.scrollY;
});

let next = document.querySelector('#next');
let prev = document.querySelector('#prev');
let buttonCarouClick = 0;
let nbCarouselElem = 4;
next.addEventListener('click', function () {
  if(buttonCarouClick === nbCarouselElem - 1){
    document.querySelector('#projectContainer').style.transform = 'translate3d(0%, 0, 0)';
    buttonCarouClick = 0;
  }else {
    buttonCarouClick += 1;
    document.querySelector('#projectContainer').style.transform = 'translate3d(-' + (100/nbCarouselElem) * buttonCarouClick  + '%, 0, 0)';
  }
});
prev.addEventListener('click', function () {
  if(buttonCarouClick === 0){
    document.querySelector('#projectContainer').style.transform = 'translate3d(' + 100-(100/nbCarouselElem) + '%, 0, 0)';
    buttonCarouClick = nbCarouselElem;
  }else {
    buttonCarouClick -= 1;
    document.querySelector('#projectContainer').style.transform = 'translate3d(-' + (100/nbCarouselElem) * buttonCarouClick  + '%, 0, 0)';
  }
});

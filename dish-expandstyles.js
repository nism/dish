//(function(){
  if (document.body.innerHTML.includes('[NOSIDEBAR]')) {
    sidebarElement = document.getElementsByClassName("l-side");
    mainContainerElement = document.getElementsByClassName("l-main");

    sidebarElement[0].classList.add("l-nosidebar");
    mainContainerElement[0].classList.add("l-main-nosidebar");

    $("div:contains('[NOSIDEBAR]')").last()[0].innerHTML = $("div:contains('[NOSIDEBAR]')").last()[0].innerHTML.replace('[NOSIDEBAR]','');
    
    //document.body.innerHTML = document.body.innerHTML.replace('[NOSIDEBAR]', '');
  }

  if (document.body.innerHTML.includes('[CANADATOPIMAGE]')) {
    $("div:contains('[CANADATOPIMAGE]')").last()[0].innerHTML = $("div:contains('[CANADATOPIMAGE]')").last()[0].innerHTML.replace('[CANADATOPIMAGE]','<div class="canada-topimage">');
    $("div:contains('[/CANADATOPIMAGE]')").last()[0].innerHTML = $("div:contains('[/CANADATOPIMAGE]')").last()[0].innerHTML.replace('[/CANADATOPIMAGE]','</div>');

    //document.body.innerHTML = document.body.innerHTML.replace('[CANADATOPIMAGE]', '<div class="canada-topimage">');
    //document.body.innerHTML = document.body.innerHTML.replace('[/CANADATOPIMAGE]', '</div>');
  }

  if (document.body.innerHTML.includes('[CANADAMIDIMAGE]')) {
    $("div:contains('[CANADAMIDIMAGE]')").last()[0].innerHTML = $("div:contains('[CANADAMIDIMAGE]')").last()[0].innerHTML.replace('[CANADAMIDIMAGE]','<div class="canada-midimage">');
    $("div:contains('[/CANADAMIDIMAGE]')").last()[0].innerHTML = $("div:contains('[/CANADAMIDIMAGE]')").last()[0].innerHTML.replace('[/CANADAMIDIMAGE]','</div>');

    //document.body.innerHTML = document.body.innerHTML.replace('[CANADAMIDIMAGE]', '<div class="canada-midimage">');
    //document.body.innerHTML = document.body.innerHTML.replace('[/CANADAMIDIMAGE]', '</div>');
  }

  if (document.body.innerHTML.includes('[CANADABOTIMAGE]')) {
    $("div:contains('[CANADABOTIMAGE]')").last()[0].innerHTML = $("div:contains('[CANADABOTIMAGE]')").last()[0].innerHTML.replace('[CANADABOTIMAGE]','<div class="canada-botimage">');
    $("div:contains('[/CANADABOTIMAGE]')").last()[0].innerHTML = $("div:contains('[/CANADABOTIMAGE]')").last()[0].innerHTML.replace('[/CANADABOTIMAGE]','</div>');

    //document.body.innerHTML = document.body.innerHTML.replace('[CANADABOTIMAGE]', '<div class="canada-botimage">');
    //document.body.innerHTML = document.body.innerHTML.replace('[/CANADABOTIMAGE]', '</div>');
  }

  if (document.getElementsByClassName("av-special-heading-tag")[0]) {
    document.getElementsByClassName("av-special-heading-tag")[0].parentNode.classList.add("h3div");
  }

  if (window.location.href.indexOf("2020/05/06/143201" != -1)) {
    var style = document.createElement('style');
    style.innerHTML = '.blog-body div:first-of-type {height:0;visibility:none;}';
    document.head.appendChild(style);
  }

  //return false;
//});

//document.body.innerHTML = document.body.innerHTML.replace('', '');

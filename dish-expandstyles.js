$(function(){
  if (document.body.innerHTML.includes('[NOSIDEBAR]')) {
    sidebarElement = document.getElementsByClassName("l-side");
    mainContainerElement = document.getElementsByClassName("l-main");

    sidebarElement[0].classList.add("l-nosidebar");
    mainContainerElement[0].classList.add("l-main-nosidebar");

    document.body.innerHTML = document.body.innerHTML.replace('[NOSIDEBAR]', '');
  }

  if (document.body.innerHTML.includes('[CANADATOPIMAGE]')) {
    document.body.innerHTML = document.body.innerHTML.replace('[CANADATOPIMAGE]', '<div class="canada-topimage">');
    document.body.innerHTML = document.body.innerHTML.replace('[/CANADATOPIMAGE]', '</div>');
  }

  if (document.body.innerHTML.includes('[CANADAMIDIMAGE]')) {
    document.body.innerHTML = document.body.innerHTML.replace('[CANADAMIDIMAGE]', '<div class="canada-midimage">');
    document.body.innerHTML = document.body.innerHTML.replace('[/CANADAMIDIMAGE]', '</div>');
  }

  if (document.body.innerHTML.includes('[CANADABOTIMAGE]')) {
    document.body.innerHTML = document.body.innerHTML.replace('[CANADABOTIMAGE]', '<div class="canada-botimage">');
    document.body.innerHTML = document.body.innerHTML.replace('[/CANADABOTIMAGE]', '</div>');
  }

  if (document.getElementsByClassName("av-special-heading-tag")[0]) {
    document.getElementsByClassName("av-special-heading-tag")[0].parentNode.classList.add("h3div");
  return

  if (window.location.href.indexOf("2020/05/06/143201" != -1)) {
    dish-expandstyles.insertRule('blog-body div:first-of-type {height:0;visibility:none;}', 0);
  }
});

//document.body.innerHTML = document.body.innerHTML.replace('', '');

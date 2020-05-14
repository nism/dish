if (document.body.innerHTML.includes('[NOSIDEBAR]')) {
  sidebarElement = getElementByClassName("l-side") ;
  mainContainerElement = getElementByClassName("l-main");

  sidebarElement.classList.add("l-nosidebar");
  mainContainerElement.classList.add("l-main-nosidebar");
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

//document.body.innerHTML = document.body.innerHTML.replace('', '');

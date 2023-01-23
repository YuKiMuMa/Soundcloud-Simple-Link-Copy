addFeaturesAttempt();

function addFeaturesAttempt(){
  if(!addButtons()) setTimeout(addFeaturesAttempt, 500); // retry after 500 millisecconds
}

function addButtons(){
  const nav = document.querySelector(".sc-button-group.sc-button-group-medium");
  const nav2 = document.querySelector(".sc-button-copylink.sc-button-secondary.sc-button.sc-button-medium.sc-button-responsive.simplelink");
  //console.log(nav);
  //console.log(nav2);
  if(!nav || nav2) return false; 
  let b;

  b = createSideBarButton();
  b.onclick = fortuneButtonClicked;
  nav.appendChild(b);

  return true;
}


function createSideBarButton(){
  const original = document.querySelectorAll(".sc-button-copylink");
  const original2 = document.querySelector(".sc-button-copylink");
  const b = original2.cloneNode(true);

  b.removeAttribute("class");

  b.className="sc-button-copylink sc-button-secondary sc-button sc-button-medium sc-button-responsive simplelink"
  b.textContent="Simple Link"


  return b;
}

function fortuneButtonClicked(){
  const link=document.querySelector(".sc-ministats.sc-ministats-medium.sc-ministats-likes.sc-link-secondary")
  console.log(link.href.slice( 0, -5))
  copyToClipboard(link.href.slice( 0, -5))
}

function copyToClipboard (tagValue) {
  if (navigator.clipboard) { // navigator.clipboardが使えるか判定する
    return navigator.clipboard.writeText(tagValue).then(function () { // クリップボードへ書きむ
    })
  } else {
    alert("fail")
  }
}
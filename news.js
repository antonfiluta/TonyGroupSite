//плавное открытие скрытого текста в новостях
let newsTextBlock = document.getElementsByClassName("hide-block");
let testLength = document.getElementsByClassName("hide-text-test-box");
let newsButtons = document.getElementsByClassName("hide-block-button");

function showNews(n) {
    let lenght = testLength[n].offsetHeight;
    if (window.innerWidth < 700) {
      if (newsTextBlock[n].style.height == (lenght + "px")) {
        newsTextBlock[n].style.height = "6.2vw";
        newsButtons[n].innerHTML = "Читать дальше..."
      } else {
        newsButtons[n].innerHTML = "Скрыть текст"
        newsTextBlock[n].style.height = lenght + "px";
      }   
    } else {
     if (newsTextBlock[n].style.height == (lenght + "px")) {
        newsTextBlock[n].style.height = "3.4vw";
        newsButtons[n].innerHTML = "Читать дальше..."
     } else {
        newsButtons[n].innerHTML = "Скрыть текст"
        newsTextBlock[n].style.height = lenght + "px";
     }   
    } 
}



let imageBoxes = document.getElementsByClassName("showImageBox");
let mainImage = document.getElementsByClassName("main-news-img");
let imageBar = document.getElementsByClassName("image-bar");
let mainB = document.getElementById("mainBlock");
let footer = document.getElementById("footerBlock");
let bodyB = document.getElementsByTagName("body");



function showImg(k) {
    mainB.style.filter = "blur(10px)";
    footer.style.filter = "blur(10px)";
    bodyB[0].style.overflow = "hidden";

    showImageBoxesWrapper.style.display = "flex";
    imageBoxes[k].style.display = "flex";
}


for (let i = 0; i < imageBar.length; i++) {
  imageBar[i].onmouseover = function() {
    if (imageBar[i].style.gap == "1px") {
      imageBar[i].style.filter = "grayscale(0)";
    }
  }
  imageBar[i].onmouseout = function() {
    if (imageBar[i].style.gap == "1px") {
      imageBar[i].style.filter = "grayscale(1)";
    }
  }
 }




window.onclick = function(event) {
  let target = event.target; 
  if (target.alt === "news-photo") {
     mainImage[0].src = target.src; 
     for (let i = 0; i < imageBar.length; i++) {
      imageBar[i].style.filter = "grayscale(1)";
      imageBar[i].style.gap = "1px";
      if (imageBar[i].src == target.src) {
        imageBar[i].style.filter = "grayscale(0)";
        imageBar[i].style.gap = "2px";
      }
     }
     target.style.filter = "grayscale(0)";
     target.style.gap = "2px";
  }

  if (target.id === "showImageBoxesWrapper") { //закрытие фотографий при нажатии на темную область
    mainB.style.filter = "blur(0)";
    footer.style.filter = "blur(0)";
    bodyB[0].style.overflow = "auto";

    showImageBoxesWrapper.style.display = "none";
    for (let i = 0; i < imageBoxes.length; i++) {
       imageBoxes[i].style.display = "none";
    }
  }


  const dopLinks = document.getElementById("dopLinks-wrapper"); // чтобы работало закрытие доп-вкладок
  if (target.id !== "dropdown-img") { 
    dopLinks.style.height = "0vw";
  }  
}


let imageBottomBlock = document.getElementsByClassName("image-bottom-block");

let imageNow = 0;
let groupNow = 0;

function chengeImg(k, n) {
   imageNow = k - 1;
   groupNow = n - 1;
}

function chengeImgArrow(k) {
  if (k > 0) {
    if (imageNow < 4) {
      imageNow += k
    } else {
      imageNow = 0
    }
  } else {
    if (imageNow > 0) {
      imageNow += k
    } else {
      imageNow = 4
    }
  }
  mainImage[0].src = imageBottomBlock[groupNow].getElementsByClassName("image-bottom-block-box")[imageNow].getElementsByClassName("image-bar")[0].src; 
  for (let i = 0; i < imageBar.length; i++) {
    imageBar[i].style.filter = "grayscale(1)";
    imageBar[i].style.gap = "1px";
    if (imageBar[i].src == mainImage[0].src) {
      imageBar[i].style.filter = "grayscale(0)";
      imageBar[i].style.gap = "2px";
    }
  }
}
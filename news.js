let imageBoxes = document.getElementsByClassName("showImageBox");
let mainImage = document.getElementsByClassName("main-news-img");
let imageBar = document.getElementsByClassName("image-bar");
let mainB = document.getElementById("mainBlock");
let footer = document.getElementById("footerBlock");


//показ картинок
function showImg(k) {
    mainB.style.filter = "blur(10px)";
    footer.style.filter = "blur(10px)";
    bodyB[0].style.overflow = "hidden";

    showImageBoxesWrapper.style.display = "flex";
    imageBoxes[k].style.display = "flex";

    toScroll();
}




window.addEventListener('click', (event) => {
  let target = event.target; 

  if (target.classList.contains("news-images-box")) {
    mainImage[0].src = target.name; 
    for (let i = 0; i < imageBar.length; i++) {
     imageBar[i].style.filter = "grayscale(1)";
     imageBar[i].style.gap = "1px";
     if (imageBar[i].src == mainImage[0].src) {
       imageBar[i].style.filter = "grayscale(0)";
       imageBar[i].style.gap = "2px";
     }
    }
    target.style.filter = "grayscale(0)";
    target.style.gap = "2px";
 }



  if (target.className === "image-bar") {
     mainImage[0].src = target.src; 
     for (let i = 0; i < imageBar.length; i++) {
      imageBar[i].style.filter = "grayscale(1)";
      imageBar[i].style.gap = "1px";
      if (imageBar[i].src == mainImage[0].src) {
        imageBar[i].style.filter = "grayscale(0)";
        imageBar[i].style.gap = "2px";
      }
     }
     target.style.filter = "grayscale(0)";
     target.style.gap = "2px";
  }

  if (target.id == "showImageBoxesWrapper") { //закрытие фотографий при нажатии на темную область
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
})


window.addEventListener('touchend', (event) => {
  let target = event.target; 


  if (target.classList.contains("news-images-box")) {
    mainImage[0].src = target.name; 
    for (let i = 0; i < imageBar.length; i++) {
     imageBar[i].style.filter = "grayscale(1)";
     imageBar[i].style.gap = "1px";
     if (imageBar[i].src == mainImage[0].src) {
       imageBar[i].style.filter = "grayscale(0)";
       imageBar[i].style.gap = "2px";
     }
    }
    target.style.filter = "grayscale(0)";
    target.style.gap = "2px";
 }

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

  if (target.id == "showImageBoxesWrapper") { //закрытие фотографий при нажатии на темную область
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
})


//хранение номеров фотографий, груп и тд в нынешний момент
let imageBottomBlock = document.getElementsByClassName("image-bottom-block");
let imageNow = 0;
let groupNow = 0;
let Maxlength = 0;

function chengeImg(k, n) {
   imageNow = k;
   groupNow = n;
   Maxlength = imageBottomBlock[groupNow - 1].getElementsByClassName("image-bottom-block-box").length;
}

function chengeImgArrow(k) {
  imageNow += k;
  if (imageNow == 0) {
    imageNow = Maxlength
  } else if (imageNow == (Maxlength + 1)) {
    imageNow = 1
  }

  mainImage[0].src = imageBottomBlock[groupNow - 1].getElementsByClassName("image-bottom-block-box")[imageNow - 1].getElementsByClassName("image-bar")[0].src; 
  for (let i = 0; i < imageBar.length; i++) {
    imageBar[i].style.filter = "grayscale(1)";
    imageBar[i].style.gap = "1px";
    if (imageBar[i].src == mainImage[0].src) {
      imageBar[i].style.filter = "grayscale(0)";
      imageBar[i].style.gap = "2px";
    }
  }
}




//плавное открытие скрытого текста в новостях
let textBox = document.getElementsByClassName("hide-block"); //собираем массив всех коробок с новостями

function showNews(i, event) {
    let target = event.target;
    let textElems = textBox[i].getElementsByClassName("hide-text");
    let boxHeight = 0; //сумарная высота всех абзацев в новости
    for (let k = 0; k < textElems.length; k++) {
       boxHeight += textElems[k].offsetHeight;
    }
    
    let newsBoxHeight = textBox[i].style.height;  //высота обвертки новостей в данный момент
    
    if (newsBoxHeight == (boxHeight + "px")) {
        textBox[i].style.height = "3.4vw";
        target.innerHTML = "Читать дальше...";
        if (window.innerWidth < 700) {
          textBox[i].style.height = "6.2vw";
        }
    } else {
        target.innerHTML = "Скрыть текст"
        textBox[i].style.height = boxHeight + "px";
    } 
}
const head = document.getElementById('header');
const logo = document.getElementById('logo');
const num = document.getElementById('number');
const mail = document.getElementById('mail');
const nav = document.getElementById('nav');
const menuM = document.getElementById('menuM');
const navM = document.getElementById('navM');
const main = document.getElementById('main');
const menuB = document.getElementById('menuBox');
const list = document.getElementById('list');

const ParentOrChild = document.getElementById('itemLife');


function toScroll() {
    if (window.scrollY > 100) { //с прокруткой
        if (window.innerWidth < 700) { //проверяет разрешение экрана
            head.style.height = "10vw";
            logo.style.width = "30vw";
            //burger
            nav.style.display = "none";
            menuBox.style.display = "inline-block";
        } else {
            head.style.height = "5vw";
            logo.style.width = "14vw";
            nav.style.display = "flex";
            nav.style.height = "5vw";
            menuBox.style.display = "none";
            dopLinks.style.top = "5vw";
        }
        head.style.alignItems = "center";
        num.style.display = "none";
        mail.style.display = "none";

        if (ParentOrChild.title === "child") { //проверяет вложенность файла
          logo.src = "../../images/logoM.jpeg";
        } else {
          logo.src = "images/logoM.jpeg";
        }
    } else {                      //без прокурутки
        if (window.innerWidth < 700) {//проверяет разрешение экрана
            head.style.height = "40vw";
            logo.style.width = "45vw";
            nav.style.height = "7vw";
            nav.style.display = "flex";
            dopLinks.style.top = "40vw";
        } else {
            head.style.height = "15vw";
            logo.style.width = "28vw";
            nav.style.height = "4.5vw";
            nav.style.display = "flex";
            dopLinks.style.top = "15vw";
        }
      head.style.alignItems = "end";
      logo.src = "images/bigLogo.jpeg";
      num.style.display = "block";
      mail.style.display = "block";
      menuBox.style.display = "none";

      if (ParentOrChild.title === "child") { //проверяет вложенность файла 
        logo.src = "../../images/bigLogo.jpeg";
      } else {
        logo.src = "images/bigLogo.jpeg";
      }
    }
  }
  window.addEventListener('scroll', toScroll);

let isHide = true;

function menu(x) {
  x.classList.toggle("change");
  if (isHide) {
    menuM.style.height = "35vw";
    isHide = false;
  } else {
    menuM.style.height = "0";
    isHide = true;
  }
}

function hideMenu() {
  menuB.classList.remove("change");
  menuM.style.height = "0";
  isHide = true;
}

window.addEventListener('scroll', hideMenu);


// function showList() {
//   list.style.display = "flex";
// }

// function hideList() {
//   list.style.display = "none";
// }

// window.onclick = function(event) {
//   let target = event.target; 
//   if (target.id != 'list') return;
//   hideList();
// };

// list.onclick = function(event) {
//   let target = event.target; 
//   if (target.id != 'list') return;
//   hideListt();
// };




//закрывает открытый раздел в каталоге

const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');

const card1 = document.getElementById('c-id1');
const card2 = document.getElementById('c-id2');
const card3 = document.getElementById('c-id3');
const card4 = document.getElementById('c-id4');



window.onclick = function(event) {
  let target = event.target; 
  if (target.id !== "dropdown-img") {
    dopLinks.style.height = "0vw";
  } 
  if (target.id == 'c-id1' || target.id == 'c1' || target.id == 'c-id2' || target.id == 'c2' || target.id == 'c-id3' || target.id == 'c3' || target.id == 'c-id4' || target.id == 'c4' || target.id == 'tips-box') {
    return;
  } else {
    unCheckRadio();
  }
};

function unCheckRadio() {
    c1.checked = false;
    c2.checked = false;
    c3.checked = false;
    c4.checked = false;
}




//выпадающее меню в хедере

const dropdownArea = document.getElementById("dropdown-wrapper");
const dropdownImg = document.getElementById("dropdown-img");
const dopLinks = document.getElementById("dopLinks-wrapper");


dropdownArea.onmouseover = function() {
  if (ParentOrChild.title === "child") { //проверяет вложенность файла 
    dropdownImg.src = "../../images/folder-for-arrows/dropdownArrowWhite.png";
  } else {
    dropdownImg.src = "images/folder-for-arrows/dropdownArrowWhite.png";
  }
    dropdownImg.style.rotate = "360deg";
}

dropdownArea.onmouseout = function() {
  if (ParentOrChild.title === "child") { //проверяет вложенность файла 
    dropdownImg.src = "../../images/folder-for-arrows/dropdownArrowBlue.png";
  } else {
    dropdownImg.src = "images/folder-for-arrows/dropdownArrowBlue.png";
  }
  dropdownImg.style.rotate = "-360deg";
}



dropdownImg.onclick = function() {
  if (window.innerWidth > 700) {
     if (dopLinks.style.height === "4vw") {
         dopLinks.style.height = "0vw";
     } else {
         dopLinks.style.height = "4vw";
     }
  } else {
     if (dopLinks.style.height === "7vw") {
        dopLinks.style.height = "0vw";
     } else {
        dopLinks.style.height = "7vw";
  }
  }
}

window.onscroll = function() {
  dopLinks.style.height = "0vw";
}


const toContactBut = document.getElementById('toContact');

toContactBut.onclick = function(event) {
  let target = event.target;
  if (target.id !== "dropdown-img") {
    if (ParentOrChild.title === "child") { //проверяет вложенность файла 
      window.location.href = '../../contact.html';
    } else {
      window.location.href = 'contact.html';
    }
  }
}
 


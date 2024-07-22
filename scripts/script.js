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
let bodyB = document.getElementsByTagName("body");

const ParentOrChild = document.getElementById('itemLife');

let scrollNow;
function toScroll() {
    if (bodyB[0].style.overflow !== "hidden") {
     scrollNow = window.scrollY
    } else {
     scrollNow = 103
    }

    if (scrollNow > 100) { //с прокруткой
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
          logo.src = "../../assets/images/mainPagesImgs/logoM.jpeg";
        } else {
          logo.src = "assets/images/mainPagesImgs/logoM.jpeg";
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
      logo.src = "assets/images/mainPagesImgs/bigLogo.jpeg";
      num.style.display = "block";
      mail.style.display = "block";
      menuBox.style.display = "none";

      if (ParentOrChild.title === "child") { //проверяет вложенность файла 
        logo.src = "../../assets/images/mainPagesImgs/bigLogo.jpeg";
      } else {
        logo.src = "assets/images/mainPagesImgs/bigLogo.jpeg";
      }
    }


    hideMenu()
  }

window.addEventListener('scroll', toScroll);








let isHide = true;

function menu() {
  menuB.classList.toggle("change");
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

window.addEventListener('click', (event) => {
  let target = event.target;
  if (target == menuB || target.classList == "bar")return;
  hideMenu()
});

window.addEventListener('touchend', (event) => {
  let target = event.target;
  if (target == menuB || target.classList == "bar") return;
  hideMenu()
});






//закрывает открытый раздел в каталоге
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');

const card1 = document.getElementById('c-id1');
const card2 = document.getElementById('c-id2');
const card3 = document.getElementById('c-id3');
const card4 = document.getElementById('c-id4');


window.addEventListener('click', (event) => {
  let target = event.target; 
  if (target.classList == 'tips') return;
  if (target.id !== "dropdown-img") {
    dopLinks.style.height = "0vw";
  } 
  if (target.id == 'c-id1' || target.id == 'c1' || target.id == 'c-id2' || target.id == 'c2' || target.id == 'c-id3' || target.id == 'c3' || target.id == 'c-id4' || target.id == 'c4' || target.id == 'tips-box') {
    return;
  } else {
    unCheckRadio();
  }
});

window.addEventListener('touchend', (event) => {
  let target = event.target; 
  if (target.classList == 'tips') return;
  if (target.id !== "dropdown-img" && target.classList !== "tips") {
    dopLinks.style.height = "0vw";
  } 
  if (target.id == 'c-id1' || target.id == 'c1' || target.id == 'c-id2' || target.id == 'c2' || target.id == 'c-id3' || target.id == 'c3' || target.id == 'c-id4' || target.id == 'c4' || target.id == 'tips-box') {
    return;
  } else {
    unCheckRadio();
  }
});

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
dopLinks.style.height = "0vw";


dropdownArea.onmouseover = function(event) {
  dropdownImg.style.rotate = "360deg";
  if (r4.checked === true) return;

  let dropSrc = "assets/images/folder-for-arrows/dropdownArrowWhite.png";
  dropdownImg.src = dropSrc;

  if (ParentOrChild.title === "child") dropdownImg.src = "../../" + dropSrc;
}

dropdownArea.onmouseout = function(event) {
    let dropSrc = "assets/images/folder-for-arrows/dropdownArrowBlue.png";
    dropdownImg.src = dropSrc;

    if (ParentOrChild.title === "child")  dropdownImg.src = "../../" + dropSrc;  
  

  dropdownImg.style.rotate = "-360deg";
}



function showLinks() {
  let dopHeight = dopLinks.style.height;
  dopLinks.style.height = "0vw";

  if (dopHeight === "0vw") {
    dopLinks.style.height = "4vw";
    if (window.innerWidth < 700) dopLinks.style.height = "7vw";
  }
}

window.addEventListener('scroll', () => {
  dopLinks.style.height = "0vw";
});


const toContactBut = document.getElementById('toContact');

toContactBut.addEventListener('click', (event) => {
  let target = event.target;
  if (target.id !== "dropdown-img") {
    if (ParentOrChild.title === "child") { //проверяет вложенность файла 
      window.location.href = '../../contact.html';
    } else {
      window.location.href = 'contact.html';
    }
  } else {
    showLinks()
  }
});





















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

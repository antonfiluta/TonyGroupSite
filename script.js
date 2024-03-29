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
        } else {
            head.style.height = "15vw";
            logo.style.width = "28vw";
            nav.style.height = "4.5vw";
            nav.style.display = "flex";
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
    menuM.style.height = "30vw";
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


function showList() {
  list.style.display = "flex";
}

function hideList() {
  list.style.display = "none";
}

window.onclick = function(event) {
  let target = event.target; 
  if (target.id != 'list') return;
  hideList();
};

list.onclick = function(event) {
  let target = event.target; 
  if (target.id != 'list') return;
  hideList();
};





const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const t4 = document.getElementById('t4');
const t5 = document.getElementById('t5');
const t6 = document.getElementById('t6');
const t7 = document.getElementById('t7');
const t8 = document.getElementById('t8');
const t9 = document.getElementById('t9');
const t10 = document.getElementById('t10');
const t11 = document.getElementById('t11');


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
  if (target.id === 'card-wrap' || target.id === 'main') {
    c1.checked = false;
    c2.checked = false;
    c3.checked = false;
    c4.checked = false;
    hideTips();
  }
};

card1.onclick = hideTips;
card2.onclick = hideTips;
card3.onclick = hideTips;
card4.onclick = hideTips;

function hideTips() {
  t1.checked = false;
  t2.checked = false;
  t3.checked = false;
  t4.checked = false;
  t5.checked = false;
  t6.checked = false;
  t7.checked = false;
  t8.checked = false;
  t9.checked = false;
  t10.checked = false;
  t11.checked = false;
}
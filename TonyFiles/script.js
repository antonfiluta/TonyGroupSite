const head = document.getElementById('header');
const logo = document.getElementById('logo');
const num = document.getElementById('number');
const mail = document.getElementById('mail');
const nav = document.getElementById('nav');
const menuM = document.getElementById('menuM');
const navM = document.getElementById('navM');
const main = document.getElementById('main');


function toScroll() {
    if (window.scrollY > 100) { //с прокруткой
        if (window.innerWidth < 800) {
            head.style.height = "10vw";
            logo.style.width = "30vw";
            //burger
            nav.style.display = "none";
            menuBox.style.display = "inline-block";
        } else {
            head.style.height = "5vw";
            logo.style.width = "12vw";
            nav.style.display = "flex";
            nav.style.height = "5vw";
            menuBox.style.display = "none";
        }
        head.style.alignItems = "center";
        num.style.display = "none";
        mail.style.display = "none";
    } else {                      //без прокурутки
        if (window.innerWidth < 800) {
            head.style.height = "25vw";
            logo.style.width = "40vw";
            nav.style.height = "7vw";
            nav.style.display = "flex";
        } else {
            head.style.height = "15vw";
            logo.style.width = "22vw";
            nav.style.height = "4.5vw";
            nav.style.display = "flex";
        }
      head.style.alignItems = "end";
      num.style.display = "block";
      mail.style.display = "block";
      menuBox.style.display = "none";
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

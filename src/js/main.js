// ----------------item search---------------------------
const findEl = (sel, parent) => (parent || document).querySelector(sel);

burgerBtnOn = findEl('.navBurgerOn');
overlay = findEl('.overlay');
buttonAboutUs = findEl('#button-aboutUs');
aboutUs = findEl('.aboutUs'); 
mainScreen = findEl('.top-main');
scrollButton = findEl('.top-main__scroll');



// --------------button movement about us-------------------
const trackCoordinates = function (e) {    
    if(~['Android', 'iPhone', 'iPod', 'iPad', 'BlackBerry'].indexOf(navigator.platform)) {
        return
        }
    else {
        const target = this.getBoundingClientRect();
        const x = e.clientX - target.left;
        const y = e.clientY - target.top;
        buttonAboutUs.style.top = y  + 'px';
        if (y <= 100) {
            buttonAboutUs.style.top = 100 + 'px';
        }
        if (y >= mainScreen.offsetHeight - 150) {
            buttonAboutUs.style.top = mainScreen.offsetHeight - 150 + 'px';
            }            
        }    

    }; 


//-----------------------scroll--------------------------------
function scrollTo(element) {
    window.scroll({
      left: 0, 
      top: element.offsetTop, 
      behavior: 'smooth'
    })
  }

// -----------------------opening menu--------------------------
const menuSwitch = function() {
    burgerBtnOn.classList.toggle("active");
    overlay.classList.toggle("open");
};  

// -----------------------opening section aboutUs--------------------------
const aboutUsActive = function() {
    aboutUs.classList.toggle("active");
}








// -----------------------event listeners-----------------------
burgerBtnOn.addEventListener('click', menuSwitch);
mainScreen.addEventListener('mousemove', trackCoordinates);
aboutUs.addEventListener('mousemove', trackCoordinates);
scrollButton.addEventListener('click', () => {scrollTo(sectionAboutUs);});
buttonAboutUs.addEventListener('click', aboutUsActive);






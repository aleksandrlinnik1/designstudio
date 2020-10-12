// ----------------item search---------------------------
const findEl = (sel, parent) => (parent || document).querySelector(sel);

burgerBtn = findEl('.navBurger');
overlay = findEl('.overlay');
buttonAboutUs = findEl('.button-aboutUs');
mainScreen = findEl('.top-main');
sectionAboutUs = findEl('#aboutUs');
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
    burgerBtn.classList.toggle("active");
    overlay.classList.toggle("open");
};  





// -----------------------event listeners-----------------------
burgerBtn.addEventListener('click', menuSwitch);
mainScreen.addEventListener('mousemove', trackCoordinates);
buttonAboutUs.addEventListener('click', () => {scrollTo(sectionAboutUs);});
scrollButton.addEventListener('click', () => {scrollTo(sectionAboutUs);});




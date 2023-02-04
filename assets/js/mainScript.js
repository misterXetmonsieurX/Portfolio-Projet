const mobileMenu = document.querySelector('.burger_menu_icon i');
const leftMobileMenu = document.querySelector('.left_mobile_menu');

mobileMenu.addEventListener("click", () =>{
   if ( leftMobileMenu.style.transform === "translateX(0%)") {
    leftMobileMenu.style.transform = "translateX(-100vw)";
    }else{
        leftMobileMenu.style.transform = "translateX(0%)";
    }
});
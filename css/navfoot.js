const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

var i = 0;
        function expand()
        {
            if(i ==0)
            {
                document.getElementById("menu").style.transform ="scale(4)";
                document.getElementById("plus").style.transform = "rotate(137deg)";
                i = 1;
            }
            else
            {
                document.getElementById("menu").style.transform ="scale(0)";
                document.getElementById("plus").style.transform = "rotate(0deg)";
                i = 0;
            }
        }
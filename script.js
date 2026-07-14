/*===============================
      MOBILE MENU
================================*/

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuIcon.classList.remove("bx-menu");
        menuIcon.classList.add("bx-x");
    } else {
        menuIcon.classList.remove("bx-x");
        menuIcon.classList.add("bx-menu");
    }
};

/*===============================
      CLOSE MENU ON CLICK
================================*/

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuIcon.classList.remove("bx-x");
        menuIcon.classList.add("bx-menu");

    });

});

/*===============================
      STICKY HEADER
================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    header.classList.toggle("sticky", window.scrollY > 80);

});

/*===============================
      DARK MODE
================================*/

const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeBtn.classList.remove("bx-moon");
        themeBtn.classList.add("bx-sun");

    }

    else{

        themeBtn.classList.remove("bx-sun");
        themeBtn.classList.add("bx-moon");

    }

});

/*===============================
      TYPING EFFECT
================================*/

const typing = document.querySelector(".typing");

const words = [

    "AI Engineer",
    "Full Stack Developer",
    "Machine Learning Enthusiast",
    "Java Developer",
    "Open Source Contributor"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typing.textContent = currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 50 : 120);

}

typeEffect();

/*===============================
      SCROLL REVEAL
================================*/

const revealElements = document.querySelectorAll("section");

function revealSections(){

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

/*===============================
      ACTIVE NAV LINK
================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(sec=>{

        const top = sec.offsetTop - 150;
        const height = sec.offsetHeight;

        if(pageYOffset >= top){

            current = sec.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/*===============================
      BACK TO TOP
================================*/

const topBtn = document.querySelector(".top");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topBtn.style.opacity = "1";
        topBtn.style.pointerEvents = "auto";

    }

    else{

        topBtn.style.opacity = "0";
        topBtn.style.pointerEvents = "none";

    }

});

/*===============================
      SMOOTH SCROLL
================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

/*===============================
      PROJECT CARD TILT
================================*/

const cards = document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateX = -(y - rect.height/2)/18;
const rotateY = (x - rect.width/2)/18;

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"perspective(1000px) rotateX(0) rotateY(0) scale(1)";

});

});

/*===============================
      COUNTER ANIMATION
================================*/

const counters = document.querySelectorAll(".card h1");

let started = false;

window.addEventListener("scroll",()=>{

const about = document.querySelector(".about");

if(window.scrollY > about.offsetTop - 300 && !started){

started = true;

counters.forEach(counter=>{

let target = counter.innerText;

if(isNaN(target)) return;

let value = 0;

const interval = setInterval(()=>{

value++;

counter.innerText = value+"+";

if(value>=target){

clearInterval(interval);

}

},20);

});

}

});

/*===============================
      BUTTON RIPPLE EFFECT
================================*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const x=e.clientX-this.offsetLeft;
const y=e.clientY-this.offsetTop;

circle.style.left=x+"px";
circle.style.top=y+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

/*===============================
      PRELOADER
================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

/*===============================
      CONSOLE MESSAGE
================================*/

console.log("%cWelcome to Naina Mishra's Portfolio 🚀",
"color:#3b82f6;font-size:18px;font-weight:bold;");
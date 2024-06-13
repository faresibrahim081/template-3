// valid navbar and other links 
let Bullet = document.querySelectorAll(".landing .go-down");
let alllinks = document.querySelectorAll(".main-nav a");
function scrolling(elements) {
    
    elements.forEach(ele => {
  
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
};
scrolling(Bullet);
scrolling(alllinks);
//scroll to top
let scrollTop = document.querySelector(".scroll i");

window.onscroll = function () {

    // if (window.scrollY >=650) {
    //     scrollTop.style.display = 'block';
    // }else{
    //     scrollTop.style.display = 'none';
    // }
    window.scrollY >= 650 ? scrollTop.style.display = 'block' :scrollTop.style.display = 'none';
};
scrollTop.onclick = function () {
    window.scrollTo({
        top:0,
        behavior: "smooth",
    });
};

// progress validation our skilles
let skills = document.querySelector(".our-skills");
let span = document.querySelectorAll(".the-progress span");

window.onscroll = function () { 
    if (window.scrollY >= skills.offsetTop) {
        span.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};

// count down date
let countDownDate = new Date("Dec 31, 2022 23:29:29").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime();

    let datDefferant = countDownDate - dateNow;
    //time units
    let days = Math.floor(datDefferant / (1000 * 60 * 60 *24));
    let hours = Math.floor((datDefferant % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    let munites = Math.floor((datDefferant % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((datDefferant % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days ;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours ;
    document.querySelector(".munites").innerHTML = munites < 10 ? `0${munites}` : munites ;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds ;

    if (datDefferant = 0) {
        clearInterval(counter);
    }

},1000);

// validate stats section
let nums = document.querySelectorAll(".stats .number");
let stats = document.querySelector(".stats");
let started = false;


window.onscroll = function () { 
    if (window.scrollY >= stats.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    },1000 / goal);
}




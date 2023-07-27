 
const tabs = document.querySelectorAll(".tabs");
const tab = document.querySelectorAll(".tab");
const panel = document.querySelectorAll(".tab-content");

function onTabClick(event) {

  // deactivate existing active tabs and panel

  for (let i = 0; i < tab.length; i++) {
    tab[i].classList.remove("active");
  }

  for (let i = 0; i < panel.length; i++) {
    panel[i].classList.remove("active");
  }


  // activate new tabs and panel
  event.target.classList.add('active');
  let classString = event.target.getAttribute('data-target');
  console.log(classString);
  document.getElementById('panels').getElementsByClassName(classString)[0].classList.add("active");
}

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener('click', onTabClick, false);
}




//for testimonials  var slide = document.getElementsByClassName("slide");
var slide = document.getElementsByClassName("slide");
var indicator = document.getElementById("indicator");
var dots = document.getElementsByClassName("dots");
var autoplay = document.getElementsByClassName("containers")[0].getAttribute("data-autoplay");
var l = slide.length;
var interval = 5000;
var set;

window.onload = function () {
    initialize();
    slide[0].style.opacity = "1";
    for (var j = 0; j < l; j++) {
        indicator.innerHTML += "<div class='dots' onclick=change(" + j + ")></div>";
    }

    dots[0].style.background = "#696969";

}

function initialize() {
    if (autoplay === "true")
        set = setInterval(function () { next(); }, interval);
}



function change(index) {
    clearInterval(set);
    count = index;
    for (var j = 0; j < l; j++) {
        slide[j].style.opacity = "0";
        dots[j].style.background = "#bdbdbd";
    }
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";


}

var count = 0;
function next() {
    clearInterval(set);
    slide[count].style.opacity = "0";
    count++;
    for (var j = 0; j < l; j++) {
        dots[j].style.background = "#bdbdbd";
    }


    if (count == l) {
        count = 0;
        slide[count].style.opacity = "1";
        dots[count].style.background = "#696969";

    } else {
        slide[count].style.opacity = "1";
        dots[count].style.background = "#696969";
    }
    initialize()
}


function prev() {
    clearInterval(set);
    slide[count].style.opacity = "0";
    for (var j = 0; j < l; j++) {
        dots[j].style.background = "#bdbdbd";
    }
    count--;

    if (count == -1) {
        count = l - 1;
        slide[count].style.opacity = "1";
        dots[count].style.background = "#696969";

    } else {
        slide[count].style.opacity = "1";
        dots[count].style.background = "#696969";
    }
    initialize()
}



$(document).ready(function(){
    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        lazyLoad: 'ondemand',
        cssEase: 'linear'
    });
  });

// Get the button
let mybutton = document.getElementById("uptop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
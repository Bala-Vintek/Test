
/// carousel 1
let slideIndex = 1;
let slideIndex2 = 1;
let slideIndex2Resp = 1;
let slideIndex3 = 1;
MicroModal.init({});
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  //   dots[slideIndex-1].className += " active";
}

showSlides(slideIndex);

/// carousel 2




// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("mySlidesTwo");
  let dots2 = document.getElementsByClassName("dot2");
  if (n > slides2.length) { slideIndex2 = 1 }
  if (n < 1) { slideIndex2 = slides2.length }
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2 - 1].style.display = "block";
  //   dots2[slideIndex2-1].className += " active";
}


function plusSlides2Resp(n) {
  showSlides2Resp(slideIndex2Resp += n);
}

// Thumbnail image controls
function currentSlide2Resp(n) {
  showSlides2Resp(slideIndex2Resp = n);
}

function showSlides2Resp(n) {
  let i;
  let slides2Resp = document.getElementsByClassName("mySlidesTwoResp");
  let dots2 = document.getElementsByClassName("dot2");
  if (n > slides2Resp.length) { slideIndex2Resp = 1 }
  if (n < 1) { slideIndex2Resp = slides2Resp.length }
  for (i = 0; i < slides2Resp.length; i++) {
    slides2Resp[i].style.display = "none";
  }
  // for (i = 0; i < dots2.length; i++) {
  //   dots2[i].className = dots2[i].className.replace(" active", "");
  // }
  slides2Resp[slideIndex2Resp - 1].style.display = "block";
  //   dots2[slideIndex2-1].className += " active";
}


function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

// Thumbnail image controls
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  let i;
  let slides3 = document.getElementsByClassName("mySlidesThree");
  // let dots2 = document.getElementsByClassName("dot");
  if (n > slides3.length) { slideIndex3 = 1 }
  if (n < 1) { slideIndex3 = slides3.length }
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  // for (i = 0; i < dots2.length; i++) {
  //   dots2[i].className = dots2[i].className.replace(" active", "");
  // }
  slides3[slideIndex3 - 1].style.display = "block";
  //   dots2[slideIndex2-1].className += " active";
}


showSlides2(slideIndex2);
// showSlides3(slideIndex3);






let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");

toggleBtn.onclick = () => {
  collapse.classList.toggle("hidden");
  collapse.classList.toggle("flex");
};


function closeMenu() {
  console.log("menuclosed");
  document.querySelector(".menuitem").style.display = "none";
}

function openMenu() {
  console.log("menuopened");
  document.querySelector(".menuitem").style.display = "block";
}

function closePopup(){
  document.querySelector(".popup-contact-form").style.display = "none";
}

function openPopup(){
  document.querySelector(".popup-contact-form").style.display = "block";
}

async function getApi() {
  const url = 'https://salnazi-country-codes-v1.p.rapidapi.com/api.php?apikey=8923sa7aAS7s&secret=us7uS78sj&apiKey=8923sa7aAS7s';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c88956f3c4msh5e5829d79a20cd0p18683ajsn7ab300ce8a90',
      'X-RapidAPI-Host': 'salnazi-country-codes-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
getApi();

function loadcarousel() {
  showSlides(1);
  showSlides2(1);
  showSlides2Resp(1);
  showSlides3(1);
  closeMenu();
  getApi()
}
function loadcarousels() {
  
  closeMenu();
  showSlides(1);
}

function openSegment(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    console.log("content");
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    console.log("links",i)
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openSlide(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("contents");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}






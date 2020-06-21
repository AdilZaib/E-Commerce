function show()
{
  document.querySelector(".navbar").classList.toggle("show");
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
function showSearch()
{
  var x=document.querySelector(".s2-r ul input.search");
  var y=document.querySelector(".sec-2 .sub-sec-2 .s2-r ");
  x.classList.toggle("shows");
  y.classList.toggle("show-r");
}
function showImg(m) 
{
  var z=document.querySelector(".main-img img").src=document.querySelectorAll(".thumb-img img")[m].src;
}



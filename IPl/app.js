let userBtn = document.querySelector('#login-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
// let videoBtn = document.querySelectorAll('.vid-btn');
window.onscroll=() =>{
  login-btn.classList.remove('fa-times');
    searchBar.classList.remove('active'); 
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');  
    loginForm.classList.remove('active');
}
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
userBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
});


// videoBtn.forEach(btn =>{
//     btn.addEventListener('click', ()=>{
//         document.querySelector('.controls .active').classList.remove('active');
//         btn.classList.add('active');
//     let src = btn.getAttribute('data-src');
//     document.querySelector('#video-slider').src = src;
//     });
// });


var swiper = new Swiper(".review-slider", {
   spaceBetween:20,
   loop:true,
   autoplay:{
    delay:2500,
    disableOnInteraction:false,
   },
   breakpoints: {
    640: {
       slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    },
   }, 
});

function validate()
{
  var user = document.getElementById("Email");
  var passw = document.getElementById("pass");
 
  if(user.value.trim() == "" || passw.value.trim()=="")
  {
    alert("😒No blank values allowed");
    
    return false;
  }
  else
  {
    alert("😎Welcome To Our Website");
    true;
  }
}

function booking()
{
  var places = document.getElementById("place");
  var Guest = document.getElementById("Guests");
 
  if(places.value.trim() == "" || Guest.value.trim()=="")
  {
    alert("😒No blank values allowed");
    
    return false;
  }
  else
  {
    alert("😎Thanks For Booking");
    true;
  }
}

function contact()
{
  var names = document.getElementById("name");
  var Emailse = document.getElementById("emails");
  var numbers = document.getElementById("number");
  var subjects = document.getElementById("subject");
 
  if(names.value.trim() == "" || Emailse.value.trim()=="" || numbers.value.trim()=="" ||subjects.value.trim()=="")
  {
    alert("😒No blank values allowed");
    
    return false;
  }
  else
  {
    alert("🤩Thanks For Message");
    true;
  }
}


// for (i = 0; i < li.length; i++) {
//   a = li[i].getElementsByTagName("a")[0];
//   txtValue = a.textContent || a.innerText;
//   if (txtValue.toUpperCase().indexOf(filter) > -1) {
//     li[i].style.display = "";
//   } else {
//     li[i].style.display = "none";
//   }
// }
// }
// function login() {
//   var email1 = document.getElementById("Email").value;
//   var pass1 = document.getElementById("pass").value;

//   localStorage.setItem("email2",email1)
//   localStorage.setItem("pass2",pass1)
// }



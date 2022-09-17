

"use strict";

window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky" , window.scrollY >10 );
})

$(document).ready( function() {
  $('.submit').click( function (event) {
    console.log('clicked button')

    var email = $('.email').val()
    var subject = $('.subject').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()

    if(email.length > 5 && email.includes('@') && email.includes('.')){
      statusElm.append('<div>Email is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Email is not valid</div>')
    }

    if(subject.length >= 2 ) {
      statusElm.append('<div>subject is valid</div>')
    } else{
      event.preventDefault()
      statusElm.append('<div>subject is not valid</div>')   
    }

    if(message,length) {
      statusElm.append('<div>message is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>message is not valid</div>')
    }
  });

  // Close menu on click of menu item
  $('.menu li').on('click', function() {
    const toggler = $('.menu-wrap .toggler');

    if (toggler.is(":checked")) {
      toggler.prop('checked', false);
    }
  });
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

(function(){
  var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
  i.src = "https://cdn.curator.io/published/374c120e-4b0c-41f1-9852-4bb5731664e6.js";
  e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
  })();



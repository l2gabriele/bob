//var $ = require('jquery');
import bar from './bar';
bar(); //webpack

console.log("yay it worked");


function openNav() {
  console.log("button click")
  document.getElementById("navBar").style.width="20%";
  document.getElementById("main").style.marginLeft="20%";
};
document.getElementById("open-btn").addEventListener('click', openNav);

function closeNav() {
  console.log("button click")
  document.getElementById("navBar").style.width="0";
  document.getElementById("main").style.marginLeft="0";
};
document.getElementById("close-btn").addEventListener('click', closeNav);

$(document).ready(function() {
  $(".open-btn").click(function() {
    $("#navBarLink").fadeIn("slow");
  });
/*$(document).click(function() {
   $("button").hide();
   $("button").each(function(i) {
       if (this.complete) {
           $(this).fadeIn(3000);
       } else {
           $(this).load(function() {
               $(this).fadeIn(3000);
           });
       }
   });*/
});

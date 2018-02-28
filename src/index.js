//var $ = require('jquery');
import bar from './bar';
bar(); //webpack

console.log("yay it worked");

function openNav() {
  console.log("open button click")
  document.getElementById("navBar").style.width="20%";
  document.getElementById("main").style.marginLeft="20%";
};
document.getElementById("open-btn").addEventListener('click', openNav);

function closeNav() {
  console.log("close button click")
  document.getElementById("navBar").style.width="0";
  document.getElementById("main").style.marginLeft="0";
};
document.getElementById("close-btn").addEventListener('click', closeNav);

});

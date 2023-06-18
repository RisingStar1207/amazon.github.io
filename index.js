function myFunction2(y){
   if(y.matches){
      document.getElementsByClassName("menu-sub")[0].style.backgroundColor = "black";
      var list = document.getElementsByClassName("submenu")[1];
      list.classList.remove("activate");
      document.getElementById("menu").style.backgroundColor = "black";
      var list2 = document.getElementsByClassName("submenu")[0];
      list2.classList.remove("activate");
   }
} 
var y = window.matchMedia("(min-width: 885px)");
y.addListener(myFunction2);
function option() {
   document.getElementsByClassName("menu-sub")[0].style.backgroundColor = "black";
   var list = document.getElementsByClassName("submenu")[1];
   list.classList.remove("activate");
   document.getElementsByClassName("search")[0].style.backgroundColor = "black";
   document.getElementsByClassName("fa-magnifying-glass")[0].style.display = "block";
   document.getElementsByClassName("fa-x")[0].style.display = "none";
   document.getElementsByClassName("searchbar")[0].style.display = "none";
   if (document.getElementById("menu").style.backgroundColor == 'rgb(25, 30, 37)') {
      document.getElementById("menu").style.backgroundColor = "black";
   }
   else {
      document.getElementById("menu").style.backgroundColor = "rgb(25, 30, 37)";
   };
   var list = document.getElementsByClassName("submenu")[0];
   list.classList.toggle("activate");
}
function options() {
   function myFunction(x) {
      if (x.matches) { 
        document.getElementById("menu").style.backgroundColor = "black";
        var list = document.getElementsByClassName("submenu")[0];
        list.classList.remove("activate");
        document.getElementsByClassName("searchbar")[0].style.display = "none";
        document.getElementsByClassName("search")[0].style.backgroundColor = "black";
        document.getElementsByClassName("fa-magnifying-glass")[0].style.display = "block";
        document.getElementsByClassName("fa-x")[0].style.display = "none";
        if (document.getElementsByClassName("menu-sub")[0].style.backgroundColor == "rgb(25, 30, 37)") {
           document.getElementsByClassName("menu-sub")[0].style.backgroundColor = "black";
        }
        else {
           document.getElementsByClassName("menu-sub")[0].style.backgroundColor = "rgb(25, 30, 37)";
        };
        var list = document.getElementsByClassName("submenu")[1];
        list.classList.toggle("activate");
      }
   }
   var x = window.matchMedia("(max-width: 885px)");
   myFunction(x);
}
document.getElementById("menu").addEventListener("click", option);
function search() {
   document.getElementsByClassName("menu-sub")[0].style.backgroundColor = "black";
   var list = document.getElementsByClassName("submenu")[1];
   list.classList.remove("activate");
   document.getElementById("menu").style.backgroundColor = "black";
   var list = document.getElementsByClassName("submenu")[0];
   list.classList.remove("activate");
   if (document.getElementsByClassName("search")[0].style.backgroundColor == "rgb(25, 30, 37)") {
      document.getElementsByClassName("search")[0].style.backgroundColor = "black";
      document.getElementsByClassName("fa-magnifying-glass")[0].style.display = "block";
      document.getElementsByClassName("fa-x")[0].style.display = "none";
      document.getElementsByClassName("searchbar")[0].style.display = "none";
   }
   else {
      document.getElementsByClassName("search")[0].style.backgroundColor = "rgb(25, 30, 37)";
      document.getElementsByClassName("fa-magnifying-glass")[0].style.display = "none";
      document.getElementsByClassName("fa-x")[0].style.display = "block";
      document.getElementsByClassName("searchbar")[0].style.display = "flex";
   }
}
document.getElementsByClassName("search")[0].addEventListener("click", search);
document.getElementsByClassName("menu-sub")[0].addEventListener("click", options);
const home = document.getElementsByClassName("body")[0];
var nav = document.getElementsByClassName("nav")[0];
document.addEventListener("scroll",reveal);
function reveal(){
   const presentHeight = home.getBoundingClientRect().top.toFixed();
if(presentHeight<0){
   nav.classList.add("scroll"); 
   document.getElementsByClassName("sub")[0].classList.add("scroll2");
   document.getElementsByClassName("catagories")[0].classList.add("place");
   document.getElementsByClassName("searchbar")[0].classList.add("place");
}
else{
   nav.classList.remove("scroll"); 
   document.getElementsByClassName("sub")[0].classList.remove("scroll2");
   document.getElementsByClassName("catagories")[0].classList.remove("place");
   document.getElementsByClassName("searchbar")[0].classList.remove("place");
}
console.log(presentHeight);
}

 
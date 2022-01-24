function navSlideOut(){
    document.querySelector("#nav-link").style.left="-16px"
}
function navSlideIn(){
   document.querySelector("#nav-link").style.left="-2000px"
}
var cartLength =JSON.parse(localStorage.getItem("cartthings"))
document.querySelector("#cardAval").innerHTML=`There are currently ${cartLength.length} items in your cart.`;
document.querySelector("#cartLen").innerHTML=`${cartLength.length}`;

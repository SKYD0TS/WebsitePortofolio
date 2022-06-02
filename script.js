let color = document.getElementById("color");
function load (){
    color.classList.remove("transit");
}

function delay (URL) {
    color.classList.add("transit");
    setTimeout( function() { window.location = URL }, 500 );

}

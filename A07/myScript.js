
function getClasses(elem) {
    var x = document.getElementsByTagName("P")[0].className;
    document.getElementById("test").innerHTML = x;
    document.write("[" + x + "]");
}

function addClass(elem, className){
    var newClass = document.getElementById(elem);
    newClass.className += " " + className;
}
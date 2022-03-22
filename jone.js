function myfon() {
    document.getElementById("11").innerHTML="This para was changed by Jscript";
    document.getElementById("11").style.color = "blue";
    document.getElementById("11").style.fontSize = "30px";
}
function myfun(){
    var x = document.getElementById("namee").value;
    y = "hie  " + x + ".";
    window.alert(y);
    document.getElementById("dp").innerHTML = "hie you have enetered your name as" + "'" + x + "'.";
}
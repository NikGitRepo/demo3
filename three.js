function change(){
    var ch1,ps1,c1,c2,c3,c4;
        ch1 = document.getElementById("xchange").value;
        ps1 = parseInt(document.getElementById("pos1").value);
        c1 = document.getElementById("car1");
        c2 = document.getElementById("car2");
        c3 = document.getElementById("car3");
        c4 = document.getElementById("car4");


        document.getElementById("o3").innerHTML = "updated details:    " +c
}
function xcase(){
    document.getElementById("o4").innerHTML = "updated details:    " +carr.owner +carr.carname   +carr.color +carr.carno; 
}
function cars(){
    document.getElementById("o5").innerHTML = car ;
}
function addcar(){
    var i = car.length , n;
     car[i] = document.getElementById("ncar").value;
     n = car[i];
    car.push("n");
    document.getElementById("o5").innerHTML = car ;
    } 
function remcar(){
        var i = car.length ;
         car[i] = document.getElementById("ncar").value;
        car.pop("car[i]");
        document.getElementById("o6").innerHTML = car ;
    } 
    
function addfun(){
    var x,y,z;
    x = parseInt(document.getElementById("x1").value);
    y = parseInt(document.getElementById("y1").value);
    a = document.getElementById("a1");
    b = document.getElementById("s1");
    c = document.getElementById("m1");
    d = document.getElementById("d1");
    if( a.checked){
        z = x + y ;
        document.getElementById("res").innerHTML = "the result is " + z + ".";
    }else if(b.checked){
        z = x - y ;
        document.getElementById("res").innerHTML = "the result is " + z + ".";
    }else if(c.checked){
        z = x * y ;
        document.getElementById("res").innerHTML = "the result is " + z + ".";
    }else if(d.checked){
        z = x / y ;
        document.getElementById("res").innerHTML = "the result is " + z + ".";
    }else{ document.getElementById("res").innerHTML = "please check the values and operation" ;}
}
let car =[{owner:"nikash",carname:"polotgt",color:"red",rnum:"9123"},{owner:"nikhil",carname:"mustanggt",color:"black",rnum:"0947"}]
function ary(){
        var owners = " ",carnames =" ",colors = " ",rnums =" ";
        var i=0;
        for(;i < car.length;){
            owners += car[i].owner + " ,";
            carnames += car[i].carname + " ,";
            colors +=  car[i].color + " ,";
            rnums += car[i].rnum + " ,";
            i++;
        }
        document.getElementById("cr1").innerHTML = "Initial car owners:" + owners + ".";
        document.getElementById("cr2").innerHTML = "Initial car names:" + carnames + ".";
        document.getElementById("cr3").innerHTML = "colors:" + colors + "."; 
        document.getElementById("cr4").innerHTML = "reg numbers :" + rnums + "."; 
        
}
function addobj(){
    var nw1,nw2,nw3,nw4,ny;
    nw1 = document.getElementById("nown").value;
    nw2 = document.getElementById("ncnm").value;
    nw3 = document.getElementById("ncol").value;
    nw4 = document.getElementById("nreg").value; 
    ny = {owner: nw1,carname:nw2,color:nw3,rnum:nw4};
    car.push(ny);
    ary();
}
function change(){
        var ch1,c1,c2,c3,c4;
        ch1 = document.getElementById("xchange").value;
        p = parseInt(document.getElementById("pos1").value);
        c1 = document.getElementById("car1");
        c2 = document.getElementById("car2");
        c3 = document.getElementById("car3");
        c4 = document.getElementById("car4");
        if(c1.checked){
            car[p].owner = ch1;
            document.getElementById("ocr1").innerHTML = "car owner:" + car[p].owner + ".";
        }else if(c2.checked){
            car[p].carname = ch1;
            document.getElementById("ocr1").innerHTML = "car name:" + car[p].carname + ".";
        }else if(c3.checked){
            car[p].color = ch1;
            document.getElementById("ocr1").innerHTML = "color :" + car[p].color + ".";
        }else if(c4.checked){
            car[p].rnum = ch1;
            document.getElementById("ocr1").innerHTML = "Reg number :" + car[p].rnum + "."; 
        }else
        { document.getElementById("xp").innerHTML = "select the required change."; } 
}
function remobj(){
    var rmv;
    rmv = parseInt(document.getElementById("rem1").value);
    car.splice(rmv,1);
}

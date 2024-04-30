function reset(){
     demo.innerHTML = 0;
}

function count(){
    demo.innerHTML = demo.innerHTML + 1;
    // console.log(demo.innerHTML=demo.innerHTML +  1);
}
var a = 'no'
function red(){
    if(a == 'no'){
        document.getElementById("rectangle").style.backgroundColor ="red";
        document.getElementById("square").style.backgroundColor ="red";
        document.getElementById("circle").style.backgroundColor ="red";
        a = 'yes'
    }
    else{
        document.getElementById("rectangle").style.backgroundColor ="black";
        document.getElementById("square").style.backgroundColor ="black";
        document.getElementById("circle").style.backgroundColor ="black";
        a = 'no'
    }
    
}

var b = 'no'
function blue(){
    if(b == 'no'){
        document.getElementById("rectangle").style.backgroundColor ="blue";
        document.getElementById("square").style.backgroundColor ="blue";
        document.getElementById("circle").style.backgroundColor ="blue";
        b = 'yes'
    }
    else{
        document.getElementById("rectangle").style.backgroundColor ="black";
        document.getElementById("square").style.backgroundColor ="black";
        document.getElementById("circle").style.backgroundColor ="black";
        b = 'no'
    }

    
}

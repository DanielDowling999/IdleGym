
function giveExp(){
    exp = parseInt(document.getElementById("exp").innerHTML);
    lvl = parseInt(document.getElementById("lvl").innerHTML);
    exp = exp + 1;
    if (exp > 100){
        lvl = lvl + 1;
        exp = 0;
    }

    document.getElementById("exp").innerHTML = exp;
    document.getElementById("lvl").innerHTML = lvl;
}


window.setInterval(function(){
    giveExp();
    

}, 1000);
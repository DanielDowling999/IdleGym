
function giveExp(number){
    exp = parseInt(document.getElementById("exp").innerHTML);
    lvl = parseInt(document.getElementById("lvl").innerHTML);
    exp = exp + number;
    if (exp > 100){
        lvl = lvl + 1;
        exp = 0;
    }

    document.getElementById("exp").innerHTML = exp;
    document.getElementById("lvl").innerHTML = lvl;
}

function buyExp(number){
    money = parseInt(document.getElementById("currmoney").innerHTML);
    if (money >= number){
        money = money - number;
        document.getElementById("currmoney").innerHTML = money;
        giveExp(33);
    }
    else{
        alert("Not enough money");
    };

};


window.setInterval(function(){
    giveExp(1);
    

}, 1000);
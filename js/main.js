var pt = 0
var x = 0.01
var y = 0
var z = 1
var t1u1 = 0
var t1u2 = 0
var potential = 1;
var pmult = 1;
var ty = 0;
var vy = 0;
var hs = 32;
var visual = 0;

var devspeed = 1;


setInterval(function(){
pt += 0.05 * devspeed
x = (0.001 + (t1u1 * 0.001)) * (Math.pow(2,t1u2))
t=1

document.getElementById("tText").innerHTML = "t = " + Math.round(t);
document.getElementById("xText").innerHTML = "x = " + x.toFixed(3);
y += x * z * devspeed
ty += x * z * devspeed
vy = Math.log10(y) - Math.floor(Math.log10(y))
visual = (vy * 9 + 1).toFixed(2) + "e" + Math.floor(Math.log10(y))

if(y <= 1000000){document.getElementById("yText").innerHTML = "y = " + y.toFixed(2);}
else{document.getElementById("yText").innerHTML = "y = " + visual}

document.getElementById("11cost").innerHTML =  0.1 * Math.pow(2,t1u1).toFixed(2);
document.getElementById("12cost").innerHTML =  3 * Math.pow(5,t1u2).toFixed(2);

potential = Math.pow(ty, 0.4) / 2
if(ty >= hs){document.getElementById("potentialtext").innerHTML = potential.toFixed(2);}
if(ty < hs){document.getElementById("potentialtext").innerHTML = "Reach y ≥ " + Math.floor(hs) + " to prestige"}

}, 50)

document.getElementById("t1u1").onclick = function(){
    if(y >= 0.1 * Math.pow(2,t1u1)){
    y -= 0.1 * Math.pow(2,t1u1)
    t1u1 += 1}
}
document.getElementById("t1u2").onclick = function(){
    if(y >= 3 * Math.pow(5,t1u2)){
    y -= 3 * Math.pow(5,t1u2)
    t1u2 += 1}
}

document.getElementById("prestige").onclick = function(){
    if(confirm("Reset all variables to increase z by " + potential / z + "x")){
    hs = ty
    t = 0;
    y = 0;
    ty = 0;
    vy = 0;
    pt = 0;
    t1u1 = 0;
    t1u2 = 0;
    z = potential
    }
}
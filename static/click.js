const cookieBtn = document.getElementById("cookie")
const cookieLabel = document.getElementById("cookies")

const clickerBtn = document.getElementById("buy-cursor")
const clickerLabel = document.getElementById("clickers")

const grandmaLabel = document.getElementById("grandmas")
const grandmaBtn = document.getElementById("buy-grandma")
const bakerLabel = document.getElementById("bakers");
const bakerBtn = document.getElementById("buy-baker");


let bakerPrice = 100;
let bakers = 0;
let cookies = 0
let clickers = 1
let grandmas = 0

function updateLabels() {
    cookieLabel.innerHTML = "Cookies:" +cookies
    clickerLabel.innerHTML = "clickers:" + clickers
    grandmaLabel.innerHTML = "grandmas:" +  grandmas
    bakerLabel.innerHTML = "Bakers: " + bakers + " | Cost: " + bakerPrice;
}

updateLabels()

cookieBtn.onclick = function(){
    cookies = cookies+clickers
    updateLabels()

    console.log("you have clicked the cookie")
    console.log(cookies)

}

cookieLabel.onclick = function(){
    
    console.log("+1 cookie")
}

clickerBtn.onclick = function(){
  if (cookies >= 10) {
    cookies = cookies -10;
    clickers++;
    updateLabels();
}
}

grandmaBtn.onclick = function(){
  if (cookies >= 50) {
    cookies = cookies - 50;
    grandmas++;
    updateLabels();
}
}

setInterval(function () {
    cookies = cookies + grandmas
    updateLabels()
}, 1000);




let grandmaPrice = 50;

grandmaBtn.onclick = function () {
    if (cookies >= grandmaPrice) {
        cookies -= grandmaPrice;
        grandmas++;

        grandmaPrice = Math.floor(grandmaPrice * 1.15);

        updateLabels();
    }
}


clickerBtn.onclick = function () {
    if (cookies >= clickerPrice) {
        cookies -= clickerPrice;
        clickers++;

        clickerPrice = Math.floor(clickerPrice * 1.15);

        updateLabels();
    }
}
bakerBtn.onclick = function () {
    if (cookies >= bakerPrice) {
        cookies -= bakerPrice;
        bakers++;

        bakerPrice = Math.floor(bakerPrice * 1.15);

        updateLabels();
    }
}

setInterval(function () {
    cookies = cookies + grandmas + (bakers * 3);
    updateLabels();
}, 1000);
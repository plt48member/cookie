const cookieBtn = document.getElementById("cookie");
const cookieLabel = document.getElementById("cookies");

const clickerBtn = document.getElementById("buy-cursor");
const clickerLabel = document.getElementById("clickers");

const grandmaLabel = document.getElementById("grandmas");
const grandmaBtn = document.getElementById("buy-grandma");

const bakerLabel = document.getElementById("bakers");
const bakerBtn = document.getElementById("buy-baker");

const maxLabel = document.getElementById("maxs")
const maxBtn = document.getElementById("buy-maxs")

const clickerPriceLabel = document.getElementById("clickerPrice");
const grandmaPriceLabel = document.getElementById("grandmaPrice");
const bakerPriceLabel = document.getElementById("bakerPrice");
const maxPriceLabel = document.getElementById("maxsPrice");
const cpsLabel = document.getElementById("cps");



let cookies = 0;

let clickers = 1;
let grandmas = 0;
let bakers = 0;
let maxs = 0;


let clickerPrice = 10;
let grandmaPrice = 50;
let bakerPrice = 100;
let maxsPrice = 500;


let cps = 0;

function updateLabels() {

   cps = grandmas + (bakers * 3) + (maxs * 10);

    cookieLabel.innerHTML = "Cookies: " + Math.floor(cookies);

    clickerLabel.innerHTML =
        "Clickers: " + clickers + " | Cost: " + clickerPrice;

    grandmaLabel.innerHTML =
        "Grandmas: " + grandmas + " | Cost: " + grandmaPrice;

    bakerLabel.innerHTML =
        "Bakers: " + bakers + " | Cost: " + bakerPrice;

        maxLabel.innerHTML =
        "Maxs: " + maxs + " | Cost: " + maxsPrice;
       

    clickerPriceLabel.innerHTML = clickerPrice;
    grandmaPriceLabel.innerHTML = grandmaPrice;
    bakerPriceLabel.innerHTML = bakerPrice;
    maxPriceLabel.innerHTML = maxsPrice;

    cpsLabel.innerHTML = "Cookies Per Second: " + cps;

   
}

updateLabels();

// Click Cookie

cookieBtn.onclick = function () {

    cookies += clickers;

    updateLabels();

};

// Buy Clicker

clickerBtn.onclick = function () {

    if (cookies >= clickerPrice) {

        cookies -= clickerPrice;

        clickers++;

        clickerPrice = Math.round(clickerPrice * 1.15);

        updateLabels();

    }

};

// Buy Grandma

grandmaBtn.onclick = function () {

    if (cookies >= grandmaPrice) {

        cookies -= grandmaPrice;

        grandmas++;

        grandmaPrice = Math.round(grandmaPrice * 1.15);

        updateLabels();

    }

};

// Buy Baker

bakerBtn.onclick = function () {

    if (cookies >= bakerPrice) {

        cookies -= bakerPrice;

        bakers++;

        bakerPrice = Math.round(bakerPrice * 1.15);

        updateLabels();

    }

};


maxBtn.onclick = function(){
     if (cookies >= maxsPrice) {

        cookies -= maxsPrice;

        maxs++;

        maxsPrice = Math.round(maxsPrice * 1.15);

        updateLabels();

    }
}

// Automatic Cookies

setInterval(function () {

    cookies += cps;

    updateLabels();

},1000);
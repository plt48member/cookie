const cookieBtn = document.getElementById("cookie")
const cookieLabel = document.getElementById("cookies")

const clickerBtn = document.getElementById("buy-cursor")
const clickerLabel = document.getElementById("clickers")

const grandmaLabel = document.getElementById("grandmas")
const grandmaBtn = document.getElementById("buy-grandma")

const bakerLabel = document.getElementById("bakers")
const bakerBtn = document.getElementById("buy-baker")

let cookies = 0
let clickers = 1
let grandmas = 0
let baker = 0

function updateLabels() {
    cookieLabel.innerHTML = "Cookies:" + cookies
    clickerLabel.innerHTML = "clickers:" + clickers
    grandmaLabel.innerHTML = "grandmas:" +  grandmas
    bakerLabel.innerHTML = "bakers:" + bakers
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




bakerBtn.onclick = function (){
    if(cookies >= 100)
        cookies = cookies - 100
    bakers++;
    updateLabels()
}

setInterval(function () {
    cookies = cookies + bakers
    updateLabels()
}, 1000);

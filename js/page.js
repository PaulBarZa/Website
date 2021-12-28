var projects = {
    actilityTitle : "Web application Frontend & Backend",
    actilityProject : "From July to the end of December 2020, I did an internship in the company <a href='https://www.actility.com' target='_blank' class='link-actility'>Actility</a>. My project was to develop a web application to drive a LoRaWAN network.<br><br><span class='colored'>Key learnings:</span> Angular, Go, REST API, LoRaWAN network, Linux.",
    androidTitle : "Android application",
    androidProject : "As part of a school project I was able to develop a very simple application that allows you to scan food products and get information on the product's impact on health and the environment.<br><br><span class='colored'>Stack:</span> Android studio, Kotlin. ",
    minesweeperTitle : "Minewseeper AI",
    minesweeperProject : "I have developed two machine learning models to play the mineweeper game. A model by constraint satisfaction and logic and a Double Deep Q-Learning model.<br><br><span class='colored'>Key learnings:</span> Reinforcement learning, Deep neural networks, Python, Machine learning tools (Tensoflow, Keras ...) and constraint satisfaction solvers.",
    webSiteTitle : "This website",
    webSiteProject : "The objective of this project was to have fun while reinforcing my mastery of the basic tools of web development.<br><br><span class='colored'>Stack:</span> HTML/CSS, Javascript.",
}

const yellow = "#ffce00";
const black = "rgb(34, 34, 34)";
const orange = "#f7892f";
const bgOrange = "#c96f25";

const ratio = .3
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add("reveal-element")

            var section_2 = document.getElementById("sec-2");
            
            if(section_2.querySelector(".reveal-element") != null){

                var i = 1
                section_2.querySelectorAll('.circle').forEach(function(el){
                    el.classList.add("circle-"+i)
                    i++
                })

                var y = 1
                section_2.querySelectorAll('.line').forEach(function(el){
                    el.classList.add("line-"+y)
                    y++
                })
            }
            observer.unobserve(entry.target)
        }
    })
}

window.onload = function () {
    switchText(1);
    document.getElementById("form").reset();
    var observer = new IntersectionObserver(handleIntersect, options);
    document.querySelectorAll('.reveal').forEach(function (r) {
        observer.observe(r);
    })
};

window.onscroll = function () {
    var scroll_up_classList = document.getElementById("scroll_up").classList;
    if(document.documentElement.scrollTop > 350){
        scroll_up_classList.add("reveal-element");
    }else{
        scroll_up_classList.remove("reveal-element");
    }
    switchLanguage();
};

function switchColor(){
    var body = document.querySelector('body');
    var color = body.style.getPropertyValue("--color");
    if(color == yellow){
        changeColor(orange, bgOrange, yellow);
        document.querySelector("body").querySelectorAll(".card").forEach(function (card){
            card.style.setProperty("box-shadow", "0 45px 100px rgba(14, 21, 47, 0.4), 0 16px 40px rgba(14, 21, 47, 0.4)")
        });
    }else{
        changeColor(yellow, black, orange);
        document.querySelector("body").querySelectorAll(".card").forEach(function (card){
            card.style.setProperty("box-shadow", "0px 0px 4px 1px #ffce00")
        });
    }
}

function changeColor(color, bgcolor, otherColor){
    var body = document.querySelector('body');
    
    body.style.setProperty("--color", color);
    body.style.setProperty("--bgcolor", bgcolor);
    document.querySelector("body").querySelector(".circle").style.setProperty("background-color", otherColor);
    document.querySelector("body").querySelector(".color").style.setProperty("color", otherColor);
}

function flipcard(){
    var section_2 = document.getElementById("sec-2");
    var card = section_2.querySelector(".card");

    card.classList.toggle("flip");
    setTimeout(()=>{
        card.querySelector(".card-front").classList.toggle("hidden");
    },200)
}

function switchText(id){
    for (let i = 1; i < 5; i++) {
        document.getElementById(i).style.fontWeight = "normal";
    }
    var button = document.getElementById("see-more");
    switch(id) {
        case 1:
            changeText(projects["minesweeperTitle"], projects["minesweeperProject"]);
            button.setAttribute("onClick", "javascript:window.open('https://github.com/PaulBarZa/minesweeper_machine_learning', '_blank');");
            button.hidden = false;
            break;
        case 2:
            changeText(projects["actilityTitle"], projects["actilityProject"]);
            button.hidden = true;
            break;
        case 3:
            changeText(projects["androidTitle"], projects["androidProject"]);
            button.setAttribute("onClick", "javascript:window.open('https://github.com/PaulBarZa/Orange_App', '_blank');");
            button.hidden = false;
            break;
        case 4:
            changeText(projects["webSiteTitle"], projects["webSiteProject"]);
            button.setAttribute("onClick", "javascript:window.open('https://github.com/PaulBarZa/Cv_Paul_Barthe', '_blank');");
            button.hidden = false;
    }

    document.getElementById(id).style.fontWeight = "bold";
}

function changeText(title, text){
    document.getElementById('title').innerHTML = title;
    document.getElementById('text').innerHTML = text;    
}


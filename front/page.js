const actilityTitle = "Web application Frontend & Backend"
const actilityProject = "From July to the end of December 2020, I did an internship in the company <a href='https://www.actility.com' target='_blank' class='link-actility'>Actility</a>. My project was to develop a web application to drive a LoRaWAN network.<br><br><span class='colored'>Key learnings:</span> Angular, Go, REST API, LoRaWAN network, Linux."

const androidTitle = "Android Title"
const androidProject ="This is the content of my future android project"

const schoolTitle = "School Project Title"
const schoolProject ="This is the content of my future school project"

const webSiteTitle = "This website"
const webSiteProject ="The objective of this project was to have fun while reinforcing my mastery of the basic tools of web development.<br><br><span class='colored'>Stack:</span> HTML/CSS, Javascript, Node.js."

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
    var form = document.getElementById("form").onsubmit = submitted.bind(form);

    var observer = new IntersectionObserver(handleIntersect, options);
    document.querySelectorAll('.reveal').forEach(function (r) {
        observer.observe(r);
    })
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
        document.getElementById('el'+i).style.fontWeight = "normal";
    }

    switch(id) {
        case 1:
            changeText(actilityTitle, actilityProject);
            break;
        case 2:
            changeText(androidTitle, androidProject);
            break;
        case 3:
            changeText(schoolTitle, schoolProject);
            break;
        default:
            changeText(webSiteTitle, webSiteProject);
    }

    document.getElementById('el'+id).style.fontWeight = "bold";
}

function changeText(title, text){
    document.getElementById('title').innerHTML = title;
    document.getElementById('text').innerHTML = text;    
}

function submitted(event){

    event.preventDefault();

    var form =  document.getElementById("form");
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var mail = document.getElementById("mail").value;
    var message = document.getElementById("message").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/sendmail", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    var data = JSON.stringify({"name": name, "mail": mail, "phone": phone,"message": message});
    xhr.send(data);

    form.reset();
}

function openModal(){

    if (document.getElementById("form").checkValidity() == true){
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];
    
        modal.style.display = "block";
    
        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
}
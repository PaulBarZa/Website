var actilityTitle = "Web application Frontend & Backend"
var actilityProject = "From July to the end of December 2020, I did an internship in the company <a href='https://www.actility.com' target='_blank' class='link-actility'>Actility</a>. My project was to develop a web application to drive a LoRaWAN network.<br><br><span class='colored'>Key learnings:</span> Angular, Go, HTML/CSS, Typescript, REST API, LoRaWAN network operation, Linux."

var androidTitle = "Android Title"
var androidProject ="This is the content of my future android project"

var schoolTitle = "School Project Title"
var schoolProject ="This is the content of my future school project"

var webSiteTitle = "This web site"
var webSiteProject ="The objective of this project was to have fun while reinforcing my mastery of the basic tools of web development.<br><br><span class='colored'>Stack:</span> HTML/CSS, Javascript, Node.js."

window.onload = function () {
    changeText(1);
};

function changeText(id){

    for (let i = 1; i < 5; i++) {
        document.getElementById('el'+i).style.color = "white";
    }

    if(id==1){
        document.getElementById('title').innerHTML = actilityTitle;
        document.getElementById('text').innerHTML =actilityProject;
    } else if(id==2){
        document.getElementById('title').innerHTML = androidTitle;
        document.getElementById('text').innerHTML =androidProject;
    } else if(id==3){
        document.getElementById('title').innerHTML = schoolTitle;
        document.getElementById('text').innerHTML =schoolProject;
    } else if(id==4){
        document.getElementById('title').innerHTML = webSiteTitle;
        document.getElementById('text').innerHTML =webSiteProject;
    }
    document.getElementById('el'+id).style.color = "#ffce00";
}
const actilityTitle = "Web application Frontend & Backend"
const actilityProject = "From July to the end of December 2020, I did an internship in the company <a href='https://www.actility.com' target='_blank' class='link-actility'>Actility</a>. My project was to develop a web application to drive a LoRaWAN network.<br><br><span class='colored'>Key learnings:</span> Angular, Go, REST API, LoRaWAN network, Linux."

const androidTitle = "Android Title"
const androidProject ="This is the content of my future android project"

const schoolTitle = "School Project Title"
const schoolProject ="This is the content of my future school project"

const webSiteTitle = "This website"
const webSiteProject ="The objective of this project was to have fun while reinforcing my mastery of the basic tools of web development.<br><br><span class='colored'>Stack:</span> HTML/CSS, Javascript, Node.js."

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

            var section_2 = document.getElementById("sec-2")
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

                section_2.querySelector('.right-zone').classList.add("reveal-right-zone");
            }
            observer.unobserve(entry.target)
        }
    })
}

window.onload = function () {
    changeText(1);
    var form = document.getElementById("form").onsubmit = submitted.bind(form);

    var observer = new IntersectionObserver(handleIntersect, options)
    document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r)
})
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
        document.getElementById('text').innerHTML = webSiteProject;
    }
    document.getElementById('el'+id).style.color = "#ffce00";
}

function submitted(event){

    event.preventDefault();

    var form =  document.getElementById("form");
    var name = document.getElementById("name").value
    var phone = document.getElementById("phone").value
    var mail = document.getElementById("mail").value
    var message = document.getElementById("message").value

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/sendmail", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    var data = JSON.stringify({"name": name, "mail": mail, "phone": phone,"message": message});
    xhr.send(data)

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
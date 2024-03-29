const language = {
    eng: {
        resume:{
            download: "Download my resume",
            link: "window.open('ressources/paul_barthe_resume.pdf')",
        },
        header:{
            part_1: 'EDUCATION',
            part_2: 'PROJECTS',
            part_3: 'CONTACT',
        },
        section_1:{
            title_1: 'I AM',
            title_3: 'A RANDOM GUY',
            title_4: '(WHO LIKES COMPUTER SCIENCE)',
        },
        section_2:{
            circle_1:{
                title: 'Highscool diploma',
                text: 'Caen, France | September 2014 - June 2017',
                subtext: 'Scientific section with mathematics speciality.',
            },
            circle_2:{
                title: 'Concours Avenir',
                text: 'Rouen, France | June 2017',
                subtext: "Successful completion of the 'Avenir' competition and<br> eligible for admission to the EPF engineering school.",
            },
            circle_3:{
                title: 'End of the EPF general cycle',
                text: 'Sceaux, France | September 2017 - June 2020',
                subtext: "Equivalent of a bachelor's degree in engineering.",
            },
            circle_4:{
                title: 'EPF computer science speciality',
                text: 'Sceaux, France | September 2020 - August 2022',
                subtext: "Equivalent of a master's degree in computer engineering.",
            },
            title_1: "Competences:",
            courses_2: " I'm comfortable on Linux (<3) and Windows system.",
            courses_title_3: "Languages:",
            courses_3: " French (Native language), English level C1 (TOEIC 895/990), Spanish level B2.",
            title_2: "Main courses at the EPF engineering school:",
            courses_title_4: "Computer science:",
            courses_4: " Python, C++, Java, SQL, IA, logic and probabilities, Neural Networks, Big Data, Unix / Linux environment, APIs, Security, Virtualisation, Cryptography, Networks and infrastructure and Introduction to quantum computing.",
            courses_title_5: "Mathematics:",
            courses_5: " Statistics engineering, Probalities and applications, Calculating processes, Mathematical tools for the engineer",
            courses_title_6: "Others:",
            courses_6: " English, Spanish, Physics, Elctromagnetics, Thermodynamics, Mechanics...",
            button: "SCHOOL WEBSITE"
        },
        section_3:{
            li:{
                title_1: "End of study internship",
                title_2: "AI Projects",
                title_3: "Intern in web development",
                title_4: "Some projects",
            },
            projects:{
                cytomineTitle: "Cytomine",
                cytomineProject: "Currently through my end of study internship (from February to August 2022), I am participating in the integration of machine learning solutions in the <a href='https://cytomine.com/' target='_blank' class='link-actility'>Cytomine</a> platform. Cytomine is an open source platform for collaborative analysis of multi-gigapixel medical images<br><br>Also did some Backend / Frontend stuff and worked on optimising the launch of the algorithms.",
                cytomineButton: "https://github.com/cytomine",
                aiTitle : ["Minewseeper", "Sushi"],
                aiProject : ["I have developed two machine learning models to play the mineweeper game. One with <span class='colored'>constraint satisfaction and logic</span> and one with <span class='colored'>Double Deep Q-Learning</span>.",  "Sushi classification with <span class='colored'>Deep learning, Extra trees and Support Vector Classifier</span>.<br><br>Sushi generation with <span class='colored'>GAN networks</span>.<a href='sushi.html' class='link-actility'>Try it here !</a>"],
                aiButton: ["https://github.com/PaulBarZa/minesweeper_machine_learning", "https://github.com/PaulBarZa/Sushi_Classification"],
                aiButtonText: [" Minesweeper", " Sushi"],
                actilityTitle : "Web application Frontend & Backend",
                actilityProject : "From July to the end of December 2020, I did an internship in the company <a href='https://www.actility.com' target='_blank' class='link-actility'>Actility</a>. My project was to develop a web application to drive a LoRaWAN network.<br><br><span class='colored'>Key learnings:</span> Angular, Go, REST API, LoRaWAN network.",
                otherstuffTitle: "Some projects",
                otherstuffProject: "<a href='https://github.com/PaulBarZa/Website' target='_blank' class='link-actility'>This website</a><br><span class='colored'>Stack:</span> HTML/CSS, Javascript.<br><br>Frontend development for <a href='https://www.gamingsquad.io/' target='_blank' class='link-actility'>Gaming Squad</a><br><span class='colored'>Stack:</span> ReactJS.",
            }
        },
        section_4:{
            title: "CONTACT",
            text: "Student looking for experience and learning, you can contact me via e-mail, phone, linkedin or via the contact form.",
            phone: "Phone",
            number_phone: "+337 81 09 14 85",
            form:{
                title: "CONTACT FORM", 
                name: "Your name :",
                phone: "Your phone :",
                email: "Your e-mail :", 
                sendMessage: "SEND MESSAGE&nbsp;"        
            }
        },
        modal: "Thank you for your message ! I will answer you as soon as possible.",
        en: "&nbsp;&nbsp;English&nbsp;&nbsp;",
        fr: "&nbsp;&nbsp;French&nbsp;&nbsp;",
        color: "COLOR",
    },
    fr: {
        resume:{
            download: "Télécharger mon CV",
            link: "window.open('ressources/paul_barthe_resume_fr.pdf')",
        },
        header:{
            part_1: 'FORMATION',
            part_2: 'PROJETS',
            part_3: 'CONTACT',
        },
        section_1:{
            title_1: 'JE SUIS',
            title_3: 'UN SIMPLE TYPE',
            title_4: "(QUI AIME L'INFORMATIQUE)",
        },
        section_2:{
            circle_1:{
                title: 'Baccalauréat',
                text: 'Caen, France | Septembre 2014 - Juin 2017',
                subtext: 'Baccalauréat scientifique spécialité mathématiques.',
            },
            circle_2:{
                title: 'Concours Avenir',
                text: 'Rouen, France | Juin 2017',
                subtext: "Réussite du concours Avenir et éligible à<br>l'EPF école d'ingénieurs.",
            },
            circle_3:{
                title: 'Fin du cycle généraliste',
                text: 'Sceaux, France | Septembre 2017 - Juin 2020',
                subtext: "Fin du cycle d'ingénérie généraliste.",
            },
            circle_4:{
                title: 'Spécialité informatique',
                text: 'Sceaux, France | Septembre 2020 - Juin 2022',
                subtext: 'Scpécialité informatique de deux ans.',
            },
            title_1: "Compétences:",
            courses_2: " Je suis à l'aise sur les systèmes Linux (<3) et Windows.",
            courses_title_3: "Langues:",
            courses_3: " Français (langue natale), Anglais niveau C1 (TOEIC 895/990), Espagnol niveau B2.",
            title_2: "Cours principaux à l'EPF école d'ingénieurs:",
            courses_title_4: "Informatique:",
            courses_4: " Python, C++, Java, SQL, IA, logique et probabilités, Réseau de neurones, Big Data, Unix / Linux, APIs, Virtualisation, Cryptographie, Réseaux et infrastructures, Sécurité informatique et Introduction à l'informatique quantique.",
            courses_title_5: "Mathématiques:",
            courses_5: " Ingénierie statistique, Probalities et applications, Processus de calcul, Outils mathématiques pour l'ingénieur.",
            courses_title_6: "Autres:",
            courses_6: " Anglais, Espagnol, Physique, Electromagnétique, Thermodynamique, Mécanique ...",
            button: "SITE DE L'ECOLE"
        },
        section_3:{
            li:{
                title_1: "Projet de fin d'étude",
                title_2: "Projets en IA",
                title_3: "Stage de web développeur",
                title_4: "Projets autres",
            },
            projects: {
                cytomineTitle:"Cytomine",
                cytomineProject:"Actuellement dans mon stage de fin d'étude (de février à août 2022), je participe à l'intégration de solutions de machine learning dans la plateforme <a href='https://cytomine.com/' target='_blank' class='link-actility'>Cytomine</a>. Cytomine est une plateforme open source permettant l'analyse collaborative d'images médicales de très grandes tailles.<br><br>J'ai également effectué des travaux Backend / Frontend et travaillé sur l'optimisation du lancement des algorithmes.<br>",
                cytomineButton: "https://github.com/cytomine",
                aiTitle: ["Démineur", "Sushi"],
                aiProject: ["Modèles de machine learning pour le jeu du démineur. Un par <span class='colored'>satisfaction de contraintes et logique</span> et un par <span class='colored'>double apprentissage profond par renforcement</span>", "Classification de sushi à l'aide <span class='colored'>d'apprentissage profond, de forêts aléatoires extrêmes et de machine à vecteur de support.</span>.<br><br>Génération de sushi à l'aide d'un <span class='colored'>GAN.</span>.<a href='sushi.html' class='link-actility'>Testez le !</a>"],
                aiButton: ["https://github.com/PaulBarZa/minesweeper_machine_learning", "https://github.com/PaulBarZa/Sushi_Classification"],
                aiButtonText: [" Démineur", " Sushi"],
                actilityTitle: "Application web Frontend & Backend",
                actilityProject: "De juillet à fin décembre 2020, j'ai effectué un stage dans l'entreprise <a href='https://www.actility.com' target='_blank' class='link-actility'>Actility</a>. J'ai développé une application web visant à piloter un réseau LoRaWAN.<br><br><span class='colored'>Principaux enseignements:</span> Angular, Go, REST API, réseau LoRaWAN.",
                otherstuffTitle: "Projets autres",
                otherstuffProject: "<a href='https://github.com/PaulBarZa/Website' target='_blank' class='link-actility'>Ce site</a><br><span class='colored'>Stack:</span> HTML/CSS, Javascript.<br><br>Développement frontend pour <a href='https://www.gamingsquad.io/' target='_blank' class='link-actility'>Gaming Squad</a><br><span class='colored'>Stack:</span> ReactJS.",
            }
        }, 
        section_4:{
            title: "CONTACT",
            text: "Etudiant à la recherche d'expérience et d'apprentissage, vous pouvez me contacter par e-mail, téléphone, linkedin ou via le formulaire de contact.",
            phone: "Téléphone",
            number_phone: "07 81 09 14 85",
            form:{
                title: "FORMULAIRE", 
                name: "Votre nom :",
                phone: "Votre téléphone :",
                email: "Votre e-mail :", 
                sendMessage: "ENVOIE DU MESSAGE&nbsp;"        
            }
        },
        modal: "Merci pour votre message ! Une réponse vous sera transmise dans les plus brefs délais.",
        en: "&nbsp;&nbsp;Anglais&nbsp;&nbsp;",
        fr: "&nbsp;&nbsp;Français&nbsp;&nbsp;",
        color: "COULEUR",
    }
}

function switchLanguage() {
    var isChecked = document.getElementById("header_row").querySelector("input").checked;

    if (isChecked){
        changeLang(language.fr);
    }else{
        changeLang(language.eng);
    }
}

function changeLang(lang){
    // Download resume
    var resume_button = document.getElementById("download_resume")
    resume_button.textContent = lang.resume.download
    console.log(resume_button.getAttribute("onClick"))
    resume_button.setAttribute("onClick", lang.resume.link)
    // Header
    var headers = document.querySelectorAll(".parts");

    var i = 1;
    headers[0].querySelectorAll("a").forEach(function(el){
        el.textContent = lang.header["part_"+i];
        i++;
    });

    var sec_2_parts = headers[1].querySelectorAll("a");
    sec_2_parts[0].querySelector(".colored").textContent = lang.header.part_1;
    sec_2_parts[1].textContent = lang.header.part_2;
    sec_2_parts[2].textContent = lang.header.part_3;

    var sec_3_parts = headers[2].querySelectorAll("a");
    sec_3_parts[0].textContent = lang.header.part_1;
    sec_3_parts[1].querySelector(".colored").textContent = lang.header.part_2;
    sec_3_parts[2].textContent = lang.header.part_3;

    var sec_4_parts = headers[3].querySelectorAll("a");
    sec_4_parts[0].textContent = lang.header.part_1;
    sec_4_parts[1].textContent = lang.header.part_2;
    sec_4_parts[2].querySelector(".colored").textContent = lang.header.part_3;
    
    // Section 1
    var sec_1 = document.getElementById("sec-1");
    var lg_sec_1 = lang.section_1;

    sec_1.querySelector(".body-first-part").textContent = lg_sec_1.title_1;
    sec_1.querySelectorAll(".body-third-part")[0].textContent = lg_sec_1.title_3;
    sec_1.querySelectorAll(".body-third-part")[1].textContent = lg_sec_1.title_4;

    // Section 2
    var sec_2 = document.getElementById("sec-2");
    var lg_sec_2 = lang.section_2;

    var i = 1;
    sec_2.querySelectorAll(".circle").forEach(function(el) {
        changeEducLang(el, i, lg_sec_2);
        i++;
    });

    var titles = sec_2.querySelectorAll(".courses-title");
    titles[0].textContent = lg_sec_2.title_1;
    titles[1].textContent = lg_sec_2.title_2;

    var courses = sec_2.querySelectorAll(".courses");
    courses[1].querySelector(".content").textContent = lg_sec_2.courses_2;

    courses[2].querySelector(".colored").textContent = lg_sec_2.courses_title_3;
    courses[2].querySelector(".content").textContent = lg_sec_2.courses_3;

    courses[3].querySelector(".colored").textContent = lg_sec_2.courses_title_4;
    courses[3].querySelector(".content").textContent = lg_sec_2.courses_4;

    courses[4].querySelector(".colored").textContent = lg_sec_2.courses_title_5;
    courses[4].querySelector(".content").textContent = lg_sec_2.courses_5;

    courses[5].querySelector(".colored").textContent = lg_sec_2.courses_title_6;
    courses[5].querySelector(".content").textContent = lg_sec_2.courses_6;

    sec_2.querySelector("button").textContent = lg_sec_2.button;

    // Section 3
    var sec_3 = document.getElementById("sec-3");
    var lg_sec_3 = lang.section_3;

    var i = 1;
    sec_3.querySelectorAll("li").forEach(function(el) {
        var a = el.querySelector("a");

        a.textContent = lg_sec_3.li["title_"+i];

        if(a.style.fontWeight == "bold"){
            projects = lg_sec_3.projects; 
            switchText(i)
            a.click();
        }
        i++;
    })

    // Section 4
    var sec_4 = document.getElementById("sec-4");
    var lg_sec_4 = lang.section_4;

    var text = sec_4.querySelectorAll("p");
    text[0].textContent = lg_sec_4.text;
    text[1].textContent = lg_sec_4.number_phone;

    sec_4.querySelectorAll(".subtitle")[0].textContent = lg_sec_4.phone;

    sec_4.querySelectorAll(".title")[1].textContent = lg_sec_4.form.title;

    var inputs = sec_4.querySelectorAll(".input-message");
    inputs[0].textContent = lg_sec_4.form.name;
    inputs[1].textContent = lg_sec_4.form.phone;
    inputs[2].textContent = lg_sec_4.form.email;

    sec_4.querySelector(".message").innerHTML = lg_sec_4.form.sendMessage;
    
    // Global
    document.querySelector(".modal-message").textContent = lang.modal;
}

function changeEducLang(part, index, lang){
    part.querySelector(".title-text").innerHTML = lang["circle_"+index].title;
    part.querySelector(".text").innerHTML = lang["circle_"+index].text;
    part.querySelector(".subtext").innerHTML = lang["circle_"+index].subtext;
}


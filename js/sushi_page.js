const TARGET_CLASSES = [
    "Abokado Maki",
    "Aji",
    "Akagai", 
    "Akami",
    "Amaebi",
    "Ankimo",
    "Aoyagi",
    "Awabi",
    "Battera Sushi",
    "California Roll",
    "Daikon Oshinko Maki",
    "Ebi Nigiri",
    "Funazushi",
    "Futomaki",
    "Gyu Nigiri",
    "Hamaguri",
    "Hamo",
    "Hirame & Karei",
    "Hokkigai",
    "Hotate Nigiri",
    "Ika Nigiri",
    "Ikura Gunkan",
    "Inarizushi",
    "Kamaboko Kani",
    "Kanpyomaki",
    "Kappa Maki",
    "Kazunoko",
    "Kohada",
    "Kuruma",
    "Meharizushi",
    "Mirugai",
    "Natto Maki",
    "Negitoro",
    "Saba",
    "Sake Nigiri",
    "Sayori",
    "Shako Nigiri",
    "Shirasu",
    "Shiroebi",
    "Tai & Madai",
    "Tako Nigiri",
    "Tamagoyaki",
    "Tekkamaki", 
    "Temaki", 
    "Temarizushi",
    "Tobiko Nigiri",
    "Torigai",
    "Toro",
    "Unagi",
    "Uni"
]

var model;
var preview;
var input;
var curFiles;
var body;
var card;
var sushi_selector_index = 0;

window.onload = async function () {
    body =  document.querySelector("body")
    card = body.querySelector(".card")
    input = card.querySelector("input");
    preview = body.querySelector(".preview");
    panda = body.querySelector(".panda");

    card.querySelector("label").classList.remove("shake")
    input.addEventListener('change', updateImageDisplay);
    card.classList.add("reveal-element");
    panda.classList.add("reveal-element");

    switchSushiMode("prediction");

    model = await tf.loadLayersModel("../models/model.json");
}


function switchSushiMode(sushi_mode) {
    var prediction_div = document.getElementById("prediction");
    var generation_div = document.getElementById("generation");
    var prediction_part = document.querySelector(".prediction_part");
    var generation_part = document.querySelector(".generation_part");
    var footer = document.querySelector(".footer");

    if(sushi_mode == "prediction"){
        switchMode(prediction_div, generation_div, prediction_part, generation_part)
        footer.style.display = "none"
    }else{
        switchMode(generation_div, prediction_div, generation_part, prediction_part)
        footer.style.display = "flex"
    }
}

function switchMode(selected_div, unselected_div, selected_part, unselected_part) {
    selected_div.classList.add("selected")
    unselected_div.classList.remove("selected")
    selected_part.style.display = "flex"
    unselected_part.style.display = "none"
}

function updateImageDisplay() {
    curFiles = input.files;
    if(curFiles.length === 0) {
      preview.querySelector("p").innerHTML = 'No file uploaded';
    } else {
      preview.querySelector("p").innerHTML = curFiles[0].name
    }   
}

function predict() {
    var imageType = /image.*/;

    if(curFiles == undefined){
        card.querySelector("label").classList.add("shake")
        setTimeout(function() {
            card.querySelector("label").classList.remove("shake")
        }, 900);        
    }
    else if(!curFiles[0].type.match(imageType)){
        preview.querySelector("p").innerHTML = 'File not supported';
        curFiles = undefined;
    }
    else
    {
        var file = curFiles[0]
        var img = new Image();
        img.src = URL.createObjectURL(file);

        img.onload = function () {
            let tensor = tf.browser.fromPixels(this)
                .resizeNearestNeighbor([192, 192])
                .toFloat()
                .div(tf.scalar(127.5))
                .sub(tf.scalar(1))
                .expandDims();
            model.predict(tensor).data().then(
                x => {
                    var top5 = Array.from(x).map(function(p, i) {
                        return {
                            probability: p,
                            className: TARGET_CLASSES[i]
                        };
                    }).sort(function (a, b) {
                        return b.probability - a.probability;
                    }).slice(0, 5);

                    var container = card.querySelector(".result_container")

                    for (let i = 1; i < 6; i++) {
                        var result = ".result" + i
                        var div = container.querySelector(result)
                        div.querySelector(".name").innerHTML = top5[i-1].className + ": "
                        div.querySelector(".percent").innerHTML = Math.round(top5[i-1].probability * 100) + "%"    
                    }
                    container.classList.add("reveal-element");
                }
            );
        };
    }
}

function generate(){
    image = document.getElementById("generated_image");
    var n_images = 12
    var random_index = Math.floor(Math.random() * n_images)

    switch(sushi_selector_index){
        case 0:
            image.src = "../images/maki/maki_"+random_index+".png"
            break;
        case 1:
            image.src = "../images/panda_sleeping.png"
            // image.src = "../images/nigiri/nigiri"+random_index+".jpg"
            break;
        default:
            image.src = "../images/panda_eating.png"
            // image.src = "../images/ikura_gunkan/ikura_"+random_index+".jpg"
            break;
    }
}

function sushiSelector(sushi_index) {
    sushi_selector_list = document.querySelector(".sushi_selector_container").querySelectorAll('span')
    // Remove actual 
    sushi_selector_list[sushi_selector_index].classList.remove("selected");
    sushi_selector_list[sushi_selector_index].classList.add("unselected");
    // Actualise with current (clicked)
    sushi_selector_list[sushi_index].classList.remove("unselected");
    sushi_selector_list[sushi_index].classList.add("selected");
    sushi_selector_index = sushi_index;
}
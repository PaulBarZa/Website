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

window.onload = async function () {
    body =  document.querySelector("body")
    card = body.querySelector(".card")
    input = card.querySelector("input");
    preview = body.querySelector(".preview");

    card.querySelector("label").classList.remove("shake")
    input.addEventListener('change', updateImageDisplay);
    card.classList.add("reveal-element");

    model = await tf.loadLayersModel("../models/model.json");
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
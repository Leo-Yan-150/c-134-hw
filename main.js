zstatus = "";
objects=[];
babyfound = false;
song = "";

document.getElementById("status").innerHTML = "Status: Detecting objects...";
document.getElementById("babyfound").innerHTML = "Baby not found";

function preload(){
    song = loadSound("alorm.mp3");
}

function setup(){
canvas = createCanvas(380,380);
canvas.center();
video = createCapture(VIDEO);
video.hide();
video.size(380,380);
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
objectDetector.detect(video, gotResult);

}

function draw(){
image(video, 0, 0, 380, 380);

if(zstatus != ""){
        document.getElementById("status").innerHTML = "Status: object identified";
        objectDetector.detect(video, gotResult);
        for(c = 0; c < objects.length; c++){

            if(objects[c].label = "person"){
                babyfound = true;
            }else{
                babyfound = false;
            }
            
        }
        if(babyfound = false){
            song.play();
            document.getElementById("babyfound").innerHTML = "Baby not found";
            console.log("ae");
        }else{
            document.getElementById("babyfound").innerHTML = "Baby found";
            console.log("gfsfgds");
        }

    }
}


function modelLoaded(){
console.log("model has been loaded");
zstatus = "loaded";
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
    zstatus = "loaded";
}
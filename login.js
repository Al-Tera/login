password = document.getElementById("password")
cover1 = document.getElementById("cover1")
cover2 = document.getElementById("cover2")
cogwheel = document.getElementById("cogwheel")
monocular = document.getElementById("monocular")

gemini = document.getElementsByClassName("Gemini")
lowerStar = document.getElementById("lower_Star")

starOpener = document.getElementById("starOpener")
nameCover = document.getElementById("name_Cover")
passCover = document.getElementById("pass_Cover")
inputContainer = document.getElementsByTagName("input")

const tl = new TimelineMax();

function animate_GiantStar(){
    tl.fromTo(starOpener, 0.5, {},
        {   background: "rgba(255, 255, 255, 1)"
        })   
        .fromTo(monocular, 0.5,{},
        {   bottom: "30vh",
            left: "8.5vh"
        })
        .fromTo(gemini, 0.25, {},
        {   transitionDuration: "0.25s",
            opacity: "1",
        },3.5)
        .fromTo(nameCover, 0.25,{},
        {   width: "43.5vh"
        })
        .fromTo(nameCover, 0.5,{},
        {   clipPath: "polygon(0% 0%, 3% 45%, 0% 85%, 87% 85%, 88% 100%, 100% 100%, 92% 0%)"
        })
        .fromTo(passCover, 0.25,{},
        {   width: "43.5vh"
        }, 3.75)
        .fromTo(passCover, 0.5,{},
        {   clipPath: "polygon(0% 0%, 3% 45%, 0% 85%, 87% 85%, 88% 100%, 100% 100%, 92% 0%)"
        }, 4)
        .fromTo(inputContainer, 0.5,{},
        {   opacity: "1",
            pointerEvents: "fill"
        }, 4.5);
}

window.addEventListener('resize', function() {
    x = Math.round((window.innerWidth * 0.06) * 100)/ 100;
    if (x >= 0 && x <= 55){
        monocular.style.transform = "rotateZ(" + x + "deg)";
    }      
});

starOpener.addEventListener('click', function(){
    cover1.style.animationName = "animc1";
    cover2.style.animationName = "animc2";
    cogwheel.style.animationName = "animcog";
    monocular.style.transitionDuration= "1s";
    starOpener.style.pointerEvents = "none";
    starOpener.style.opacity = "0";
    x = Math.round((window.innerWidth * 0.045) * 100)/ 100;

    animate_GiantStar()
    setTimeout(function(){
        monocular.style.transitionDuration= "0.5s";
        monocular.style.clipPath = "polygon(43% 100%, 38% 75%, 35% 75%, 33% 65%, 33% 65%, 33% 55%, 33% 55%, 33% 40%, 60% 40%, 60% 55%, 60% 55%, 60% 65%, 60% 65%, 58% 75%, 55% 75%, 52% 100%)";
    }, 2000);
    setTimeout(function(){
        monocular.style.clipPath = "polygon(43% 100%, 38% 75%, 35% 75%, 33% 65%, 28% 65%, 26% 55%, 26% 55%, 26% 40%, 66% 40%, 66% 55%, 66% 55%, 64% 65%, 60% 65%, 58% 75%, 55% 75%, 52% 100%)";
    }, 2250);
    setTimeout(function(){
        monocular.style.clipPath = "polygon(43% 100%, 38% 75%, 35% 75%, 33% 65%, 28% 65%, 26% 55%, 22% 55%, 18% 40%, 74% 40%, 71% 55%, 67% 55%, 65% 65%, 61% 65%, 59% 75%, 56% 75%, 52% 100%)";
    }, 2400);
    setTimeout(function(){
        monocular.style.transform = "rotateZ(" + x + "deg)";
    }, 3000);
});

password.addEventListener('keyup', function(){
    var val = document.getElementById("password").value;
    var lens = 3;

    if (val != ""){
        if (val.length > 3 && val.length <= 6)
            lens = 2;   
        if (val.length > 6)
            lens = 1;   
        if (val.match(/[0-9]/i) && val.match(/[a-z]/i))
            lens -= 1;         

        if (lens == 2){
            monocular.style.clipPath = "polygon(43% 100%, 38% 75%, 35% 75%, 33% 65%, 28% 65%, 26% 55%, 26% 55%, 26% 55%, 68% 55%, 68% 55%, 68% 55%, 66% 65%, 62% 65%, 60% 75%, 57% 75%, 52% 100%)";  }
        else if (lens == 1){
            monocular.style.clipPath = "polygon(43% 100%, 38% 75%, 35% 75%, 33% 65%, 33% 65%, 33% 65%, 33% 65%, 33% 65%, 62% 65%, 62% 65%, 62% 65%, 62% 65%, 62% 65%, 60% 75%, 57% 75%, 52% 100%)";  }
        else if (lens == 0){
            monocular.style.clipPath = "polygon(43% 100%, 42% 75%, 40% 75%, 40% 75%, 40% 75%, 40% 75%, 40% 75%, 40% 75%, 55% 75%, 55% 75%, 55% 75%, 55% 75%, 55% 75%, 55% 75%, 53% 75%, 52% 100%)";  }
        else{
            monocular.style.clipPath = "polygon(43% 100%, 38% 75%, 35% 75%, 33% 65%, 28% 65%, 26% 55%, 22% 55%, 18% 40%, 75% 40%, 72% 55%, 68% 55%, 66% 65%, 62% 65%, 60% 75%, 57% 75%, 52% 100%)";  }
    }
    else{
        monocular.style.clipPath = "polygon(43% 100%, 38% 75%, 35% 75%, 33% 65%, 28% 65%, 26% 55%, 22% 55%, 18% 40%, 75% 40%, 72% 55%, 68% 55%, 66% 65%, 62% 65%, 60% 75%, 57% 75%, 52% 100%)";  
    }
});

password.addEventListener('focus', function(){
    if (password.classList.contains("focus")){
        lowerStar.style.animationName = "animMiniblink";
        password.classList.remove("focus");
    }
});

lowerStar.addEventListener('mousedown', function(){
    lowerStar.style.animationName = "";

    if (password.classList.contains("passwordMode")){
        password.type = "text";
        password.classList.remove("passwordMode");
    }
    else{
        password.classList.add("passwordMode");
        password.type = "password";
    }
});
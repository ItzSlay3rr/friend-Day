/* ==========================================
   FOR HASHMEEN ❤️
   PART 3A
========================================== */

const loader = document.getElementById("loader");

const notification = document.getElementById("notification");

const hero = document.getElementById("hero");

const gallery = document.getElementById("gallery");

const letter = document.getElementById("letter");

const ending = document.getElementById("ending");

const openBtn = document.getElementById("openMessage");

const startBtn = document.getElementById("beginJourney");

const letterBtn = document.getElementById("letterBtn");

const typing = document.getElementById("typing");

/* -----------------------------
Loader
------------------------------*/

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.style.display = "none";

        },800);

    },1800);

});

/* -----------------------------
Notification
------------------------------*/

openBtn.addEventListener("click", () => {

    notification.classList.add("hidden");

    hero.classList.remove("hidden");

    hero.animate([

        {
            opacity:0,
            transform:"translateY(60px)"
        },

        {
            opacity:1,
            transform:"translateY(0px)"
        }

    ],{

        duration:900,
        fill:"forwards"

    });

});

/* -----------------------------
Hero
------------------------------*/

startBtn.addEventListener("click",()=>{

    hero.classList.add("hidden");

    gallery.classList.remove("hidden");

    revealPhotos();

});

/* -----------------------------
Photo Reveal
------------------------------*/

function revealPhotos(){

    const cards=document.querySelectorAll(".photo-card");

    cards.forEach(card=>{

        card.style.opacity=0;

        card.style.transform="translateY(80px) scale(.8)";

    });

    cards.forEach((card,index)=>{

        setTimeout(()=>{

            card.style.transition=".8s";

            card.style.opacity=1;

            card.style.transform="translateY(0px) scale(1)";

        },index*550);

    });

}

/* -----------------------------
Letter
------------------------------*/

letterBtn.addEventListener("click",()=>{

    gallery.classList.add("hidden");

    letter.classList.remove("hidden");

    startTyping();

});

/* -----------------------------
Message
------------------------------*/

const message=

`Dear Hashmeen💗,

You turn the most ordinary days into something worth remembering. A random day feels a little more magical just because you're in it.

Your laugh is my favorite sound, and your heart is honestly the softest, kindest thing I know.

These have been the best seven months of my entire life.

I found someone who gave me the kind of love I had always hoped for.

Someone I trust even more than myself.

Someone I can share absolutely anything with.

Someone who always makes me smile.

Someone who showed me that not everyone is the same.

You showed me the true meaning of love.

Thank you for being my happiness.

Thank you for being the most beautiful part of my life.

Thank you for choosing me again and again...

even on the days I don't make it easy.

I promise I'll keep choosing you too...

today...

tomorrow...

and every ordinary day after that.

YOU ARE THE BEST GIRLFRIEND
IN THIS ENTIRE UNIVERSE 🌍💖

Happy Girlfriend's Day Hashu ❤️

You're stuck with me forever now.

I LOVE YOU SO MUCH 💕`;

const words = message.split(" ");

let index = 0;

/* -----------------------------
Word by Word Typing
------------------------------*/

function startTyping(){

typing.innerHTML="";

index=0;

const interval=setInterval(()=>{

typing.innerHTML += words[index] + " ";

typing.scrollTop = typing.scrollHeight;

index++;

if(index>=words.length){

    clearInterval(interval);

    document.getElementById("nextBtn").style.display = "inline-block";

}
},140);

}

/* -----------------------------
Ending
------------------------------*/

function showEnding(){

letter.classList.add("hidden");

ending.classList.remove("hidden");

ending.animate([

{

opacity:0,

transform:"scale(.8)"

},

{

opacity:1,

transform:"scale(1)"

}

],{

duration:1200,

fill:"forwards"

});

}
/* ==========================================
   PART 3B
   Premium Effects
========================================== */

/* -----------------------------
Floating Hearts on Click
------------------------------*/

document.addEventListener("click", function(e){

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.fontSize = "26px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";
    heart.style.transition = "all 1.4s ease";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform = "translateY(-120px) scale(1.8) rotate(20deg)";
        heart.style.opacity = "0";

    },20);

    setTimeout(()=>{

        heart.remove();

    },1400);

});


/* -----------------------------
Mouse Sparkles
------------------------------*/

document.addEventListener("mousemove",function(e){

    if(Math.random() > 0.80){

        const sparkle = document.createElement("div");

        sparkle.innerHTML = "✨";

        sparkle.style.position="fixed";
        sparkle.style.left=e.clientX+"px";
        sparkle.style.top=e.clientY+"px";
        sparkle.style.pointerEvents="none";
        sparkle.style.fontSize="14px";
        sparkle.style.opacity=".9";
        sparkle.style.transition="all .9s ease";
        sparkle.style.zIndex="9999";

        document.body.appendChild(sparkle);

        setTimeout(()=>{

            sparkle.style.transform="translateY(-35px) scale(.2)";
            sparkle.style.opacity="0";

        },20);

        setTimeout(()=>{

            sparkle.remove();

        },900);

    }

});


/* -----------------------------
Fullscreen Photo Viewer
------------------------------*/

const photos = document.querySelectorAll(".photo-card img");

photos.forEach(photo=>{

    photo.style.cursor="pointer";

    photo.addEventListener("click",()=>{

        const overlay=document.createElement("div");

        overlay.style.position="fixed";
        overlay.style.inset="0";
        overlay.style.background="rgba(0,0,0,.85)";
        overlay.style.display="flex";
        overlay.style.justifyContent="center";
        overlay.style.alignItems="center";
        overlay.style.zIndex="99999";
        overlay.style.backdropFilter="blur(8px)";

        const img=document.createElement("img");

        img.src=photo.src;

        img.style.maxWidth="90%";
        img.style.maxHeight="90%";
        img.style.borderRadius="20px";
        img.style.boxShadow="0 0 60px hotpink";
        img.style.animation="zoomPhoto .4s ease";

        overlay.appendChild(img);

        overlay.addEventListener("click",()=>{

            overlay.remove();

        });

        document.body.appendChild(overlay);

    });

});


/* -----------------------------
Heartbeat Ending
------------------------------*/

const endingTitle=document.querySelector(".ending-card h1");

if(endingTitle){

setInterval(()=>{

endingTitle.animate([

{transform:"scale(1)"},

{transform:"scale(1.08)"},

{transform:"scale(1)"}

],{

duration:900

});

},1800);

}


/* -----------------------------
Fade Sections
------------------------------*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(40px)"

},

{

opacity:1,

transform:"translateY(0px)"

}

],{

duration:900,

fill:"forwards"

});

}

});

},{threshold:.2});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});


/* -----------------------------
Extra Love Message
------------------------------*/

const loveNote=document.createElement("div");

loveNote.innerHTML="Made with ❤️ by Tanveer";

loveNote.style.position="fixed";
loveNote.style.bottom="15px";
loveNote.style.right="20px";
loveNote.style.fontSize="13px";
loveNote.style.opacity=".45";
loveNote.style.color="white";
loveNote.style.pointerEvents="none";

document.body.appendChild(loveNote);

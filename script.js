function showPhoto(){
  document.getElementById("photo").style.display="block";
}

/* Slideshow */
let images = ["jiya1.jpg","jiya2.jpg","jiya3.jpg"];
let index = 0;

setInterval(()=>{
  document.getElementById("slide").src = images[index];
  index = (index+1)%images.length;
},2500);

function showStory(){
  document.getElementById("story").style.display="block";
}

function toggle(card){
  card.classList.toggle("active");
}

/* Autoplay workaround */
window.onload = function () {
  let music = document.getElementById("music");
  music.play();
  setTimeout(()=>{
    music.muted=false;
    music.play().catch(()=>{});
  },1000);
};

/* Countdown */
const target = new Date("May 7, 2026 00:00:00").getTime();

setInterval(()=>{
  let now = new Date().getTime();
  let gap = target - now;

  let d = Math.floor(gap/(1000*60*60*24));
  let h = Math.floor((gap%(1000*60*60*24))/(1000*60*60));
  let m = Math.floor((gap%(1000*60*60))/(1000*60));

  document.getElementById("countdown").innerHTML =
    d+"d "+h+"h "+m+"m left 🎉";
},1000);
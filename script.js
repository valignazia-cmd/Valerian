
const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");
const typingTarget = document.getElementById("typingText");

const letter = `Hai Ina...

Terima kasih sudah hadir dalam hidupku.

Website kecil ini kubuat khusus untukmu.
Semoga setiap kali kamu membukanya, kamu ingat bahwa ada seseorang yang selalu bersyukur memilikimu.

Aku mungkin tidak sempurna, tetapi aku akan selalu berusaha menjadi seseorang yang membuatmu merasa dicintai.

❤️ I Love You.
- ALE`;

let typed = false;

enterBtn.addEventListener("click", () => {
  document.getElementById("story").scrollIntoView({
    behavior: "smooth"
  });

  // iPhone-friendly: play after user interaction
  if (music) {
    music.volume = 0.5;
    music.play().catch(()=>{});
  }

  if (!typed) {
    typeLetter();
    typed = true;
  }
});

function typeLetter(){
  let i = 0;
  const timer = setInterval(()=>{
    typingTarget.textContent += letter.charAt(i);
    i++;
    if(i >= letter.length){
      clearInterval(timer);
    }
  },35);
}

// Fade in sections on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.animate([
        {opacity:0, transform:"translateY(40px)"},
        {opacity:1, transform:"translateY(0)"}
      ],{
        duration:900,
        fill:"forwards",
        easing:"ease-out"
      });
    }
  });
},{threshold:0.2});

document.querySelectorAll("section").forEach(sec=>{
  sec.style.opacity = 0;
  observer.observe(sec);
});

// Hearts on click
document.addEventListener("click",(e)=>{
  const heart = document.createElement("div");
  heart.textContent = "❤️";
  heart.style.position = "fixed";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  heart.style.pointerEvents = "none";
  heart.style.fontSize = "24px";
  heart.style.transition = "all 1.5s ease";
  heart.style.zIndex = "9999";
  document.body.appendChild(heart);

  requestAnimationFrame(()=>{
    heart.style.transform = "translateY(-120px) scale(1.8)";
    heart.style.opacity = "0";
  });

  setTimeout(()=>heart.remove(),1600);
});

// Shooting stars
setInterval(()=>{
  const star=document.createElement("div");
  star.style.position="fixed";
  star.style.left=Math.random()*window.innerWidth+"px";
  star.style.top="0px";
  star.style.width="2px";
  star.style.height="80px";
  star.style.background="linear-gradient(white,transparent)";
  star.style.transform="rotate(45deg)";
  star.style.opacity="0.9";
  star.style.pointerEvents="none";
  star.style.zIndex="1";
  document.body.appendChild(star);

  star.animate([
    {transform:"translate(0,0) rotate(45deg)",opacity:1},
    {transform:"translate(-250px,250px) rotate(45deg)",opacity:0}
  ],{
    duration:1400,
    easing:"linear"
  });

  setTimeout(()=>star.remove(),1500);
},6000);

document.getElementById("loveBtn")?.addEventListener("click",()=>{
  alert("❤️ Forever with INA ❤️");
});

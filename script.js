const msg=`Hai Ina...

Terima kasih sudah hadir dalam hidupku.

Semoga kita selalu saling menjaga, saling mendukung, dan terus menciptakan kenangan indah bersama.

I love you, today, tomorrow and always.

- ALE ❤️`;
document.getElementById('enter').onclick=()=>{
document.getElementById('content').classList.remove('hidden');
const a=document.getElementById('music');
a.play().catch(()=>{});
let i=0;
const el=document.getElementById('letter');
const t=setInterval(()=>{el.textContent+=msg[i++]||'';if(i>msg.length)clearInterval(t)},35);
};

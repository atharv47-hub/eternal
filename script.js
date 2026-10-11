const $ = id => document.getElementById(id);
const bootScreen = $("bootScreen"), mainSite = $("mainSite"), bootProgress = $("bootProgress"), bootStatus = $("bootStatus");
let bootDone = false, bootInterval, progress = 0;
function finishBoot(){if(bootDone)return;bootDone=true;clearInterval(bootInterval);bootProgress.style.width="100%";bootStatus.textContent="ACCESS GRANTED. WELCOME, ATHARV.";mainSite.classList.add("ready");mainSite.setAttribute("aria-hidden","false");bootScreen.classList.add("done");document.body.classList.remove("locked");}
document.body.classList.add("locked");$("skipBoot").addEventListener("click",finishBoot);
const bootMessages=["INITIALIZING SECURE SESSION...","VERIFYING PERSONNEL RECORD...","LOADING ETHICAL HACKER PROFILE...","ACCESS GRANTED."];
bootInterval=setInterval(()=>{progress=Math.min(100,progress+Math.floor(Math.random()*13)+7);bootProgress.style.width=progress+"%";bootStatus.textContent=bootMessages[Math.min(3,Math.floor(progress/28))];if(progress>=100){clearInterval(bootInterval);setTimeout(finishBoot,450);}},190);
function updateClock(){$("liveClock").textContent=new Date().toLocaleTimeString("en-GB",{hour12:false});}
updateClock();setInterval(updateClock,1000);$("year").textContent=new Date().getFullYear();
const menuButton=$("menuButton"), mobileNav=$("mobileNav");
menuButton.addEventListener("click",()=>{const open=mobileNav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));});
mobileNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{mobileNav.classList.remove("open");menuButton.setAttribute("aria-expanded","false");}));
let toastTimer;function toast(msg){const el=$("toast");el.textContent=msg;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2500);}
function toggleSecret(show){$("secretPanel").hidden=!show;if(show){$("secretPanel").scrollIntoView({behavior:"smooth",block:"center"});toast("HIDDEN FILE DECRYPTED");}}
$("revealSecret").addEventListener("click",()=>toggleSecret(true));$("closeSecret").addEventListener("click",()=>toggleSecret(false));
$("copyHandle").addEventListener("click",async()=>{const handle="@atharv.khedkar47";try{await navigator.clipboard.writeText(handle);toast("HANDLE COPIED: "+handle);}catch{toast("INSTAGRAM HANDLE: "+handle);}});
const audio=$("audioPlayer"), play=$("playMusic"), status=$("musicStatus"), select=$("trackSelect"), eq=document.querySelector(".equalizer");
function updateTrackLabel(){const name=select.value.includes("baila-lento")?"BAILA LENTO":"MONTAGEM DIAMANTE ROSA";$("trackTitle").textContent=name;status.textContent="LOOP ENABLED • "+name;}
select.addEventListener("change",async()=>{audio.src=select.value;audio.loop=true;updateTrackLabel();try{await audio.play();play.textContent="Ⅱ";eq.classList.add("playing");$("audioNotice").textContent="NOW PLAYING — "+$("trackTitle").textContent+" • LOOP ENABLED";}catch{play.textContent="▶";eq.classList.remove("playing");$("audioNotice").textContent="AUTOPLAY BLOCKED BY BROWSER — tap PLAY to start your track.";toast("TAP PLAY TO START AUDIO");}});
play.addEventListener("click",async()=>{if(audio.paused){try{await audio.play();play.textContent="Ⅱ";eq.classList.add("playing");status.textContent="NOW PLAYING • LOOP ENABLED";$("audioNotice").textContent="NOW PLAYING — "+$("trackTitle").textContent+" • LOOP ENABLED";}catch{toast("BROWSER COULD NOT START AUDIO");}}else{audio.pause();play.textContent="▶";eq.classList.remove("playing");status.textContent="PLAYBACK PAUSED";$("audioNotice").textContent="PAUSED — tap PLAY to resume looping audio."; }});
audio.addEventListener("play",()=>{play.textContent="Ⅱ";eq.classList.add("playing");});audio.addEventListener("pause",()=>{play.textContent="▶";eq.classList.remove("playing");});
audio.addEventListener("error",()=>{status.textContent="AUDIO COULD NOT LOAD — CHECK FILE";$("audioNotice").textContent="Audio file could not load. Check the assets folder and file names.";});
audio.loop=true;updateTrackLabel();
// Browsers generally block audible autoplay until the visitor interacts. Try autoplay, then provide a clear play control.
window.addEventListener("load",async()=>{try{await audio.play();play.textContent="Ⅱ";eq.classList.add("playing");status.textContent="NOW PLAYING • LOOP ENABLED";$("audioNotice").textContent="NOW PLAYING — MONTAGEM DIAMANTE ROSA • LOOP ENABLED";}catch{play.textContent="▶";status.textContent="TAP PLAY IF AUTOPLAY IS BLOCKED";$("audioNotice").textContent="AUTOPLAY READY — some browsers block sound until you tap PLAY. Your selected track will loop."; }});
function lockTerminal(){finishBoot();window.scrollTo({top:0,behavior:"smooth"});toast("TERMINAL SECURED. THIS PROFILE REMAINS PUBLIC.");}
$("lockButton").addEventListener("click",lockTerminal);$("navLock").addEventListener("click",()=>{mobileNav.classList.remove("open");menuButton.setAttribute("aria-expanded","false");lockTerminal();});
let secretSequence="";document.addEventListener("keydown",e=>{if(e.key.length!==1||e.ctrlKey||e.altKey||e.metaKey)return;secretSequence=(secretSequence+e.key.toUpperCase()).slice(-4);if(secretSequence==="AK47"){toggleSecret(true);secretSequence="";}});

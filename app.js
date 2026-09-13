function getExhibit(){
  const params = new URLSearchParams(location.search);
  return EXHIBITS[params.get("exhibit")] || EXHIBITS["big-center"];
}

function esc(value){
  return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}

function creatureSVG(type){
  const common = `fill="none" stroke="rgba(255,255,255,.88)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"`;
  if(type==="gecko") return `<svg viewBox="0 0 420 250" class="animal gecko-art" aria-label="Cute animated leopard gecko">
    <g class="gecko-body" ${common}><ellipse cx="200" cy="135" rx="110" ry="48" fill="#d8b27d"/><ellipse cx="300" cy="125" rx="45" ry="40" fill="#d8b27d"/><path d="M112 140 Q55 125 35 155 Q72 172 120 160"/><path d="M145 164 Q125 207 103 208"/><path d="M235 169 Q248 207 274 207"/><path d="M153 103 Q130 70 105 77"/><path d="M238 102 Q260 70 285 82"/><circle cx="312" cy="112" r="6" fill="white"/><circle cx="312" cy="112" r="3" fill="#14343b"/><circle cx="285" cy="105" r="6" fill="white"/><circle cx="285" cy="105" r="3" fill="#14343b"/></g>
    <path class="tongue" d="M333 133 Q375 133 392 124 M392 124 l-10 -8 M392 124 l-12 4" ${common}/><circle cx="165" cy="130" r="6" fill="#9b5f35"/><circle cx="205" cy="150" r="6" fill="#9b5f35"/><circle cx="255" cy="126" r="6" fill="#9b5f35"/>
  </svg>`;
  if(type==="frog") return `<svg viewBox="0 0 420 250" class="animal frog-art" aria-label="Cute animated white tree frog">
    <g class="frog-body"><ellipse cx="210" cy="130" rx="90" ry="60" fill="#9ad6a5"/><circle cx="150" cy="88" r="34" fill="#a9e1b3"/><circle cx="270" cy="88" r="34" fill="#a9e1b3"/><circle cx="150" cy="84" r="14" fill="white"/><circle cx="270" cy="84" r="14" fill="white"/><circle cx="150" cy="84" r="6" fill="#14343b"/><circle cx="270" cy="84" r="6" fill="#14343b"/><path d="M170 145 Q210 168 250 145" ${common}/><path d="M145 162 Q115 198 88 196 M275 162 Q306 198 332 196" ${common}/><circle cx="88" cy="196" r="14" fill="#9ad6a5"/><circle cx="332" cy="196" r="14" fill="#9ad6a5"/></g>
  </svg>`;
  if(type==="skink") return `<svg viewBox="0 0 420 250" class="animal skink-art" aria-label="Cute animated crocodile skink">
    <g class="skink-body"><path d="M65 155 Q135 92 250 112 Q310 118 352 150 Q318 182 250 176 Q145 183 65 155Z" fill="#6b7268"/><path d="M95 143 L75 110 M120 138 L105 100 M150 130 L140 95 M180 124 L178 92 M212 120 L215 89 M244 123 L252 93" ${common}/><circle cx="292" cy="132" r="7" fill="white"/><circle cx="292" cy="132" r="3" fill="#14343b"/><path d="M335 154 q25 15 42 5" ${common}/><path d="M115 165 l-25 35 M275 169 l25 30" ${common}/></g>
  </svg>`;
  if(type==="moon") return `<svg viewBox="0 0 420 250" class="animal moon-art" aria-label="Cute animated moon jellyfish">
    <g class="jelly-body"><path d="M90 128 Q90 55 210 55 Q330 55 330 128 Q290 150 210 150 Q130 150 90 128Z" fill="rgba(225,248,255,.72)" stroke="rgba(255,255,255,.9)" stroke-width="5"/><circle cx="160" cy="103" r="18" fill="rgba(255,184,184,.8)"/><circle cx="260" cy="103" r="18" fill="rgba(255,184,184,.8)"/><path d="M150 145 Q145 190 155 220 M185 147 Q180 195 190 225 M220 147 Q225 195 215 225 M255 145 Q265 190 250 220" ${common}/><path d="M130 92 Q160 65 190 92 M230 92 Q260 65 290 92" stroke="rgba(255,255,255,.65)" stroke-width="4" fill="none"/></g>
  </svg>`;
  if(type==="bamboo") return `<svg viewBox="0 0 420 250" class="animal bamboo-art" aria-label="Cute animated bamboo shark">
    <g class="shark-body"><path d="M45 142 Q120 75 285 95 Q345 102 378 135 Q345 167 285 172 Q125 190 45 142Z" fill="#b7a58a"/><path d="M100 112 l20 -45 l24 48 M215 105 l20 -40 l20 47" ${common}/><path d="M70 142 Q45 120 30 112 Q26 145 48 157" fill="#8d7c67" stroke="rgba(255,255,255,.88)" stroke-width="5"/><circle cx="313" cy="120" r="7" fill="white"/><circle cx="313" cy="120" r="3" fill="#14343b"/><path d="M330 141 q18 7 32 -1" ${common}/></g>
  </svg>`;
  if(type==="seastar") return `<svg viewBox="0 0 420 250" class="animal seastar-art" aria-label="Cute animated chocolate chip sea star">
    <g class="star-body"><path d="M210 35 L238 96 L306 78 L273 132 L332 169 L263 170 L250 225 L210 181 L170 225 L157 170 L88 169 L147 132 L114 78 L182 96Z" fill="#d9b889" stroke="rgba(255,255,255,.9)" stroke-width="5"/><circle cx="190" cy="105" r="9" fill="#6b4b36"/><circle cx="240" cy="120" r="10" fill="#6b4b36"/><circle cx="165" cy="150" r="8" fill="#6b4b36"/><circle cx="252" cy="165" r="8" fill="#6b4b36"/></g>
  </svg>`;
  if(type==="horseshoe") return `<svg viewBox="0 0 420 250" class="animal horseshoe-art" aria-label="Cute animated horseshoe crab">
    <g class="crab-body"><path d="M90 150 Q90 65 210 60 Q330 65 330 150 Q270 185 210 180 Q150 185 90 150Z" fill="#8c755d" stroke="rgba(255,255,255,.9)" stroke-width="5"/><path d="M210 180 L210 235" ${common}/><circle cx="165" cy="105" r="7" fill="#e7d5bb"/><circle cx="255" cy="105" r="7" fill="#e7d5bb"/><path d="M120 155 l-35 30 M145 170 l-30 38 M280 170 l30 38 M300 155 l35 30" ${common}/></g>
  </svg>`;
  if(type==="ducky") return `<svg viewBox="0 0 420 250" class="animal ducky-art" aria-label="Cute animated amber ducky isopod">
    <g class="isopod-body"><ellipse cx="210" cy="135" rx="120" ry="58" fill="#c98d52" stroke="rgba(255,255,255,.9)" stroke-width="5"/><path d="M125 105 Q160 68 210 78 Q260 68 295 105" fill="#e4b36d"/><circle cx="165" cy="120" r="6" fill="#14343b"/><circle cx="255" cy="120" r="6" fill="#14343b"/><path d="M120 160 l-28 22 M145 174 l-20 30 M175 182 l-12 28 M245 182 l12 28 M275 174 l20 30 M300 160 l28 22" ${common}/></g>
  </svg>`;
  if(type==="candy") return `<svg viewBox="0 0 420 250" class="animal candy-art" aria-label="Cute animated candy pill millipede">
    <g class="milli-body"><ellipse cx="210" cy="135" rx="115" ry="52" fill="#d46f7b" stroke="rgba(255,255,255,.9)" stroke-width="5"/><path d="M120 112 Q165 75 210 83 Q255 75 300 112" fill="#f19a9f"/><path d="M130 165 l-28 25 M155 177 l-20 30 M180 184 l-12 28 M240 184 l12 28 M265 177 l20 30 M290 165 l28 25" ${common}/><circle cx="165" cy="125" r="6" fill="#fff3d0"/><circle cx="250" cy="145" r="6" fill="#fff3d0"/></g>
  </svg>`;
  if(type==="tetra") return `<svg viewBox="0 0 420 250" class="animal tetra-art" aria-label="Cute animated amber tetra">
    <g class="fish-body"><path d="M65 135 Q145 75 275 105 L350 75 L330 135 L350 195 L275 165 Q145 195 65 135Z" fill="#d69a4c" stroke="rgba(255,255,255,.9)" stroke-width="5"/><circle cx="105" cy="125" r="7" fill="white"/><circle cx="105" cy="125" r="3" fill="#14343b"/><path d="M205 105 L230 68 L245 110 M205 165 L230 202 L245 160" ${common}/></g>
  </svg>`;
  return `<div class="emoji-creature">🌊</div>`;
}

function renderSpecies(id, idx){
  const s = SPECIES[id];
  const quick = s.quick.map(([a,b])=>`<div class="quick"><span>${esc(a)}</span><strong>${esc(b)}</strong></div>`).join("");
  const tags = s.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join("");
  return `<article class="species-panel" id="species-${esc(id)}">
    <div class="species-top">
      <div class="photo-box">
        <img src="${esc(s.image)}" alt="${esc(s.imageAlt)}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
        <div class="photo-placeholder" style="display:none">
          <span class="camera">📷</span>
          <strong>Add your real-life photo</strong>
          <small>Save the image as <b>${esc(s.image)}</b> inside the <b>assets</b> folder.</small>
        </div>
      </div>
      <div class="creature-box">${creatureSVG(s.animation)}</div>
    </div>
    <div class="species-copy">
      <span class="section-label">${esc(s.group)}</span>
      <h2>${esc(s.name)}</h2>
      <div class="scientific">${esc(s.scientific)}</div>
      <div class="name-story"><b>🪪 Why this name?</b>${esc(s.nameStory)}</div>
      <div class="quick-grid">${quick}</div>
      <div class="fact"><span class="spark">✨</span><strong>WOW FACT</strong><p>${esc(s.wow)}</p></div>
      <div class="info-grid">
        <div class="info-card"><h3>🔎 What do they look like?</h3><p>${esc(s.characteristics)}</p></div>
        <div class="info-card"><h3>👀 Behaviour</h3><p>${esc(s.behaviour)}</p></div>
        <div class="info-card"><h3>🌏 Why do they matter?</h3><p>${esc(s.ecology)}</p></div>
        <div class="info-card"><h3>🍽️ What do they eat?</h3><p>${esc(s.feeding)}</p></div>
      </div>
      <details><summary>💞 Reproduction & mating</summary><div class="details-body">${esc(s.mating)}</div></details>
      <details><summary>🌱 Life cycle</summary><div class="details-body">${esc(s.lifecycle)}</div></details>
      ${s.note ? `<details><summary>⚠️ Identification note</summary><div class="details-body">${esc(s.note)}</div></details>` : ""}
      <div class="tags">${tags}</div>
    </div>
  </article>`;
}

function startAnimations(){
  document.querySelectorAll(".gecko-art .tongue").forEach(x=>x.style.animation="tongueFlick 3.4s ease-in-out infinite");
  document.querySelectorAll(".frog-body").forEach(x=>x.style.animation="frogBreath 2.7s ease-in-out infinite");
  document.querySelectorAll(".jelly-body").forEach(x=>x.style.animation="jellyPulse 3.2s ease-in-out infinite");
  document.querySelectorAll(".shark-body").forEach(x=>x.style.animation="swim 4s ease-in-out infinite");
  document.querySelectorAll(".star-body").forEach(x=>x.style.animation="starWiggle 4.5s ease-in-out infinite");
  document.querySelectorAll(".crab-body").forEach(x=>x.style.animation="crabWalk 3.8s ease-in-out infinite");
  document.querySelectorAll(".isopod-body").forEach(x=>x.style.animation="tinyWiggle 3.2s ease-in-out infinite");
  document.querySelectorAll(".milli-body").forEach(x=>x.style.animation="tinyWiggle 3.6s ease-in-out infinite");
  document.querySelectorAll(".fish-body").forEach(x=>x.style.animation="fishSwim 3.5s ease-in-out infinite");
}
const extraAnimations = document.createElement("style");
extraAnimations.textContent = `
@keyframes tongueFlick{0%,72%,100%{transform:translateX(0);opacity:0}76%{transform:translateX(8px);opacity:1}82%{transform:translateX(38px);opacity:1}88%{transform:translateX(0);opacity:0}}
@keyframes frogBreath{50%{transform:translateY(-6px) scale(1.025)}}
@keyframes jellyPulse{50%{transform:scaleY(.88) scaleX(1.04)}}
@keyframes swim{50%{transform:translateX(12px) rotate(-2deg)}}
@keyframes starWiggle{50%{transform:rotate(4deg) translateY(-3px)}}
@keyframes crabWalk{50%{transform:translateX(10px) rotate(1deg)}}
@keyframes tinyWiggle{50%{transform:translateX(5px) rotate(2deg)}}
@keyframes fishSwim{50%{transform:translateX(13px) translateY(-4px)}}
`;
document.head.appendChild(extraAnimations);

const exhibit = getExhibit();
document.title = `${exhibit.kicker} · MEC Species Guide`;
document.getElementById("exhibit-kicker").textContent = exhibit.kicker;
document.getElementById("exhibit-title").textContent = exhibit.title;
document.getElementById("exhibit-intro").textContent = exhibit.intro;

const introCard = document.getElementById("exhibit-intro-card");
if(exhibit.kicker==="Paludarium"){
  introCard.classList.remove("hidden");
  document.getElementById("intro-title").textContent = "What is a paludarium?";
  document.getElementById("intro-text").textContent = "A paludarium is a mixed land-and-water habitat. The aim of this exhibit is not simply to display an animal, but to help guests see connections between water, plants, substrate, microorganisms, fish and the surrounding forest-floor environment.";
}

document.getElementById("species-heading").textContent =
  exhibit.species.length === 1 ? "Meet your resident" : "Meet the residents";

document.getElementById("species-nav").innerHTML = exhibit.species.map((id,i)=>{
  const s=SPECIES[id];
  return `<button class="species-chip ${i===0?'active':''}" data-target="species-${id}">${esc(s.name)}</button>`;
}).join("");

document.getElementById("species-content").innerHTML = exhibit.species.map(renderSpecies).join("");
document.getElementById("hero-art").innerHTML = creatureSVG(SPECIES[exhibit.species[0]].animation);
startAnimations();

document.querySelectorAll(".species-chip").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".species-chip").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.target).scrollIntoView({behavior:"smooth",block:"start"});
  });
});

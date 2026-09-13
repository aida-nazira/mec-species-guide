function getExhibit(){
  const params = new URLSearchParams(location.search);
  return EXHIBITS[params.get("exhibit")] || EXHIBITS["big-center"];
}

function esc(value){
  return String(value).replace(/[&<>"']/g, c => ({
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&#039;'
  }[c]));
}


/* --------------------------------
   CHIBI ANIMATION TYPE
-------------------------------- */

function getChibiClass(animation){
  const classes = {
    bamboo:"chibi-shark",
    seastar:"chibi-seastar",
    horseshoe:"chibi-horseshoe",
    moon:"chibi-moon",
    gecko:"chibi-gecko",
    ducky:"chibi-ducky",
    candy:"chibi-candy",
    tetra:"chibi-tetra",
    frog:"chibi-frog",
    skink:"chibi-skink"
  };

  return classes[animation] || "chibi-default";
}


/* --------------------------------
   SPECIES CARD
-------------------------------- */

function renderSpecies(id, idx){

  const s = SPECIES[id];

  const quick = s.quick
    .map(([a,b]) => `
      <div class="quick">
        <span>${esc(a)}</span>
        <strong>${esc(b)}</strong>
      </div>
    `)
    .join("");

  const tags = s.tags
    .map(t => `<span class="tag">${esc(t)}</span>`)
    .join("");

  const chibiClass = getChibiClass(s.animation);

  return `
    <article
      class="species-panel"
      id="species-${esc(id)}"
    >

      <!-- REAL PHOTO -->
<div class="species-photo">

  <img
    src="${esc(s.image)}"
    alt="${esc(s.imageAlt)}"
    class="real-photo"
    loading="lazy"
    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
  >

  <div class="photo-placeholder">
    <span>📷</span>
    <strong>Real-life photo unavailable</strong>
    <small>Please check the image filename in assets/real/</small>
  </div>

</div>



      <!-- CHIBI CHARACTER -->
      <div class="chibi-stage ${chibiClass}">

        <div class="chibi-glow"></div>

        <img
          src="${esc(s.chibi)}"
          alt="${esc(s.imageAlt)}"
          class="chibi-image"
          loading="lazy"
        >

        <div class="speech-bubble">
          ${getSpeech(s.animation)}
        </div>

      </div>


      <!-- SPECIES INFORMATION -->
      <div class="species-copy">

        <span class="section-label">
          ${esc(s.group)}
        </span>

        <h2>
          ${esc(s.name)}
        </h2>

        <div class="scientific">
          ${esc(s.scientific)}
        </div>


        <!-- NAME -->
        <div class="name-story">

          <b>🪪 Why this name?</b>

          <p>
            ${esc(s.nameStory)}
          </p>

        </div>


        <!-- QUICK FACTS -->
        <div class="quick-grid">
          ${quick}
        </div>


        <!-- WOW FACT -->
        <div class="fact">

          <span class="spark">✨</span>

          <strong>WOW FACT</strong>

          <p>
            ${esc(s.wow)}
          </p>

        </div>


        <!-- INFORMATION -->
        <div class="info-grid">

          <div class="info-card">
            <h3>🔎 What do they look like?</h3>
            <p>${esc(s.characteristics)}</p>
          </div>

          <div class="info-card">
            <h3>👀 Behaviour</h3>
            <p>${esc(s.behaviour)}</p>
          </div>

          <div class="info-card">
            <h3>🌏 Why do they matter?</h3>
            <p>${esc(s.ecology)}</p>
          </div>

          <div class="info-card">
            <h3>🍽️ What do they eat?</h3>
            <p>${esc(s.feeding)}</p>
          </div>

        </div>


        <!-- EXTRA INFORMATION -->

        <details>
          <summary>💕 Reproduction & mating</summary>

          <div class="details-body">
            ${esc(s.mating)}
          </div>

        </details>


        <details>
          <summary>🌱 Life cycle</summary>

          <div class="details-body">
            ${esc(s.lifecycle)}
          </div>

        </details>


        ${
          s.note
          ? `
            <details>
              <summary>⚠️ Identification note</summary>

              <div class="details-body">
                ${esc(s.note)}
              </div>
            </details>
          `
          : ""
        }


        <div class="tags">
          ${tags}
        </div>

      </div>

    </article>
  `;
}


/* --------------------------------
   CUTE SPEECH
-------------------------------- */

function getSpeech(animation){

  const speech = {

    bamboo:
      "Psst... I'm exploring down here! 🦈",

    seastar:
      "I may be slow... but I'm still exploring! ⭐",

    horseshoe:
      "Hey! I'm NOT a true crab! 😮",

    moon:
      "Just keep floating... 🌙",

    gecko:
      "Who're you? 👀",

    ducky:
      "Shhh... I'm helping clean up! 🍂",

    candy:
      "Don't worry... I can roll up! 🍓",

    tetra:
      "Let's explore together! 💧",

    frog:
      "Who's there? 👀🐸",

    skink:
      "I'm hiding... can you spot me? 🌿"

  };

  return speech[animation] || "Hello there! 👋";
}


/* --------------------------------
   HERO CHIBI
-------------------------------- */

function renderHeroChibi(species){

  const s = SPECIES[species];

  if(!s) return;

  const hero = document.getElementById("hero-art");

  hero.innerHTML = `
    <div class="hero-chibi-wrap">

      <div class="hero-bubble">
        ${getSpeech(s.animation)}
      </div>

      <img
        src="${esc(s.chibi)}"
        class="hero-chibi ${getChibiClass(s.animation)}"
        alt="Cute ${esc(s.name)} illustration"
      >

    </div>
  `;
}


/* --------------------------------
   START
-------------------------------- */

const exhibit = getExhibit();

document.title =
  `${exhibit.kicker} · MEC Species Guide`;

document.getElementById("exhibit-kicker").textContent =
  exhibit.kicker;

document.getElementById("exhibit-title").textContent =
  exhibit.title;

document.getElementById("exhibit-intro").textContent =
  exhibit.intro;


/* --------------------------------
   PALUDARIUM INTRO
-------------------------------- */

const introCard =
  document.getElementById("exhibit-intro-card");

if(exhibit.kicker === "Paludarium"){

  introCard.classList.remove("hidden");

  document.getElementById("intro-title").textContent =
    "What is a paludarium?";

  document.getElementById("intro-text").textContent =
    "A paludarium is a mixed land-and-water habitat. It helps us explore how water, plants, animals, substrate and microorganisms can interact as one connected miniature ecosystem.";

}


/* --------------------------------
   SPECIES NAVIGATION
-------------------------------- */

document.getElementById("species-heading").textContent =
  exhibit.species.length === 1
    ? "Meet your resident"
    : "Meet the residents";


document.getElementById("species-nav").innerHTML =
  exhibit.species
    .map((id,i) => {

      const s = SPECIES[id];

      return `
        <button
          class="species-chip ${i === 0 ? "active" : ""}"
          data-target="species-${id}"
        >
          ${esc(s.name)}
        </button>
      `;

    })
    .join("");


/* --------------------------------
   RENDER SPECIES
-------------------------------- */

document.getElementById("species-content").innerHTML =
  exhibit.species
    .map(renderSpecies)
    .join("");

/* --------------------------------
   HERO CHIBI
-------------------------------- */

renderHeroChibi(exhibit.species[0]);



/* --------------------------------
   NAVIGATION
-------------------------------- */

document.querySelectorAll(".species-chip").forEach(btn => {

  btn.addEventListener("click", () => {

    document
      .querySelectorAll(".species-chip")
      .forEach(b =>
        b.classList.remove("active")
      );

    btn.classList.add("active");

    const target =
      document.getElementById(btn.dataset.target);

    if(target){

      target.scrollIntoView({
        behavior:"smooth",
        block:"start"
      });

    }

  });

});

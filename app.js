
const APP_VERSION = "1.3";
const PROMPTS = [{"id": "espresso-cup", "title": "Espresso Cup", "subtitle": "A small cup with saucer and soft shadow", "difficulty": "Easy", "time": "10 min", "category": "Objects", "final": "assets/sketches/espresso-cup-final.svg", "stepsImage": "assets/sketches/espresso-cup-steps.svg", "why": "Simple objects teach ellipses, proportion and shadow without becoming boring.", "steps": ["Copy the rim ellipse first.", "Drop the cup sides from the rim.", "Add the handle and saucer.", "Darken the inner rim.", "Add a soft shadow under the saucer."], "tips": ["The rim is an ellipse, not a football shape.", "Keep the handle light until the cup body feels right.", "The shadow should be soft, not a black puddle."]}, {"id": "guitar", "title": "Acoustic Guitar", "subtitle": "A simplified guitar body and neck", "difficulty": "Slightly challenging", "time": "25 min", "category": "Music", "final": "assets/sketches/guitar-final.svg", "stepsImage": "assets/sketches/guitar-steps.svg", "why": "A guitar is personal, useful and great for symmetry and curves.", "steps": ["Draw the centre line.", "Build the body from four large curves.", "Add the sound hole and bridge.", "Draw the neck and headstock.", "Add strings lightly at the end."], "tips": ["Use the centre line to keep the guitar balanced.", "The waist curve is important.", "Strings should be light, not heavy black lines."]}, {"id": "house-plant", "title": "House Plant", "subtitle": "A small potted plant with simple leaves", "difficulty": "Medium", "time": "15 min", "category": "Nature", "final": "assets/sketches/plant-final.svg", "stepsImage": "assets/sketches/plant-steps.svg", "why": "Plants teach organic curves while the pot keeps the sketch grounded.", "steps": ["Draw the pot first.", "Add the soil ellipse.", "Sketch leaf centre lines.", "Build leaf shapes around the lines.", "Add pot shadows and small leaf veins."], "tips": ["Leaves should vary slightly in size.", "Do not make every leaf perfectly symmetrical.", "Let some leaves overlap."]}, {"id": "sitting-fox", "title": "Sitting Fox", "subtitle": "A stylised fox sitting upright", "difficulty": "Medium", "time": "20 min", "category": "Animals", "final": "assets/sketches/fox-final.svg", "stepsImage": "assets/sketches/fox-steps.svg", "why": "This is cute but useful: triangles, curves, symmetry and character.", "steps": ["Draw the triangle head.", "Add a pear-shaped body.", "Wrap the large tail around one side.", "Place eyes and nose simply.", "Add face markings and paws last."], "tips": ["The tail should be big and expressive.", "Keep the face simple.", "Use sharp ears against soft body curves."]}, {"id": "old-camera", "title": "Old Camera", "subtitle": "A simple vintage camera front view", "difficulty": "Medium", "time": "18 min", "category": "Objects", "final": "assets/sketches/camera-final.svg", "stepsImage": "assets/sketches/camera-steps.svg", "why": "Cameras are great for rectangles, circles and clean design details.", "steps": ["Draw the rounded rectangle body.", "Add the large lens circle.", "Add the smaller inner lens.", "Place the top block and button.", "Shade the lens darkest."], "tips": ["The lens must be centred.", "Rounded corners make it friendlier.", "Do not overcomplicate buttons."]}, {"id": "open-book", "title": "Open Book", "subtitle": "A book opened flat with curved pages", "difficulty": "Easy", "time": "12 min", "category": "Objects", "final": "assets/sketches/open-book-final.svg", "stepsImage": "assets/sketches/open-book-steps.svg", "why": "Books teach perspective, symmetry and line rhythm.", "steps": ["Draw the centre fold first.", "Add left and right page blocks.", "Curve the page edges.", "Add a few page lines.", "Shade under the book lightly."], "tips": ["The centre fold anchors everything.", "Page lines should be lighter than the outline.", "Keep both sides similar, not identical."]}, {"id": "tiny-sailboat", "title": "Tiny Sailboat", "subtitle": "A small boat with sail and water lines", "difficulty": "Easy", "time": "10 min", "category": "Scenes", "final": "assets/sketches/sailboat-final.svg", "stepsImage": "assets/sketches/sailboat-steps.svg", "why": "A tiny boat gives you a complete scene without too many details.", "steps": ["Draw the hull.", "Add a vertical mast.", "Draw one large sail and one smaller sail.", "Add a horizon or water lines.", "Keep the water strokes loose."], "tips": ["Keep the water lines horizontal.", "The sails should be clean triangles.", "Leave white space; do not fill the whole page."]}];
const STORAGE = {
  done: "sketchwise_done_v13",
  favs: "sketchwise_favs_v13",
  timer: "sketchwise_timer_v13"
};

const state = {
  section: "today",
  selectedId: null,
  timerSeconds: Number(localStorage.getItem(STORAGE.timer) || 600),
  timerRunning: false,
  timerId: null,
  filter: "All"
};

const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" }[c]));
function safeParse(k, fallback){ try { const r = localStorage.getItem(k); return r ? JSON.parse(r) : fallback; } catch { return fallback; } }
function saveJSON(k,v){ localStorage.setItem(k, JSON.stringify(v)); }
const doneSet = () => new Set(safeParse(STORAGE.done, []));
const favSet = () => new Set(safeParse(STORAGE.favs, []));
function setDone(s){ saveJSON(STORAGE.done, [...s]); }
function setFavs(s){ saveJSON(STORAGE.favs, [...s]); }

function todayIndex(){
  const start = new Date("2026-01-01T00:00:00");
  const now = new Date();
  const diff = Math.floor((new Date(now.toDateString()) - start) / 86400000);
  return Math.abs(diff) % PROMPTS.length;
}
function todayPrompt(){ return PROMPTS[todayIndex()]; }
function selectedPrompt(){ return PROMPTS.find(p => p.id === state.selectedId) || todayPrompt(); }
function categories(){ return ["All", ...Array.from(new Set(PROMPTS.map(p => p.category)))]; }
function formatTime(s){ const m = Math.floor(s/60); const r = s%60; return `${String(m).padStart(2,"0")}:${String(r).padStart(2,"0")}`; }
function imageTag(src, alt){ return `<img class="sketch-img" src="${esc(src)}" alt="${esc(alt)}">`; }

function render(){
  if(!document.querySelector(".app-shell")) renderShell();
  $$(".nav-btn").forEach(b => b.classList.toggle("active", b.dataset.nav === state.section));
  if(state.section === "today") renderToday();
  if(state.section === "library") renderLibrary();
  if(state.section === "practice") renderPractice();
  if(state.section === "favourites") renderFavourites();
  if(state.section === "about") renderAbout();
}

function renderShell(){
  document.body.innerHTML = `
    <div class="app-shell">
      <header class="topbar">
        <div class="brand" data-nav="today">
          <div class="logo-mark">✎</div>
          <div><strong>SketchWise</strong><span>Asset-based sketch references · v${APP_VERSION}</span></div>
        </div>
        <nav class="nav">
          <button class="nav-btn active" data-nav="today">Today</button>
          <button class="nav-btn" data-nav="library">Library</button>
          <button class="nav-btn" data-nav="practice">Practice</button>
          <button class="nav-btn" data-nav="favourites">Favourites</button>
          <button class="nav-btn" data-nav="about">About</button>
        </nav>
      </header>
      <main id="app"></main>
    </div>
  `;
}

function renderToday(){
  const p = selectedPrompt();
  const done = doneSet().has(p.id);
  const fav = favSet().has(p.id);
  $("#app").innerHTML = `
    <section class="hero">
      <div>
        <div class="eyebrow">Today’s sketch · ${esc(p.category)} · ${esc(p.difficulty)} · ${esc(p.time)}</div>
        <h1>${esc(p.title)}</h1>
        <p>${esc(p.subtitle)}</p>
        <div class="hero-actions">
          <button class="pill-btn active" data-action="startDrawing">Start drawing</button>
          <button class="pill-btn" data-action="toggleDone" data-id="${p.id}">${done ? "Done ✓" : "Mark done"}</button>
          <button class="pill-btn" data-action="toggleFav" data-id="${p.id}">${fav ? "Saved ★" : "Save"}</button>
        </div>
      </div>
      <div class="hero-sketch">${imageTag(p.final, p.title + " final sketch")}</div>
    </section>

    <section class="lesson-grid">
      <article class="reference-card">
        <div class="eyebrow">Final reference</div>
        ${imageTag(p.final, p.title + " final reference")}
      </article>

      <article class="reference-card">
        <div class="eyebrow">Construction guide</div>
        ${imageTag(p.stepsImage, p.title + " construction guide")}
      </article>

      <article class="steps-card">
        <div class="eyebrow">Why draw this</div>
        <h2>${esc(p.why)}</h2>
        <ol>${p.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol>
      </article>

      <article class="tips-card">
        <div class="eyebrow">Teacher notes</div>
        <ul>${p.tips.map(s => `<li>${esc(s)}</li>`).join("")}</ul>
      </article>
    </section>

    <section class="method-card">
      <strong>How to use today’s prompt</strong>
      <p>Spend 30 seconds looking before drawing. Copy the construction guide first, then use the final reference to clean the outline. Do not start with details.</p>
    </section>
  `;
}

function promptCard(p){
  const done = doneSet().has(p.id);
  const fav = favSet().has(p.id);
  return `<article class="prompt-card" data-action="openPrompt" data-id="${p.id}">
    <div class="prompt-thumb">${imageTag(p.final, p.title)}</div>
    <div class="prompt-info">
      <div class="eyebrow">${esc(p.category)} · ${esc(p.difficulty)}</div>
      <h2>${esc(p.title)}</h2>
      <p>${esc(p.subtitle)}</p>
      <div class="prompt-meta">
        <span>${esc(p.time)}</span>
        <span>${done ? "Done ✓" : "Not done"}</span>
        <span>${fav ? "★ Saved" : "Saveable"}</span>
      </div>
    </div>
  </article>`;
}

function renderLibrary(){
  const cats = categories();
  const prompts = state.filter === "All" ? PROMPTS : PROMPTS.filter(p => p.category === state.filter);
  $("#app").innerHTML = `
    <section class="page-head">
      <div>
        <div class="eyebrow">Sketch library</div>
        <h1>${PROMPTS.length} curated prompts</h1>
        <p>Fewer prompts for now, but with proper asset-based references that can be improved one by one.</p>
      </div>
    </section>
    <section class="filter-row">
      ${cats.map(c => `<button class="chip ${state.filter===c?"active":""}" data-action="filter" data-filter="${esc(c)}">${esc(c)}</button>`).join("")}
    </section>
    <section class="library-grid">
      ${prompts.map(promptCard).join("")}
    </section>
  `;
}

function renderPractice(){
  $("#app").innerHTML = `
    <section class="page-head">
      <div>
        <div class="eyebrow">Practice timer</div>
        <h1>Draw without overthinking.</h1>
        <p>Pick a short timer. The goal is consistency, not a masterpiece.</p>
      </div>
    </section>

    <section class="timer-card">
      <div id="timerTime" class="timer-time">${formatTime(state.timerSeconds)}</div>
      <div class="timer-actions">
        <button class="pill-btn" data-action="setTimer" data-seconds="300">5 min</button>
        <button class="pill-btn" data-action="setTimer" data-seconds="600">10 min</button>
        <button class="pill-btn" data-action="setTimer" data-seconds="1200">20 min</button>
        ${state.timerRunning ? `<button class="pill-btn active" data-action="pauseTimer">Pause</button>` : `<button class="pill-btn active" data-action="startTimer">Start</button>`}
        <button class="pill-btn" data-action="resetTimer">Reset</button>
      </div>
    </section>

    <section class="practice-grid">
      <article><h2>2-minute warm-up</h2><p>Draw straight lines, circles, ellipses and S-curves. Ugly is allowed. Stiff is the enemy.</p></article>
      <article><h2>10-minute sketch</h2><p>Spend 2 minutes on big shapes, 5 minutes on construction, 3 minutes on shadow and texture.</p></article>
      <article><h2>Second attempt</h2><p>Draw the same prompt again tomorrow or later today. The second version is where learning becomes visible.</p></article>
    </section>
  `;
}

function renderFavourites(){
  const favs = favSet();
  const prompts = PROMPTS.filter(p => favs.has(p.id));
  $("#app").innerHTML = `
    <section class="page-head">
      <div><div class="eyebrow">Saved prompts</div><h1>Favourites</h1><p>Keep the sketches you want to repeat.</p></div>
    </section>
    <section class="library-grid">
      ${prompts.length ? prompts.map(promptCard).join("") : `<article class="empty-card">No favourites yet. Save sketches from Today or Library.</article>`}
    </section>
  `;
}

function renderAbout(){
  $("#app").innerHTML = `
    <section class="about-card">
      <h1>About SketchWise</h1>
      <p>SketchWise is a tiny daily drawing teacher. v1.3 uses real SVG asset files instead of trying to generate all drawings inside JavaScript.</p>
      <div class="about-grid">
        <div><strong>${PROMPTS.length}</strong><span>curated prompts</span></div>
        <div><strong>${doneSet().size}</strong><span>done</span></div>
        <div><strong>${favSet().size}</strong><span>saved</span></div>
      </div>
      <section class="method-card">
        <strong>The rule</strong>
        <p>Draw big shapes first. Details last. The fastest way to ruin a sketch is to start with tiny nonsense before the structure exists.</p>
      </section>
    </section>
  `;
}

function openPrompt(id){ state.selectedId = id; state.section = "today"; render(); }
function toggleDone(id){ const s = doneSet(); s.has(id) ? s.delete(id) : s.add(id); setDone(s); render(); }
function toggleFav(id){ const s = favSet(); s.has(id) ? s.delete(id) : s.add(id); setFavs(s); render(); }
function setTimer(seconds){ state.timerSeconds = Number(seconds); localStorage.setItem(STORAGE.timer, String(state.timerSeconds)); renderPractice(); }
function startTimer(){
  if(state.timerRunning) return;
  state.timerRunning = true;
  state.timerId = setInterval(() => {
    state.timerSeconds = Math.max(0, state.timerSeconds - 1);
    localStorage.setItem(STORAGE.timer, String(state.timerSeconds));
    const el = $("#timerTime");
    if(el) el.textContent = formatTime(state.timerSeconds);
    if(state.timerSeconds <= 0) pauseTimer();
  }, 1000);
  renderPractice();
}
function pauseTimer(){ state.timerRunning = false; clearInterval(state.timerId); state.timerId = null; renderPractice(); }
function resetTimer(){ pauseTimer(); state.timerSeconds = 600; localStorage.setItem(STORAGE.timer, String(state.timerSeconds)); renderPractice(); }

function handleClick(e){
  const nav = e.target.closest("[data-nav]");
  if(nav){ state.section = nav.dataset.nav; render(); return; }
  const action = e.target.closest("[data-action]");
  if(!action) return;
  const a = action.dataset.action;
  if(a === "openPrompt") openPrompt(action.dataset.id);
  if(a === "toggleDone") toggleDone(action.dataset.id);
  if(a === "toggleFav") toggleFav(action.dataset.id);
  if(a === "filter"){ state.filter = action.dataset.filter; renderLibrary(); }
  if(a === "startDrawing"){ state.section = "practice"; renderPractice(); }
  if(a === "setTimer") setTimer(action.dataset.seconds);
  if(a === "startTimer") startTimer();
  if(a === "pauseTimer") pauseTimer();
  if(a === "resetTimer") resetTimer();
}

function boot(){
  renderShell();
  document.addEventListener("click", handleClick);
  if("serviceWorker" in navigator) navigator.serviceWorker.register("./service-worker.js").catch(()=>{});
  render();
}
document.addEventListener("DOMContentLoaded", boot);


const APP_VERSION = "1.0";
const PROMPTS = [{"id": "espresso-cup", "title": "Espresso Cup", "subtitle": "A small cup with saucer and soft shadow", "difficulty": "Easy", "time": "10 min", "category": "Objects", "why": "Simple objects teach ellipses, proportion and shadow without becoming boring.", "steps": ["Start with a flat oval for the rim.", "Drop two slightly curved sides from the oval.", "Add a smaller oval for the saucer.", "Draw the handle as two C-shaped curves.", "Add a shadow under the cup and darken the inside rim."], "tips": ["The rim is an ellipse, not a football shape.", "Keep the handle light until the cup body feels right.", "The shadow should be soft, not a black puddle."], "svg": "cup"}, {"id": "old-key", "title": "Old Key", "subtitle": "A vintage key with a round head", "difficulty": "Easy", "time": "10 min", "category": "Objects", "why": "Keys are good practice for symmetry, negative space and small decorative details.", "steps": ["Draw a circle or oval for the key head.", "Cut a smaller hole inside it.", "Extend a long narrow shaft.", "Add two or three teeth at the end.", "Thicken the outline and add small scratches."], "tips": ["Keep the shaft straight before adding decoration.", "The teeth should feel functional, not random.", "Small imperfections make it look more real."], "svg": "key"}, {"id": "paper-plane", "title": "Paper Plane", "subtitle": "A folded paper plane in perspective", "difficulty": "Easy", "time": "8 min", "category": "Shapes", "why": "Great for learning clean angles and simple perspective.", "steps": ["Draw a long triangle pointing to the side.", "Add the main fold line from nose to back.", "Draw the second wing underneath.", "Add small fold lines near the tail.", "Use light shading under the lower wing."], "tips": ["The nose should be sharp.", "Keep fold lines confident and simple.", "Do not over-shade; paper is light."], "svg": "plane"}, {"id": "house-plant", "title": "House Plant", "subtitle": "A small potted plant with simple leaves", "difficulty": "Medium", "time": "15 min", "category": "Nature", "why": "Plants teach organic curves while the pot keeps the sketch grounded.", "steps": ["Draw a simple trapezoid pot.", "Add soil line as a shallow curve.", "Sketch 5–7 leaf stems from the centre.", "Draw leaves as loose almond shapes.", "Add light veins and a shadow under the pot."], "tips": ["Leaves should vary slightly in size.", "Do not make every leaf perfectly symmetrical.", "Let some leaves overlap."], "svg": "plant"}, {"id": "sneaker", "title": "Side-View Sneaker", "subtitle": "A simple trainer from the side", "difficulty": "Medium", "time": "20 min", "category": "Everyday", "why": "Shoes teach proportion, contour and useful everyday object drawing.", "steps": ["Draw the sole as a long curved rectangle.", "Add the upper shape above it.", "Mark the heel, tongue and opening.", "Add laces as short crossing lines.", "Finish with sole texture and small shadows."], "tips": ["The sole is the foundation; get it right first.", "Do not draw every lace too early.", "Keep the toe rounded, not pointy."], "svg": "sneaker"}, {"id": "street-lamp", "title": "Street Lamp", "subtitle": "A classic lamp post with a small glow", "difficulty": "Medium", "time": "15 min", "category": "Urban", "why": "A street lamp gives you vertical proportion, simple architecture and atmosphere.", "steps": ["Draw a long vertical post.", "Add a small base at the bottom.", "Sketch the lamp housing as a hexagon or box.", "Add the cap and tiny decorative top.", "Shade inside the lamp and add a soft glow outline."], "tips": ["Use the post as your centre line.", "Keep the lamp symmetrical enough, but not perfect.", "A little glow makes it feel alive."], "svg": "lamp"}, {"id": "goldfish", "title": "Goldfish", "subtitle": "A simple fish with flowing fins", "difficulty": "Medium", "time": "15 min", "category": "Animals", "why": "Fish are forgiving and teach flowing lines without too much anatomy.", "steps": ["Draw an oval body tilted slightly.", "Add a triangle tail with soft curves.", "Place the eye and small mouth.", "Add top and bottom fins.", "Use curved lines to show scales and fin texture."], "tips": ["Make the tail light and flowing.", "The eye placement gives the fish character.", "Do not cover the whole body with scales."], "svg": "fish"}, {"id": "little-fox", "title": "Sitting Fox", "subtitle": "A stylised fox sitting upright", "difficulty": "Medium", "time": "20 min", "category": "Animals", "why": "This is cute but useful: triangles, curves, symmetry and character.", "steps": ["Draw a rounded triangle for the head.", "Add two large triangle ears.", "Sketch a pear-shaped body below.", "Wrap a big tail around one side.", "Add face markings, eyes and paws."], "tips": ["The tail should be big and expressive.", "Keep the face simple.", "Use sharp ears against soft body curves."], "svg": "fox"}, {"id": "tiny-boat", "title": "Tiny Sailboat", "subtitle": "A small boat with sail and water lines", "difficulty": "Easy", "time": "10 min", "category": "Scenes", "why": "A tiny boat gives you a complete scene without too many details.", "steps": ["Draw the hull as a shallow curved shape.", "Add a vertical mast.", "Draw one large triangular sail and one smaller sail.", "Add a horizon line behind it.", "Use short horizontal strokes for water."], "tips": ["Keep the water lines horizontal.", "The sails should be clean triangles.", "Leave white space; do not fill the whole page."], "svg": "boat"}, {"id": "bicycle", "title": "Simple Bicycle", "subtitle": "A basic side-view bicycle", "difficulty": "Slightly challenging", "time": "25 min", "category": "Everyday", "why": "Bicycles look hard, but they are mostly circles, triangles and connecting lines.", "steps": ["Draw two equal circles for wheels.", "Connect them with a simple triangle frame.", "Add seat and handlebar.", "Add fork lines to the front wheel.", "Suggest spokes lightly, not every single one."], "tips": ["Equal wheels matter more than tiny details.", "Draw the frame lightly first.", "Too many spokes will make it messy."], "svg": "bike"}, {"id": "corner-building", "title": "Corner Building", "subtitle": "A simple city corner in perspective", "difficulty": "Slightly challenging", "time": "25 min", "category": "Urban", "why": "This teaches basic perspective without needing a full architecture lesson.", "steps": ["Draw a vertical corner line.", "Draw two building faces going away from it.", "Add rows of windows on both sides.", "Place a door at street level.", "Add light shadows under window ledges."], "tips": ["Keep vertical lines vertical.", "Windows should follow the building angle.", "Do not over-detail; rhythm matters more."], "svg": "building"}, {"id": "sleeping-cat", "title": "Sleeping Cat", "subtitle": "A curled-up cat shape", "difficulty": "Medium", "time": "15 min", "category": "Animals", "why": "A sleeping cat teaches soft curves and silhouette more than detail.", "steps": ["Draw a large bean shape for the body.", "Add a small head tucked in.", "Place one ear and a curved tail.", "Add closed eye and tiny nose.", "Use soft fur strokes around the outline."], "tips": ["The silhouette should read as cat before details.", "Keep the pose calm and compact.", "Do not add too many fur lines."], "svg": "cat"}, {"id": "mushroom", "title": "Forest Mushroom", "subtitle": "A mushroom with cap, stem and ground texture", "difficulty": "Easy", "time": "10 min", "category": "Nature", "why": "Mushrooms are simple but charming, and they teach form and texture.", "steps": ["Draw a wide curved cap.", "Add a thick stem underneath.", "Draw the underside curve of the cap.", "Add spots or texture on the cap.", "Add grass and small shadow at the base."], "tips": ["The cap should feel like it sits on the stem.", "Spots should follow the cap curve.", "Ground texture makes it feel placed."], "svg": "mushroom"}, {"id": "violin", "title": "Violin Silhouette", "subtitle": "A simplified violin shape", "difficulty": "Slightly challenging", "time": "25 min", "category": "Music", "why": "The violin is elegant and teaches symmetry, curves and negative space.", "steps": ["Draw a centre line.", "Sketch upper and lower body curves.", "Narrow the waist in the middle.", "Add neck, scroll and bridge.", "Add four strings and f-holes lightly."], "tips": ["Use the centre line to stay balanced.", "Do not rush the curves.", "F-holes can be suggested, not perfect."], "svg": "violin"}, {"id": "open-book", "title": "Open Book", "subtitle": "A book opened flat with curved pages", "difficulty": "Easy", "time": "12 min", "category": "Objects", "why": "Books teach perspective, symmetry and line rhythm.", "steps": ["Draw a shallow V shape for the centre fold.", "Add two page blocks on each side.", "Curve the outer page edges.", "Add a few light page lines.", "Shade under the book."], "tips": ["The centre fold anchors everything.", "Page lines should be lighter than the outline.", "Keep both sides similar, not identical."], "svg": "book"}, {"id": "lantern", "title": "Small Lantern", "subtitle": "A camping lantern with handle", "difficulty": "Medium", "time": "18 min", "category": "Objects", "why": "Lanterns combine ellipses, straight lines and transparent surfaces.", "steps": ["Draw top and bottom ellipses.", "Connect them with vertical sides.", "Add glass area inside.", "Draw a curved handle above.", "Shade inside the glass and under the base."], "tips": ["Top and bottom should align.", "Glass edges are lighter than metal edges.", "The handle is a big smooth curve."], "svg": "lantern"}, {"id": "mountain-cabin", "title": "Mountain Cabin", "subtitle": "A tiny cabin with mountains behind", "difficulty": "Medium", "time": "20 min", "category": "Scenes", "why": "A small landscape teaches layering: foreground, subject, background.", "steps": ["Draw mountain triangles in the background.", "Place a small cabin rectangle in front.", "Add roof, door and window.", "Add tree shapes around it.", "Use simple shading to separate layers."], "tips": ["Mountains should stay lighter than the cabin.", "Keep the cabin simple.", "Layering creates depth."], "svg": "cabin"}, {"id": "camera", "title": "Old Camera", "subtitle": "A simple vintage camera front view", "difficulty": "Medium", "time": "18 min", "category": "Objects", "why": "Cameras are great for rectangles, circles and clean design details.", "steps": ["Draw a rounded rectangle body.", "Add a large lens circle in the middle.", "Add a smaller inner lens circle.", "Place viewfinder and button on top.", "Shade the lens darkest."], "tips": ["The lens must be centred.", "Rounded corners make it friendlier.", "Do not overcomplicate buttons."], "svg": "camera"}, {"id": "leaf-study", "title": "Single Leaf", "subtitle": "One detailed leaf with veins", "difficulty": "Easy", "time": "10 min", "category": "Nature", "why": "A single leaf is perfect for controlled observation and line confidence.", "steps": ["Draw the main stem as a curved line.", "Add the outer leaf shape around it.", "Draw side veins from the stem.", "Lightly vary the edge shape.", "Add tiny shadows near the stem."], "tips": ["Veins should grow from the centre stem.", "The outline should not be too perfect.", "Line weight can show depth."], "svg": "leaf"}, {"id": "chair", "title": "Simple Chair", "subtitle": "A wooden chair in slight perspective", "difficulty": "Slightly challenging", "time": "25 min", "category": "Objects", "why": "Chairs are secretly difficult, but this version teaches structure without panic.", "steps": ["Draw the seat as a tilted rectangle.", "Add front legs first.", "Add back legs slightly higher.", "Draw the backrest posts.", "Connect with simple crossbars."], "tips": ["Use light construction lines.", "Legs should touch the same ground plane.", "Perspective matters more than decoration."], "svg": "chair"}, {"id": "croissant", "title": "Croissant", "subtitle": "A crescent pastry with flaky texture", "difficulty": "Medium", "time": "15 min", "category": "Food", "why": "A croissant is a fun way to practise organic form and texture.", "steps": ["Draw a crescent bean shape.", "Divide it into curved sections.", "Round the two ends inward.", "Add flaky texture lines.", "Shade under the lower edge."], "tips": ["The sections should follow the crescent curve.", "Texture should be light.", "The shadow sells the volume."], "svg": "croissant"}, {"id": "palm-tree", "title": "Palm Tree", "subtitle": "A simple palm tree with curved trunk", "difficulty": "Easy", "time": "10 min", "category": "Nature", "why": "Palm trees teach rhythm, repeated shapes and relaxed linework.", "steps": ["Draw a curved trunk with two sides.", "Add ring marks across the trunk.", "Draw long leaves from the top.", "Vary the leaf angles.", "Add ground shadow and maybe a horizon line."], "tips": ["Leaves should not all be the same length.", "The trunk curve gives personality.", "Keep it loose."], "svg": "palm"}, {"id": "guitar", "title": "Acoustic Guitar", "subtitle": "A simplified guitar body and neck", "difficulty": "Slightly challenging", "time": "25 min", "category": "Music", "why": "A guitar is personal, useful and great for symmetry and curves.", "steps": ["Draw a centre line.", "Sketch the guitar body as two connected curves.", "Add sound hole and bridge.", "Draw the neck and headstock.", "Add strings as light straight lines."], "tips": ["Use the centre line to keep the guitar balanced.", "The waist curve is important.", "Strings should be light, not heavy black lines."], "svg": "guitar"}];
const STORAGE = {
  done: "sketchwise_done_v1",
  favs: "sketchwise_favs_v1",
  timer: "sketchwise_timer_v1"
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
function selectedPrompt(){
  return PROMPTS.find(p => p.id === state.selectedId) || todayPrompt();
}
function categories(){
  return ["All", ...Array.from(new Set(PROMPTS.map(p => p.category)))];
}
function formatTime(s){
  const m = Math.floor(s/60);
  const r = s%60;
  return `${String(m).padStart(2,"0")}:${String(r).padStart(2,"0")}`;
}


function sketchSVG(type){
  const common = `viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg"`;
  const style = `
    <defs>
      <filter id="soft"><feDropShadow dx="0" dy="8" stdDeviation="8" flood-opacity=".14"/></filter>
    </defs>
  `;
  const stroke = `stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"`;
  const thin = `stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity=".68"`;
  const wash = `fill="currentColor" opacity=".06"`;

  const map = {
    cup: `<ellipse cx="205" cy="110" rx="72" ry="24" ${stroke}/><path d="M135 112c8 82 22 120 70 120s62-38 70-120" ${stroke}/><ellipse cx="205" cy="235" rx="112" ry="22" ${thin}/><path d="M276 142c46 0 48 58 4 64" ${stroke}/><path d="M166 129c28 12 58 12 82 0" ${thin}/><path d="M110 262c60 18 145 18 205 0" ${thin}/>`,
    key: `<circle cx="135" cy="150" r="55" ${stroke}/><circle cx="135" cy="150" r="22" ${thin}/><path d="M190 150h130" ${stroke}/><path d="M290 150v35h35" ${stroke}/><path d="M250 150v25" ${stroke}/><path d="M100 105c20-14 48-14 70 0" ${thin}/>`,
    plane: `<path d="M64 164L358 76 242 256 205 184 64 164z" ${stroke}/><path d="M205 184l153-108" ${thin}/><path d="M205 184l-25 72 62-1" ${thin}/>`,
    plant: `<path d="M145 218h130l-18 70h-94z" ${stroke}/><path d="M156 218c30 10 70 10 108 0" ${thin}/><path d="M210 216C190 160 150 132 112 124c20 40 50 60 98 92z" ${stroke}/><path d="M210 216c10-64 45-100 86-118 0 56-26 90-86 118z" ${stroke}/><path d="M210 216c-4-48 18-82 58-104" ${thin}/><path d="M210 216c-34-38-60-48-98-50" ${thin}/>`,
    sneaker: `<path d="M78 220c48 24 208 23 278 5 10 18 2 34-26 39H105c-30-2-42-21-27-44z" ${stroke}/><path d="M104 218c20-52 72-82 132-74 37 5 54 31 82 64" ${stroke}/><path d="M170 157l-28 62" ${thin}/><path d="M204 151l-20 67" ${thin}/><path d="M226 171c-28 13-52 15-80 8" ${thin}/><path d="M132 252h190" ${thin}/>`,
    lamp: `<path d="M210 100v175" ${stroke}/><path d="M168 284h84" ${stroke}/><path d="M178 100h64l20 58-52 34-52-34z" ${stroke}/><path d="M190 82h40l12 18h-64z" ${stroke}/><path d="M188 128h44" ${thin}/><path d="M160 206c32 12 68 12 100 0" ${thin}/>`,
    fish: `<path d="M102 160c55-70 155-70 210 0-55 70-155 70-210 0z" ${stroke}/><path d="M312 160l58-48v96z" ${stroke}/><circle cx="164" cy="145" r="8" fill="currentColor"/><path d="M210 108c14 22 14 82 0 104" ${thin}/><path d="M240 126c18 20 18 48 0 68" ${thin}/><path d="M120 190c-10 28-30 42-54 50" ${thin}/>`,
    fox: `<path d="M210 65l70 70-38 20-32-20-32 20-38-20z" ${stroke}/><path d="M178 155c-48 40-48 110 32 130 80-20 80-90 32-130" ${stroke}/><path d="M150 238c-70 10-80-70-32-92 15 50 44 76 92 89" ${stroke}/><circle cx="188" cy="126" r="6" fill="currentColor"/><circle cx="232" cy="126" r="6" fill="currentColor"/><path d="M200 145h20" ${thin}/><path d="M190 178c14 16 28 16 42 0" ${thin}/>`,
    boat: `<path d="M100 205h220l-28 45H132z" ${stroke}/><path d="M210 80v125" ${stroke}/><path d="M210 88l-82 104h82z" ${stroke}/><path d="M216 110l74 82h-74z" ${stroke}/><path d="M70 270c50-12 84-12 126 0s82 12 154-2" ${thin}/><path d="M90 292c60-10 120-8 190 0" ${thin}/>`,
    bike: `<circle cx="130" cy="220" r="56" ${stroke}/><circle cx="300" cy="220" r="56" ${stroke}/><path d="M130 220l70-80 54 80h-124l70-80h70" ${stroke}/><path d="M254 220l46-84h40" ${stroke}/><path d="M200 140l-18-36h42" ${stroke}/><path d="M270 140l-20-34" ${thin}/><path d="M300 220l-30-80" ${thin}/>`,
    building: `<path d="M210 70v215" ${stroke}/><path d="M210 85l-120 45v155h120" ${stroke}/><path d="M210 85l125 45v155H210" ${stroke}/><path d="M118 150h48M118 190h48M118 230h48" ${thin}/><path d="M252 150h48M252 190h48M252 230h48" ${thin}/><path d="M185 285v-46h50v46" ${stroke}/>`,
    cat: `<path d="M95 210c36-82 148-108 218-46 54 48 18 108-74 108H128c-38 0-52-30-33-62z" ${stroke}/><path d="M132 164l22-42 28 34" ${stroke}/><path d="M270 172c44 20 58 52 32 82" ${stroke}/><path d="M175 190c16 12 34 12 52 0" ${thin}/><path d="M150 206h-44M152 222h-50M252 206h44M250 222h50" ${thin}/>`,
    mushroom: `<path d="M94 154c28-70 198-70 232 0 18 38-250 38-232 0z" ${stroke}/><path d="M170 178c-6 44-18 78-38 104h156c-22-28-34-62-38-104" ${stroke}/><circle cx="160" cy="124" r="11" ${wash}/><circle cx="220" cy="112" r="14" ${wash}/><circle cx="270" cy="138" r="10" ${wash}/><path d="M96 288c60-18 150-18 230 0" ${thin}/>`,
    violin: `<path d="M210 70v205" ${thin}/><path d="M210 105c-58-52-122 12-78 58-44 24-40 98 28 100 28 0 38-22 50-36 12 14 22 36 50 36 68-2 72-76 28-100 44-46-20-110-78-58z" ${stroke}/><path d="M210 70v-38" ${stroke}/><path d="M190 35c24-28 54 8 24 24" ${thin}/><path d="M172 166c12-12 24-12 34 0M248 166c-12-12-24-12-34 0" ${thin}/><path d="M188 230h44" ${stroke}/><path d="M192 72v180M204 72v180M216 72v180M228 72v180" ${thin}/>`,
    book: `<path d="M210 92v168" ${stroke}/><path d="M210 110c-44-30-92-34-142-18v152c48-16 96-10 142 16" ${stroke}/><path d="M210 110c44-30 92-34 142-18v152c-48-16-96-10-142 16" ${stroke}/><path d="M95 128c34-8 66-4 94 12M95 166c34-8 66-4 94 12M232 140c30-14 62-18 96-12M232 178c30-14 62-18 96-12" ${thin}/>`,
    lantern: `<ellipse cx="210" cy="92" rx="60" ry="18" ${stroke}/><ellipse cx="210" cy="246" rx="76" ry="20" ${stroke}/><path d="M150 92l-16 154M270 92l16 154" ${stroke}/><path d="M164 116h92v108h-92z" ${stroke}/><path d="M166 78c20-48 68-48 88 0" ${thin}/><path d="M190 138c28 28 28 52 0 72M230 138c-28 28-28 52 0 72" ${thin}/>`,
    cabin: `<path d="M45 210l78-102 62 82 70-112 120 160" ${thin}/><path d="M138 196h132v82H138z" ${stroke}/><path d="M120 198l84-62 84 62" ${stroke}/><path d="M190 278v-42h32v42" ${stroke}/><path d="M148 225h28v26h-28zM236 225h28v26h-28z" ${thin}/><path d="M75 278c70-18 180-18 280 0" ${thin}/>`,
    camera: `<rect x="86" y="110" width="248" height="150" rx="26" ${stroke}/><circle cx="210" cy="185" r="54" ${stroke}/><circle cx="210" cy="185" r="24" ${thin}/><path d="M128 110l20-34h74l18 34" ${stroke}/><path d="M278 138h30" ${thin}/><path d="M108 258c60 18 150 18 205 0" ${thin}/>`,
    leaf: `<path d="M210 270C96 214 108 106 210 54c102 52 114 160 0 216z" ${stroke}/><path d="M210 270V54" ${thin}/><path d="M210 122c-34 4-60 18-82 42M210 156c36 4 64 18 88 44M210 192c-32 4-58 18-78 40" ${thin}/>`,
    chair: `<path d="M134 142l140-24 36 62-142 26z" ${stroke}/><path d="M150 206v74M290 182v80M178 202l-20 74M308 178l24 70" ${stroke}/><path d="M160 136V72l124-20v66" ${stroke}/><path d="M160 94l124-20" ${thin}/><path d="M168 238h140" ${thin}/>`,
    croissant: `<path d="M80 190c50-88 210-116 260-10-58-30-102-20-132 20-42-35-84-34-128-10z" ${stroke}/><path d="M118 174c28 28 50 36 82 26M178 138c10 38 22 56 42 70M250 136c-18 30-26 48-22 74M312 168c-30 14-50 24-72 42" ${thin}/><path d="M110 244c60 18 150 18 210 0" ${thin}/>`,
    palm: `<path d="M200 280c10-68 20-132 8-196" ${stroke}/><path d="M184 106c-60-30-98-22-130 16 58-6 98 4 130 28z" ${stroke}/><path d="M210 96c-8-54 20-78 70-80-28 42-42 70-44 112z" ${stroke}/><path d="M218 112c58-38 104-34 140 0-54 6-92 20-126 48z" ${stroke}/><path d="M202 136c-32 34-46 72-42 116" ${thin}/><path d="M184 160h48M178 190h52M172 220h54" ${thin}/>`,
    guitar: `<path d="M210 64v210" ${thin}/><path d="M210 118c-40-46-100-16-90 38 4 22 22 32 36 44-36 32-22 90 36 96 22 2 42-10 54-28 12 18 32 30 54 28 58-6 72-64 36-96 14-12 32-22 36-44 10-54-50-84-90-38-14 16-54 16-68 0z" ${stroke}/><circle cx="210" cy="196" r="28" ${stroke}/><path d="M186 246h48" ${stroke}/><path d="M210 96V28h58" ${stroke}/><path d="M195 28h88" ${thin}/><path d="M196 28v222M204 28v222M212 28v222M220 28v222M228 28v222" ${thin}/>`
  };
  return `<svg class="sketch-svg" ${common}>${style}<g>${map[type] || map.cup}</g></svg>`;
}


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
          <div><strong>SketchWise</strong><span>Daily sketch teacher · v${APP_VERSION}</span></div>
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
      <div class="hero-sketch">${sketchSVG(p.svg)}</div>
    </section>

    <section class="lesson-grid">
      <article class="reference-card">
        <div class="eyebrow">Reference</div>
        ${sketchSVG(p.svg)}
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
      <p>Look for 30 seconds. Draw the big shape first. Do not start with details. If it looks bad halfway through, good — that is usually when the drawing is still being built.</p>
    </section>
  `;
}

function promptCard(p){
  const done = doneSet().has(p.id);
  const fav = favSet().has(p.id);
  return `<article class="prompt-card" data-action="openPrompt" data-id="${p.id}">
    <div class="prompt-thumb">${sketchSVG(p.svg)}</div>
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
        <h1>${PROMPTS.length} drawing prompts</h1>
        <p>Simple enough to start, interesting enough not to feel like homework.</p>
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
      <article>
        <h2>2-minute warm-up</h2>
        <p>Draw straight lines, circles, ellipses and S-curves. Ugly is allowed. Stiff is the enemy.</p>
      </article>
      <article>
        <h2>10-minute sketch</h2>
        <p>Spend 2 minutes on big shapes, 5 minutes on construction, 3 minutes on shadow and texture.</p>
      </article>
      <article>
        <h2>Second attempt</h2>
        <p>Draw the same prompt again tomorrow or later today. The second version is where learning becomes visible.</p>
      </article>
    </section>
  `;
}

function renderFavourites(){
  const favs = favSet();
  const prompts = PROMPTS.filter(p => favs.has(p.id));
  $("#app").innerHTML = `
    <section class="page-head">
      <div>
        <div class="eyebrow">Saved prompts</div>
        <h1>Favourites</h1>
        <p>Keep the sketches you want to repeat.</p>
      </div>
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
      <p>SketchWise is a tiny daily drawing teacher. It gives you one simple-but-not-boring sketch to copy each day, plus steps, tips and a timer.</p>
      <div class="about-grid">
        <div><strong>${PROMPTS.length}</strong><span>prompts</span></div>
        <div><strong>${doneSet().size}</strong><span>done</span></div>
        <div><strong>${favSet().size}</strong><span>saved</span></div>
      </div>
      <section class="method-card">
        <strong>The rule</strong>
        <p>Draw big shapes first. Details last. The fastest way to ruin a sketch is to start with eyelashes, screws, strings, windows, buttons or other tiny nonsense before the structure exists.</p>
      </section>
    </section>
  `;
}

function openPrompt(id){
  state.selectedId = id;
  state.section = "today";
  render();
}

function toggleDone(id){
  const s = doneSet();
  s.has(id) ? s.delete(id) : s.add(id);
  setDone(s);
  render();
}

function toggleFav(id){
  const s = favSet();
  s.has(id) ? s.delete(id) : s.add(id);
  setFavs(s);
  render();
}

function setTimer(seconds){
  state.timerSeconds = Number(seconds);
  localStorage.setItem(STORAGE.timer, String(state.timerSeconds));
  renderPractice();
}

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

function pauseTimer(){
  state.timerRunning = false;
  clearInterval(state.timerId);
  state.timerId = null;
  renderPractice();
}

function resetTimer(){
  pauseTimer();
  state.timerSeconds = 600;
  localStorage.setItem(STORAGE.timer, String(state.timerSeconds));
  renderPractice();
}

function handleClick(e){
  const nav = e.target.closest("[data-nav]");
  if(nav){
    state.section = nav.dataset.nav;
    render();
    return;
  }
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

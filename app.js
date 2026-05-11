
const APP_VERSION = "1.1";
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
  const common = `viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg"`;
  const defs = `
    <defs>
      <pattern id="paperGrain" width="28" height="28" patternUnits="userSpaceOnUse">
        <path d="M4 8c7 3 12-2 20 1M3 22c8-4 14 3 22-2M11 2c4 6 10 4 14 8" stroke="currentColor" stroke-width="1" opacity=".035" fill="none"/>
      </pattern>
    </defs>
  `;
  const s = `stroke="currentColor" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" fill="none"`;
  const m = `stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity=".62"`;
  const l = `stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity=".34"`;
  const shade = `stroke="currentColor" stroke-width="2.4" stroke-linecap="round" opacity=".28" fill="none"`;
  const wash = `fill="currentColor" opacity=".055"`;

  const map = {
    cup: `<ellipse cx="250" cy="122" rx="86" ry="30" ${s}/><path d="M166 125c10 96 28 142 84 142s74-46 84-142" ${s}/><ellipse cx="250" cy="274" rx="138" ry="28" ${m}/><path d="M337 158c58-3 62 70 8 80" ${s}/><path d="M346 176c28 10 26 40 0 46" ${m}/><path d="M202 143c34 15 72 15 102 0" ${m}/><path d="M194 177c42 10 82 8 116-1M200 205c35 8 68 7 100-2" ${shade}/><path d="M112 310c80 22 184 21 276-4" ${shade}/><path d="M185 92c26-20 100-18 126 0" ${l}/>`,
    key: `<circle cx="164" cy="178" r="66" ${s}/><circle cx="164" cy="178" r="28" ${m}/><path d="M230 178h160" ${s}/><path d="M348 178v44h44" ${s}/><path d="M298 178v30" ${s}/><path d="M120 124c26-17 62-18 92 0M112 222c34 22 76 20 108-2" ${shade}/><path d="M252 164c18 8 44 8 74 0M252 192c22 8 54 7 86-2" ${l}/>`,
    plane: `<path d="M70 192L446 76 292 308 244 212 70 192z" ${s}/><path d="M244 212L446 76" ${m}/><path d="M244 212l-32 88 80 8" ${m}/><path d="M110 197c72 16 122 20 150 15M290 306c-20-42-36-72-46-94" ${shade}/><path d="M92 244c42 18 88 26 137 24" ${l}/>`,
    plant: `<path d="M172 250h156l-24 88H196z" ${s}/><path d="M185 250c38 13 84 13 130 0" ${m}/><path d="M252 248C222 176 170 142 112 134c26 52 66 82 140 114z" ${s}/><path d="M252 248c10-78 58-124 116-145 4 72-34 116-116 145z" ${s}/><path d="M252 248c-5-58 22-102 72-132" ${m}/><path d="M252 248c-44-48-78-62-128-65" ${m}/><path d="M218 166c20 28 31 54 34 82M304 142c-22 40-38 72-52 106M214 290h78M206 318h88" ${shade}/>`,
    sneaker: `<path d="M80 252c62 30 244 29 344 6 12 23 2 42-32 48H116c-38-2-54-26-36-54z" ${s}/><path d="M112 250c24-64 90-102 164-92 46 7 66 38 102 80" ${s}/><path d="M194 174l-34 75M235 166l-25 82" ${m}/><path d="M260 190c-36 17-68 18-104 8" ${m}/><path d="M132 292h246M124 270c70 12 160 13 256-4" ${shade}/><path d="M278 160c28 24 56 50 86 84M158 215c28-6 64-5 105 4" ${l}/>`,
    lamp: `<path d="M260 112v214" ${s}/><path d="M206 336h108" ${s}/><path d="M220 112h80l24 72-64 42-64-42z" ${s}/><path d="M236 88h48l16 24h-80z" ${s}/><path d="M236 146h52M226 184c28 14 68 13 98 0" ${m}/><path d="M198 248c40 14 84 15 124 0M230 318h60" ${shade}/><path d="M190 205c-34 20-54 48-62 84M330 205c34 20 54 48 62 84" ${l}/>`,
    fish: `<path d="M90 188c72-88 196-86 270 0-74 88-198 88-270 0z" ${s}/><path d="M360 188l76-60v120z" ${s}/><circle cx="166" cy="170" r="9" fill="currentColor"/><path d="M220 126c18 34 18 92 0 124" ${m}/><path d="M258 142c24 24 24 66 0 92" ${m}/><path d="M120 225c-16 36-44 56-84 66M380 158c22 18 34 42 36 68M390 138c4 34 4 66 0 100" ${shade}/><path d="M160 212c18 12 42 12 68 0M178 238c20 7 44 7 72-2" ${l}/>`,
    fox: `<path d="M260 66l88 88-48 26-40-24-40 24-48-26z" ${s}/><path d="M220 180c-58 48-58 132 40 158 98-26 98-110 40-158" ${s}/><path d="M180 278c-88 12-102-88-40-118 18 62 58 96 120 112" ${s}/><circle cx="232" cy="142" r="7" fill="currentColor"/><circle cx="288" cy="142" r="7" fill="currentColor"/><path d="M248 164h24M236 210c18 18 42 18 58 0" ${m}/><path d="M216 112c18 14 28 30 32 52M304 112c-18 14-28 30-32 52M202 250c34 30 72 42 116 28" ${shade}/>`,
    boat: `<path d="M112 240h276l-36 56H148z" ${s}/><path d="M260 78v162" ${s}/><path d="M260 88l-108 134h108z" ${s}/><path d="M268 116l94 106h-94z" ${s}/><path d="M78 320c64-16 108-15 160 1s104 14 202-4" ${shade}/><path d="M98 346c80-12 160-10 250 1" ${shade}/><path d="M178 226c48 10 96 8 146-2" ${m}/>`,
    bike: `<circle cx="154" cy="250" r="68" ${s}/><circle cx="374" cy="250" r="68" ${s}/><path d="M154 250l86-104 68 104H154l86-104h88" ${s}/><path d="M308 250l66-104h48" ${s}/><path d="M240 146l-22-46h54" ${s}/><path d="M328 146l-24-42" ${m}/><path d="M374 250l-46-104" ${m}/><path d="M154 182v136M86 250h136M374 182v136M306 250h136" ${l}/><path d="M116 316c58 18 116 18 174 0M334 316c32 6 62 4 92-6" ${shade}/>`,
    building: `<path d="M260 70v262" ${s}/><path d="M260 88l-150 58v186h150" ${s}/><path d="M260 88l156 58v186H260" ${s}/><path d="M146 170h60M146 218h60M146 266h60" ${m}/><path d="M312 170h62M312 218h62M312 266h62" ${m}/><path d="M230 332v-58h60v58" ${s}/><path d="M110 146l150-58 156 58" ${l}/><path d="M128 320c92 12 182 14 270-2" ${shade}/>`,
    cat: `<path d="M102 242c46-102 188-132 276-56 68 60 22 132-94 132H144c-50 0-70-38-42-76z" ${s}/><path d="M150 188l28-54 36 44" ${s}/><path d="M330 198c58 26 76 66 42 110" ${s}/><path d="M204 224c22 14 46 14 70 0" ${m}/><path d="M174 242h-58M176 260h-66M312 242h58M310 260h68" ${m}/><path d="M154 304c68 10 134 8 194-4" ${shade}/>`,
    mushroom: `<path d="M92 174c36-88 260-88 304 0 24 48-328 48-304 0z" ${s}/><path d="M196 208c-8 54-24 96-50 128h200c-28-34-44-76-50-128" ${s}/><circle cx="180" cy="136" r="12" ${wash}/><circle cx="260" cy="120" r="18" ${wash}/><circle cx="326" cy="154" r="12" ${wash}/><path d="M124 344c80-24 198-22 296 0" ${shade}/><path d="M196 246c46 16 88 16 128 0M190 280c50 13 94 13 136 0" ${shade}/>`,
    violin: `<path d="M260 62v254" ${m}/><path d="M260 108c-72-66-154 14-98 72-56 30-50 120 34 124 34 2 50-28 64-46 14 18 30 48 64 46 84-4 90-94 34-124 56-58-26-138-98-72z" ${s}/><path d="M260 62V24" ${s}/><path d="M238 30c30-34 68 10 30 30" ${m}/><path d="M216 184c14-16 30-16 44 0M304 184c-14-16-30-16-44 0" ${m}/><path d="M232 268h56" ${s}/><path d="M238 64v232M252 64v232M266 64v232M280 64v232" ${l}/><path d="M202 132c24 28 28 56 14 84M318 132c-24 28-28 56-14 84" ${shade}/>`,
    book: `<path d="M260 100v206" ${s}/><path d="M260 120c-58-38-120-44-184-22v190c62-22 126-14 184 20" ${s}/><path d="M260 120c58-38 120-44 184-22v190c-62-22-126-14-184 20" ${s}/><path d="M110 146c44-12 86-8 126 12M110 194c44-12 86-8 126 12M288 158c40-18 82-24 128-14M288 206c40-18 82-24 128-14" ${m}/><path d="M104 306c58 12 112 12 156 2M260 308c52-12 106-12 160-2" ${shade}/>`,
    lantern: `<ellipse cx="260" cy="92" rx="78" ry="22" ${s}/><ellipse cx="260" cy="292" rx="96" ry="26" ${s}/><path d="M184 94l-22 198M336 94l22 198" ${s}/><path d="M204 132h112v130H204z" ${s}/><path d="M206 76c26-60 82-60 108 0" ${m}/><path d="M234 160c34 34 34 66 0 92M286 160c-34 34-34 66 0 92" ${m}/><path d="M200 294c50 14 94 14 132 0M212 118c36 12 70 12 98 0" ${shade}/>`,
    cabin: `<path d="M42 240l100-132 78 104 88-142 156 204" ${m}/><path d="M168 230h166v96H168z" ${s}/><path d="M146 232l104-78 104 78" ${s}/><path d="M232 326v-52h40v52" ${s}/><path d="M182 266h34v30h-34zM304 266h34v30h-34z" ${m}/><path d="M78 340c88-24 240-24 366 0" ${shade}/><path d="M120 284c-24 10-42 24-54 46M390 276c30 10 50 28 60 56" ${l}/>`,
    camera: `<rect x="92" y="118" width="336" height="184" rx="32" ${s}/><circle cx="260" cy="210" r="68" ${s}/><circle cx="260" cy="210" r="32" ${m}/><path d="M142 118l28-42h96l24 42" ${s}/><path d="M348 154h42" ${m}/><path d="M130 302c78 22 196 22 276 0" ${shade}/><path d="M224 184c22-18 52-20 78-4M230 240c28 12 58 10 86-4" ${shade}/>`,
    leaf: `<path d="M260 326C118 258 132 124 260 58c128 66 142 200 0 268z" ${s}/><path d="M260 326V58" ${m}/><path d="M260 142c-44 6-78 24-108 54M260 184c46 6 84 26 116 58M260 228c-42 6-76 26-104 56" ${m}/><path d="M220 98c18 90 28 158 40 228M300 104c-18 88-30 154-40 222" ${l}/>`,
    chair: `<path d="M154 168l176-32 46 78-180 34z" ${s}/><path d="M174 248v88M350 214v98M210 244l-26 88M376 210l30 80" ${s}/><path d="M188 160V80l156-26v82" ${s}/><path d="M188 110l156-26" ${m}/><path d="M196 284h174M172 336c72 12 146 12 220 0" ${shade}/><path d="M230 76v76M278 66v76" ${l}/>`,
    croissant: `<path d="M78 222c62-110 270-146 344-14-76-40-132-28-174 24-54-44-108-42-170-10z" ${s}/><path d="M128 198c36 36 66 46 108 32M208 154c12 48 28 74 54 92M300 154c-24 38-36 62-30 92M382 194c-40 18-66 32-96 56" ${m}/><path d="M118 292c78 24 196 24 292 0" ${shade}/><path d="M142 216c58 20 110 22 156 8" ${shade}/>`,
    palm: `<path d="M250 330c12-84 26-166 10-242" ${s}/><path d="M230 114c-78-40-128-28-172 20 74-8 126 6 172 38z" ${s}/><path d="M264 104c-10-70 28-100 92-104-36 54-54 90-58 144z" ${s}/><path d="M274 126c76-50 136-44 182 2-72 8-122 28-166 62z" ${s}/><path d="M252 156c-42 44-60 92-54 146" ${m}/><path d="M228 188h60M220 226h66M214 264h68" ${m}/><path d="M160 338c84-16 168-15 252 2" ${shade}/>`,
    guitar: `<path d="M260 72v260" ${m}/><path d="M260 130c-52-58-128-20-116 48 6 28 28 42 46 56-46 40-28 112 44 120 30 2 54-12 70-36 16 24 40 38 70 36 72-8 90-80 44-120 18-14 40-28 46-56 12-68-64-106-116-48-18 22-70 22-88 0z" ${s}/><circle cx="260" cy="232" r="34" ${s}/><path d="M230 296h60" ${s}/><path d="M260 100V22h72" ${s}/><path d="M238 22h110" ${m}/><path d="M242 22v288M252 22v288M262 22v288M272 22v288M282 22v288" ${l}/><path d="M198 166c32 38 36 80 14 126M322 166c-32 38-36 80-14 126" ${shade}/>`
  };
  const body = map[type] || map.cup;
  return `<svg class="sketch-svg enhanced" ${common}>${defs}<rect x="0" y="0" width="520" height="380" fill="url(#paperGrain)"/><g opacity=".22" transform="translate(2 2)">${body}</g><g>${body}</g></svg>`;
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
          <div><strong>SketchWise</strong><span>Better sketch references · v${APP_VERSION}</span></div>
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

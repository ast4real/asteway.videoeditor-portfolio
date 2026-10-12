// One entry per video. Add more by copying a line.
const projects = [
  {title:"The Weeknd edit", desc:"A recent music-driven edit built around rhythm and cuts.", src:"the-weeknd-edit.mp4", poster:"the-weeknd-edit.jpg"},
  {title:"Life in Cinematic", desc:"Everyday moments graded and paced with a cinematic look.", src:"life-in-cinematic.mp4", poster:"life-in-cinematic.jpg"},
  {title:"Life lately (nostalgic version)", desc:"A warm, nostalgic take on recent life clips.", src:"life-lately-nostalgic.mp4", poster:"life-lately-nostalgic.jpg"}
];
const grid = document.getElementById("projects");
projects.forEach(p=>{
  const el = document.createElement("article");
  el.className = "card";
  el.innerHTML = `<video controls preload="metadata" playsinline poster="${p.poster}" src="${p.src}">Your browser can't play this video.</video>
    <div><h3>${p.title}</h3><p>${p.desc}</p></div>`;
  grid.appendChild(el);
});
// only one video plays at a time
grid.addEventListener("play", e=>{
  grid.querySelectorAll("video").forEach(v=>{ if(v!==e.target) v.pause(); });
}, true);
document.getElementById("yr").textContent = new Date().getFullYear();

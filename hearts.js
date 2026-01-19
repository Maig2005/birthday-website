const layer = document.querySelector(".hearts-layer");

const heartSVG = `
<svg viewBox="0 0 24 24" fill="none"
     stroke="rgba(235,90,130,0.95)"
     stroke-width="2.4"
     stroke-linecap="round"
     stroke-linejoin="round">
  <path d="M12 21s-6.7-4.35-9.5-8.1
           C-1 7.5 3.5 2 8.5 5.5
           11 7.5 12 9 12 9
           s1-1.5 3.5-3.5
           C20.5 2 25 7.5 21.5 12.9
           18.7 16.65 12 21 12 21z"/>
</svg>
`;

function createHeart() {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = heartSVG;

    h.style.left = Math.random() * 100 + "vw";
    h.style.setProperty("--drift", (Math.random() * 80 - 40) + "px");
    h.style.setProperty("--r1", (Math.random() * 40 - 20) + "deg");
    h.style.setProperty("--r2", (Math.random() * 120 - 60) + "deg");
    h.style.setProperty("--r3", (Math.random() * 90 - 45) + "deg");

    const d = Math.random() * 6 + 10;
    h.style.animationDuration = d + "s";

    layer.appendChild(h);
    setTimeout(() => h.remove(), d * 1000);
}

setInterval(createHeart, 700);

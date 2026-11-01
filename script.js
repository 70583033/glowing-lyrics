const lines = [
  "The night is quiet",
  "but my heart is loud",
  "dancing in the neon light",
  "under a sky full of sound"
];
let current = 0;

function showNextLine() {
  document.getElementById("lyric").textContent = lines[current];
  current = current + 1;
  if (current >= lines.length) {
    current = 0;
  }
}

setInterval(showNextLine, 2000);
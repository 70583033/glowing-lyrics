const lyrics = [
  { time: 0, text: "The night is quiet" },
  { time: 3, text: "but my heart is loud" },
  { time: 6, text: "dancing in the neon light" },
  { time: 9, text: "under a sky full of sound" }
];

const lyricEl = document.getElementById("lyric");
const startTime = Date.now();

function update() {
  const seconds = (Date.now() - startTime) / 1000;
  let currentText = "";
  for (const line of lyrics) {
    if (seconds >= line.time) {
      currentText = line.text;
    }
  }
  lyricEl.textContent = currentText;
}

setInterval(update, 100);
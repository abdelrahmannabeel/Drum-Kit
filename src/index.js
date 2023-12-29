function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}
function playSoundOnClick() {
  const audios = document.querySelectorAll("audio");
  audios.forEach((audio) => {
    audio.currentTime = 0;
    audio.play();
  });
  this.classList.add("playing");
}
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
  console.log(e);
}
function playSoundOnClick() {
  const key = this;
  const audio = document.querySelector(
    `audio[data-key="${key.getAttribute("data-key")}"]`
  );
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
keys.forEach((key) => key.addEventListener("click", playSoundOnClick));
window.addEventListener("keydown", playSound);

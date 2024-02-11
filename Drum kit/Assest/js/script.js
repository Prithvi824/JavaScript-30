const sound_a = document.querySelector(".sound-a");
const sound_s = document.querySelector(".sound-s");
const sound_d = document.querySelector(".sound-d");
const sound_f = document.querySelector(".sound-f");
const sound_g = document.querySelector(".sound-g");
const sound_h = document.querySelector(".sound-h");
const sound_j = document.querySelector(".sound-j");
const sound_k = document.querySelector(".sound-k");
const sound_l = document.querySelector(".sound-l");

const mapping = {
  a: sound_a,
  s: sound_s,
  d: sound_d,
  f: sound_f,
  g: sound_g,
  h: sound_h,
  j: sound_j,
  k: sound_k,
  l: sound_l,
};

let keys = Object.keys(mapping);

var handlekeypress = function (pressed) {
  let active = document.querySelector(`#${pressed.key.toLowerCase()}`);
  for (let key of keys) {
    if (key === pressed.key.toLowerCase()) {
      mapping[key].play();
      active.classList.add("active");
      break;
    }
  }
  setInterval(() => {
    active.classList.remove("active");
  }, 500);
};

document.addEventListener("keydown", handlekeypress);

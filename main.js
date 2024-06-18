// get elements
let scroller = document.querySelector(".scroller");
let stats = document.querySelector(".stats");
let statsNum = document.querySelectorAll(".stats .box .number");
let started = false;
let start = false;
let skills = document.querySelector(".skills");
let theProgress = document.querySelectorAll(".our-skills .prog span");

let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= stats.offsetTop - 200) {
    if (!started) {
      statsNum.forEach((num) => startCount(num));
    }
    started = true;
  }
});

function startCount(el) {
  let num = el.dataset.number;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent === num) {
      clearInterval(count);
    }
  }, 1000 / num);
}

window.addEventListener("scroll", () => {
  if (window.scrollY >= skills.offsetTop) {
    if (!start) {
      theProgress.forEach((span) => {
        span.style.width = span.dataset.progress;
        let num = 0;
        let full = setInterval(() => {
          num++;
          span.dataset.full = `${num}%`;
          if (span.dataset.full === span.dataset.progress) {
            clearInterval(full);
          }
        }, 10);
      });
    }
    start = true;
  }
});

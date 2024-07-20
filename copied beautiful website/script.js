let input = document.getElementById("toggle_checkbox");
let firstpage = document.getElementById("first");

let flag = 0;

input.addEventListener("click", () => {
  if (flag == 0) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    flag = 1;
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    flag = 0;
  }
});

function scrolltop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
function scrolldown() {
  window.scrollTo({
    top: "700",
    behavior: "smooth",
  });
}

// gsap code

gsap.from(".scroller .scroll", {
  scrollTrigger: ".scroller",
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".scroller .scroll",
    scroller: "body",
    start: "top 50%",
  },
});

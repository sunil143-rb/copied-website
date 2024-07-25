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

let password = document.getElementById("password");
let para = document.getElementById("para");

para.addEventListener("click", ()=>{
  
  if (password.type === "password") {
    para.innerHTML = "Hide";
    password.type = "text";
  } else {
    password.type = "password";
    para.innerHTML = "Show";
    
  }
})
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
document.getElementById("password").addEventListener("input", function () {
  const password = this.value;

  let strengthbar = document.getElementById("pass-strength");

  let strength = 0;

  if (password.length >= 8) strength += 2;
  if (/[A-Z]/.test(password)) strength += 2;
  if (/[a-z]/.test(password)) strength += 2;
  if (/[0-9]/.test(password)) strength++;
  if (/[\W]/.test(password)) strength++;

  if (strength >= 8) {
    strengthbar.classList.add("green");
  }
  if (strength <= 6 && strength >= 4) {
    strengthbar.classList.add("yellow");
  }
  if (strength <= 4) {
    strengthbar.classList.add("red");
  }

});
function feature() {
  window.scrollTo({
    top: "1500",
    behavior: "smooth",
  });
}
function contact() {
  window.scrollTo({
    top: "2300",
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

// Year
document.getElementById("year").innerHTML =
  "© " + new Date().getFullYear() + " The Kitchen Restaurant";

// Order button
function orderNow() {
  window.open("https://www.zomato.com", "_blank");
}

// Scroll animation
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});
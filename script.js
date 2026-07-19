let hour = new Date().getHours();
let greeting = hour < 12 ? "Good morning!" : hour < 18 ? "Good afternoon!" : "Good evening!";
let greetingElement = document.querySelector("#greeting");
if (greetingElement) greetingElement.textContent = greeting;

document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#contactForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      let email = document.querySelector("#email").value;
      if (!email.includes("@")) {
        alert("Please enter a valid email.");
        e.preventDefault();
      }
    });
  }
});
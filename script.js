const login = document.querySelector(".login");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
// const buttonPopup = document.querySelector(".buttonLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  login.classList.add("active");
});

loginLink.addEventListener("click", () => {
  login.classList.remove("active");
});

// buttonPopup.addEventListener("click", () => {
//   login.classList.add("active-popup");
// });

iconClose.addEventListener("click", () => {
  login.classList.remove("active-popup");
});

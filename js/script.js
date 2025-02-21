const body = document.querySelector("body");
const hamburgerButton = document.querySelector(".header__hamburger-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileButton = document.querySelector(".mobile-menu__button");
const mobileLinks = document.querySelectorAll(".mobile-menu__nav-link");
const topButton = document.querySelector(".top__button");
const subscribeForm = document.querySelector(".footer__subscribe-form");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modal__button");
const modalForm = document.querySelector(".modal__form");

function openMobileMenu() {
  mobileMenu.classList.remove("is-hidden");
  body.style.overflow = "hidden";
}

function closeMobileMenu() {
  mobileMenu.classList.add("is-hidden");
  body.style.overflow = "";
}

function openModal() {
  modal.classList.remove("is-hidden");
  body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.add("is-hidden");
  body.style.overflow = "";
}

hamburgerButton.addEventListener("click", () => {
  openMobileMenu();
});

mobileButton.addEventListener("click", () => {
  closeMobileMenu();
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    closeMobileMenu();
    history.pushState(null, null, window.location.href.split("#")[0]);
    window.location.hash = targetId;
  });
});

topButton.addEventListener("click", () => {
  openModal();
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

modalButton.addEventListener("click", () => {
  closeModal();
});

modalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thank you! We will contact you soon!");
  closeModal();
  modalForm.reset();
});

subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thank you for subscribing!");
  subscribeForm.reset();
});

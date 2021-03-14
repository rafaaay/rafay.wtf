// Block
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// Content
const title = document.querySelector(".card__title");
const image = document.querySelector(".card__img img");
const description = document.querySelector(".card__description");
const sizes = document.querySelector(".card__sizes");
const purchase = document.querySelector(".purchase");

// Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerWidth / 2 - e.pageY) / 25;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";

  // Popout
  title.style.transform = "translateZ(150px)";
  image.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});

// Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  // Popback
  title.style.transform = "translateZ(0)";
  image.style.transform = "translateZ(0)";
  description.style.transform = "translateZ(0)";
  sizes.style.transform = "translateZ(0)";
  purchase.style.transform = "translateZ(0)";
});

// Add custom JavaScript here
const userScroll = () => {
  const navbarEl = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbarEl.classList.add("bg-dark");
      navbarEl.classList.add("sticky-nav");
    } else {
      navbarEl.classList.remove("bg-dark");
      navbarEl.classList.remove("sticky-nav");
    }
  });
};

onload = userScroll;

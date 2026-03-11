document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const pagePath = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === pagePath) {
      link.classList.add("active");
    }
  });

  const toggleNavbarState = () => {
    if (!navbar) return;
    navbar.classList.toggle("sticky", window.scrollY > 24);
  };

  toggleNavbarState();
  window.addEventListener("scroll", toggleNavbarState);

  if (window.AOS) {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      disable: window.innerWidth < 768
    });
  }
});

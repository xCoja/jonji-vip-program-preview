// Basic interactivity: mobile nav toggle + smooth scroll

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  const scrollButtons = document.querySelectorAll("[data-scroll-target]");

  // Mobile nav
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      navToggle.classList.toggle("open");
    });

    navLinks.addEventListener("click", (e) => {
      if (e.target.tagName.toLowerCase() === "a") {
        navLinks.classList.remove("open");
        navToggle.classList.remove("open");
      }
    });
  }

  // Smooth scroll for "Explore Benefits" button (and any other with data-scroll-target)
  scrollButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetSelector = btn.getAttribute("data-scroll-target");
      const target = document.querySelector(targetSelector);
      if (!target) return;

      const navHeight = document.querySelector(".nav")?.offsetHeight || 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      const offset = targetTop - navHeight - 16;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // SVI interni linkovi koji počinju sa #
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");

      // ignorisi "prazan" #
      if (!targetId || targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();

      // visina navbara da ne preseče sekciju
      const nav = document.querySelector(".nav");
      const navHeight = nav ? nav.offsetHeight : 0;

      const elementTop = targetEl.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementTop - navHeight - 16; // malo lufta

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const discordURL = "https://discord.com/invite/vQtC77g7vr";

  // list ONLY the button IDs you want to redirect
  const redirectButtons = [
    "btn-become-vip",
    "btn-learn-more",
    "btn-transfer",
    "btn-primary",
    "btn-ghost",
    "discord-1",
    "discord-2",
    "discord-3",
    "discord-4",

    // add more IDs here
  ];

  redirectButtons.forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;

    btn.addEventListener("click", () => {
      window.open(discordURL, "_blank");
    });
  });


// redirect to chips.gg
const specialLinks = {
  "vip-transfer-btn": "https://chips.gg/"
};

Object.keys(specialLinks).forEach(id => {
  const btn = document.getElementById(id);
  if (!btn) return;

  btn.addEventListener("click", () =>{
    window.open(specialLinks[id], "_blank");
  });
});
});
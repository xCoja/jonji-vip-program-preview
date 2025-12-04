document.addEventListener("DOMContentLoaded", () => {
  // =====================
  // NAV / HAMBURGER
  // =====================
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("nav-open");
      navToggle.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      navToggle.textContent = isOpen ? "✕" : "☰";
    });

    nav.addEventListener("click", (e) => {
      if (e.target.tagName.toLowerCase() === "a") {
        nav.classList.remove("nav-open");
        navToggle.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.textContent = "☰";
      }
    });
  }

  // =====================
  // Smooth scroll for data-scroll-target buttons
  // =====================
  const scrollButtons = document.querySelectorAll("[data-scroll-target]");

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

  // =====================
  // Smooth scroll for internal anchor links href="#..."
  // =====================
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");

      // ignore plain "#"
      if (!targetId || targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();

      const navEl = document.querySelector(".nav");
      const navHeight = navEl ? navEl.offsetHeight : 0;

      const elementTop = targetEl.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementTop - navHeight - 16;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });

  // =====================
  // Discord redirect buttons
  // =====================
  const discordURL = "https://discord.com/invite/vQtC77g7vr";

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

  redirectButtons.forEach((id) => {
    const btn = document.getElementById(id);
    if (!btn) return;

    btn.addEventListener("click", () => {
      window.open(discordURL, "_blank");
    });
  });

  // =====================
  // Redirect to chips.gg
  // =====================
  const specialLinks = {
    "vip-transfer-btn": "https://chips.gg/",
  };

  Object.keys(specialLinks).forEach((id) => {
    const btn = document.getElementById(id);
    if (!btn) return;

    btn.addEventListener("click", () => {
      window.open(specialLinks[id], "_blank");
    });
  });
});

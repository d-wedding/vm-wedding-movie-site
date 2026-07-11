window.SITE_CONFIG = {
  links: {
    videographer: "https://sites.google.com/datapool.co.jp/videographer-selection/top",
    sampleMovie: "https://sites.google.com/datapool.co.jp/sample-site-vm/sample-movie",
    instagram: "https://www.instagram.com/motto_wd",
    prepareSite: "https://sites.google.com/d-wedding.co.jp/m-ver?usp=sharing",
    mottoBgm: "https://sites.google.com/d-wedding.co.jp/bgm/collection",
    isum: "https://isum.or.jp/music/",
    opmQr: "https://liff.line.me/1656857747-nRrvvDdK/landing?follow=%40294qsdcy&lp=naraxS&liff_id=1656857747-nRrvvDdK"
  },
  images: {
    logo: "./assets/motto-logo.png",
    logoWhite: "./assets/motto-logo-white.png",
    hero: "./assets/hero.jpg",
    ending: "./assets/ending.jpg",
    document: "./assets/document.jpg",
    opening: "./assets/opening.jpg",
    history: "./assets/location.jpg",
    prewedding: "./assets/prewedding.jpg",
    location: "./assets/history.jpg",
    opm: "./assets/opm.jpg"
  },
  fonts: {
    japanese: '"Yu Mincho", "YuMincho", "Hiragino Mincho ProN", "Noto Serif JP", serif',
    english: '"Helvetica Neue", Arial, sans-serif'
  }
};

(function () {
  const config = window.SITE_CONFIG || {};

  if (config.fonts) {
    const root = document.documentElement;
    if (config.fonts.japanese) root.style.setProperty("--font-ja", config.fonts.japanese);
    if (config.fonts.english) root.style.setProperty("--font-en", config.fonts.english);
  }

  Object.entries(config.images || {}).forEach(([key, src]) => {
    document.querySelectorAll(`[data-config-image="${key}"]`).forEach((img) => {
      img.setAttribute("src", src);
    });
  });

  Object.entries(config.links || {}).forEach(([key, href]) => {
    document.querySelectorAll(`[data-config-link="${key}"]`).forEach((link) => {
      link.setAttribute("href", href);
      if (/^https?:\/\//.test(href)) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
    });
  });

  const splitText = (element) => {
    if (element.dataset.splitText === "true") return;
    if (element.querySelector(".keep-line")) {
      element.dataset.splitText = "true";
      return;
    }
    const text = element.textContent;
    element.textContent = "";
    element.classList.add("split-text");
    element.dataset.splitText = "true";

    [...text].forEach((char, index) => {
      const span = document.createElement("span");
      span.className = "char";
      span.style.setProperty("--char-index", index);
      span.textContent = char === " " ? "\u00a0" : char;
      element.appendChild(span);
    });
  };

  document
    .querySelectorAll(".hero-simple h1 span, .instagram-copy h2, .concept h2 span, .section-label h2, .option-title h3, .primary-cta h2, .section-cta h3, .footer-logo")
    .forEach(splitText);

  const revealTargets = document.querySelectorAll(
    ".hero-simple, .instagram-cta, .link-card, .primary-cta, .section-cta, .concept-inner, .section-label, .option-title, .main-product, .option-card, .detail-panel, .scene-panel, .sub-card, .memory-section, .memory-notice, .plan-card, .info-grid article, .prepare-card, .timeline li, .footer"
  );

  revealTargets.forEach((target) => target.classList.add("reveal"));

  if (!("IntersectionObserver" in window)) {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  revealTargets.forEach((target) => observer.observe(target));
})();

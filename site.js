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
})();

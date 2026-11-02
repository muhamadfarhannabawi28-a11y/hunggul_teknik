
document.addEventListener("DOMContentLoaded", () => {
  // ==================================
  // MENU NAVIGASI MOBILE
  // ==================================

  const menuToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("active");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Tutup menu" : "Buka menu"
      );
    });

    // Tutup menu setelah salah satu tautan dipilih
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Buka menu");
      });
    });

    // Tutup menu dengan tombol Escape
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Buka menu");
      }
    });

    // Reset menu saat kembali ke tampilan desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) {
        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Buka menu");
      }
    });
  }

  // ==================================
  // TAHUN COPYRIGHT OTOMATIS
  // ==================================

  document.querySelectorAll(".current-year").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  // ==================================
  // VIDEO: JEDA VIDEO LAIN
  // SAAT VIDEO BARU DIPUTAR
  // ==================================

  const videos = document.querySelectorAll("video");

  videos.forEach((video) => {
    video.addEventListener("play", () => {
      videos.forEach((otherVideo) => {
        if (otherVideo !== video) {
          otherVideo.pause();
        }
      });
    });
  });
});

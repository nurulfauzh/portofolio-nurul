const menuToggle = document.querySelector(".menu-toggle");
const navLinksContainer = document.querySelector(".nav-links");
const allNavLinks = document.querySelectorAll("nav ul.nav-links li a");

// 1. Tampilkan / Sembunyikan menu saat tombol di-klik
menuToggle.addEventListener("click", () => {
  navLinksContainer.classList.toggle("active");
});

// 2. Sembunyikan menu saat salah satu link di-klik (penting untuk mobile)
allNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navLinksContainer.classList.remove("active");
    }
  });
});

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("nav ul li a");

function changeNavOnScroll() {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    // Ganti '150' jika Anda ingin 'highlight'-nya lebih cepat atau lambat
    const sectionTop = current.offsetTop - 150;
    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // Temukan link yang punya href="#sectionId"
      const activeLink = document.querySelector(
        `nav ul li a[href*="${sectionId}"]`
      );

      // Hapus .active dari semua link
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      // Tambahkan .active ke link yang tepat
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}

// Panggil fungsi saat scroll
window.addEventListener("scroll", changeNavOnScroll);

// Panggil sekali saat halaman di-load untuk meng-highlight link "Beranda"
document.addEventListener("DOMContentLoaded", changeNavOnScroll);

const accordions = document.querySelectorAll(".accordion-toggle");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    // 1. Ubah ikon +/-
    this.classList.toggle("active");
    const icon = this.querySelector(".icon");
    if (this.classList.contains("active")) {
      icon.textContent = "−";
    } else {
      icon.textContent = "+";
    }

    // 2. Buka/tutup panelnya
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      // Jika sudah terbuka (ada maxHeight), tutup
      panel.style.maxHeight = null;
    } else {
      // Jika tertutup, buka seukuran kontennya
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

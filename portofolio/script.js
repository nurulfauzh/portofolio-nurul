// Menunggu sampai seluruh konten halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua section yang punya ID dan semua link navigasi
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a");

  // Fungsi untuk mengubah status 'active' pada link navigasi
  const changeActiveLink = (id) => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + id) {
        link.classList.add("active");
      }
    });
  };

  // Opsi untuk Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6, // 60% section harus terlihat sebelum link aktif
  };

  // Buat Observer untuk memantau section mana yang sedang terlihat di layar
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        changeActiveLink(entry.target.id);
      }
    });
  }, observerOptions);

  // Minta Observer untuk memantau setiap section
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Menambahkan efek bubble saat link di-klik juga
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Hapus 'active' dari semua link
      navLinks.forEach((l) => l.classList.remove("active"));
      // Tambahkan 'active' ke link yang baru saja di-klik
      this.classList.add("active");
    });
  });
});

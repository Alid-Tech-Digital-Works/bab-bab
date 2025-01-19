// Mendefinisikan status untuk setiap bab, dimulai dengan Bab 1 yang dapat diakses
let babStatus = {
  1: true, // Bab 1 sudah selesai
  2: false, // Bab 2 terkunci
  3: false, // Bab 3 terkunci
  4: false, // Bab 4 terkunci
  5: false, // Bab 5 terkunci
  6: false, // Bab 6 terkunci
  7: false  // Bab 7 terkunci
};

// Fungsi untuk menampilkan pesan ketika bab terkunci
function pesanTerkunci(bab) {
  if (!babStatus[bab]) {
    alert(`Selesaikan Bab ${bab - 1} terlebih dahulu!`);
  } else {
    // Jika bab sudah selesai, buka halaman bab yang bersangkutan
    window.location.href = `index${index}.html`;
  }
}

// Fungsi untuk menandakan bahwa bab telah selesai
function selesaiBab(bab) {
  babStatus[bab] = true; // Menandakan bab ini telah selesai
  alert(`Selamat! Kamu telah menyelesaikan Bab ${bab}`);
  cekBab(); // Periksa dan buka bab berikutnya
}

// Fungsi untuk memeriksa status bab dan membuka bab berikutnya
function cekBab() {
  // Membuka bab 2 jika bab 1 selesai
  if (babStatus[1]) {
    document.getElementById("bab2").classList.remove("locked");
  }
  // Membuka bab 3 jika bab 2 selesai
  if (babStatus[2]) {
    document.getElementById("bab3").classList.remove("locked");
  }
  // Membuka bab 4 jika bab 3 selesai
  if (babStatus[3]) {
    document.getElementById("bab4").classList.remove("locked");
  }
  // Membuka bab 5 jika bab 4 selesai
  if (babStatus[4]) {
    document.getElementById("bab5").classList.remove("locked");
  }
  // Membuka bab 6 jika bab 5 selesai
  if (babStatus[5]) {
    document.getElementById("bab6").classList.remove("locked");
  }
  // Membuka bab 7 jika bab 6 selesai
  if (babStatus[6]) {
    document.getElementById("bab7").classList.remove("locked");
  }
}

// Jalankan fungsi cekBab pada saat halaman pertama kali dimuat
document.addEventListener("DOMContentLoaded", cekBab);

// Untuk menandakan bahwa bab sudah selesai, panggil fungsi selesaiBab(bab) pada halaman bab yang sesuai
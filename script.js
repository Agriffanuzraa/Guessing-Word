// Array berisi daftar kata rahasia
const kataRahasia = ["apel", "jeruk", "pisang", "mangga", "melon"];

// Pilih kata rahasia secara acak dari array
const kataTersembunyi =
  kataRahasia[Math.floor(Math.random() * kataRahasia.length)];
alert(kataTersembunyi);

// Variabel untuk menyimpan jumlah percobaan yang telah dilakukan
let percobaan = 0;

// Maksimal percobaan
const maksimalPercobaan = 3;

// Fungsi untuk menebak kata
function tebakKata() {
  // Ambil nilai tebakan dari input
  let tebakan = document.getElementById("guess").value.toLowerCase(); // Ambil input dan ubah ke huruf kecil

  // Periksa apakah tebakan sama dengan kata rahasia
  if (tebakan === kataTersembunyi) {
    document.getElementById(
      "result"
    ).innerHTML = `Selamat! Kamu berhasil menebak kata "${kataTersembunyi}".`;
  } else {
    percobaan++;
    if (percobaan < maksimalPercobaan) {
      document.getElementById("result").innerHTML = `Salah! Kamu punya ${
        maksimalPercobaan - percobaan
      } kesempatan lagi.`;
    } else {
      document.getElementById(
        "result"
      ).innerHTML = `Kamu kalah! Kata rahasia adalah "${kataTersembunyi}".`;
      // Disable button setelah kalah
      document.getElementById("submit").disabled = true;
    }
  }
}

// Event listener untuk tombol "Tebak"
document.getElementById("submit").addEventListener("click", tebakKata);

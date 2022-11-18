const pilihan = ["Batu", "Gunting", "Kertas"];
let seri = 1;
let menang = 1;
let kalah = 1;
let gambar = document.getElementById("image");
let img = document.querySelector("img");

function play(val) {
  const musuh = pilihan[Math.floor(Math.random() * pilihan.length)];
  if (val == "Batu") {
    if (musuh == "Batu") {
      img.setAttribute('src', "batu.png")
      document.getElementById(
        "text"
      ).innerHTML = `Kamu memilih ${val}, komputer memilih ${musuh}, pertandingan seri.`;
      document.getElementById("seri").innerHTML = `Seri: ${seri++}`;
    } else if (musuh == "Gunting") {
      img.setAttribute('src', "gunting.jpg")
      document.getElementById(
        "text"
      ).innerHTML = `Kamu memilih ${val}, komputer memilih ${musuh}, kamu menang.`;
      document.getElementById("menang").innerHTML = `Skor pemain: ${menang++}`;
    } else if (musuh == "Kertas") {
      img.setAttribute('src', "kertas.png")
      document.getElementById(
        "text"
      ).innerHTML = `Kamu memilih ${val}, komputer memilih ${musuh}, kamu kalah.`;
      document.getElementById("kalah").innerHTML = `Skor komputer: ${kalah++}`;
    }
  } else if (val == "Gunting") {
    if (musuh == "Batu") {
      img.setAttribute('src', "batu.png")
      document.getElementById(
        "text"
      ).innerHTML = `Kamu memilih ${val}, komputer memilih ${musuh}, kamu kalah.`;
      document.getElementById("kalah").innerHTML = `Skor komputer: ${kalah++}`;
    } else if (musuh == "Gunting") {
      img.setAttribute('src', "gunting.jpg")
      document.getElementById(
        "text"
      ).innerHTML = `Kamu memilih ${val}, komputer memilih ${musuh}, pertandingan seri.`;
      document.getElementById("seri").innerHTML = `Seri: ${seri++}`;
    } else if (musuh == "Kertas") {
      img.setAttribute('src', "kertas.png")
      document.getElementById(
        "text"
      ).innerHTML = `Kamu memilih ${val}, komputer memilih ${musuh}, kamu menang.`;
      document.getElementById("menang").innerHTML = `Skor pemain: ${menang++}`;
    }
  } else if (val == "Kertas") {
    if (musuh == "Batu") {
      img.setAttribute('src', "batu.png")
      document.getElementById(
        "text"
      ).innerHTML = `Kamu memilih ${val}, komputer memilih ${musuh}, kamu menang.`;
      document.getElementById("menang").innerHTML = `Skor pemain: ${menang++}`;
    } else if (musuh == "Gunting") {
      img.setAttribute('src', "gunting.jpg")
      document.getElementById(
        "text"
      ).innerHTML = `Kamu memilih ${val}, komputer memilih ${musuh}, kamu kalah.`;
      document.getElementById("kalah").innerHTML = `Skor komputer: ${kalah++}`;
    } else if (musuh == "Kertas") {
      img.setAttribute('src', "kertas.png")
      document.getElementById(
        "text"
      ).innerHTML = `Kamu memilih ${val}, komputer memilih ${musuh}, pertandingan seri.`;
      document.getElementById("seri").innerHTML = `Seri: ${seri++}`;
    }
  }
}

function reset() {
  img.setAttribute('src', "putih.png")
  document.getElementById("text").innerHTML = "";
  document.getElementById("seri").innerHTML = "Seri: 0";
  document.getElementById("menang").innerHTML = "Skor pemain: 0";
  document.getElementById("kalah").innerHTML = "Skor komputer: 0";
  seri = 1;
  menang = 1;
  kalah = 1;
}

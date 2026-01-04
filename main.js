const nomorWA = "628xxxxxxxxxx"; // GANTI NOMOR WA

function beliProduk(namaProduk) {
    let url = "https://wa.me/" + nomorWA +
              "?text=Halo,%20saya%20ingin%20membeli:%20" + namaProduk;
    window.open(url, "_blank");
}

document.getElementById("formServis").addEventListener("submit", function(e){
    e.preventDefault();
    let nama = document.getElementById("nama").value;
    let jenis = document.getElementById("jenis").value;

    let url = "https://wa.me/" + nomorWA +
              "?text=Halo,%20saya%20" + nama +
              "%20ingin%20servis:%20" + jenis;
    window.open(url, "_blank");
});

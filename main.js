document.getElementById("formKontak").addEventListener("submit", function(e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let pesan = document.getElementById("pesan").value;

    let nomorWA = "628xxxxxxxxxx"; // GANTI nomor WhatsApp
    let url = "https://wa.me/" + nomorWA +
              "?text=Halo,%20saya%20" + nama +
              "%20ingin%20servis:%20" + pesan;

    window.open(url, "_blank");
});

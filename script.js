// Data wisata Semarang
const wisataData = [
  {
    id: 1,
    nama: "Lawang Sewu",
    lokasi: "Jl. Pemuda No.160, Sekayu, Semarang Tengah",
    deskripsi:
      "Bangunan bersejarah peninggalan Belanda yang kini menjadi ikon Kota Semarang.",
    gambar: "images/lawangsewu.jpg",
    peta: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.738918186609!2d110.410543!3d-6.982986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b50baf3439f%3A0x6cd03cbf1ad6dbea!2sLawang%20Sewu!5e0!3m2!1sid!2sid!4v12345"
  },
  {
    id: 2,
    nama: "Kota Lama Semarang",
    lokasi: "Jl. Letjen Suprapto, Tanjung Mas, Semarang Utara",
    deskripsi:
      "Kawasan wisata bersejarah dengan bangunan klasik bergaya Eropa yang masih terjaga.",
    gambar: "images/kotalama.jpg",
    peta: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.809708951011!2d110.426693!3d-6.978124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b3bfb31b857%3A0xe20df93fbe523b7f!2sKota%20Lama%20Semarang!5e0!3m2!1sid!2sid!4v12345"
  },
  {
    id: 3,
    nama: "Klenteng Sam Poo Kong",
    lokasi: "Jl. Simongan No.129, Bongsari, Semarang Barat",
    deskripsi:
      "Klenteng bersejarah yang menjadi simbol toleransi dan wisata budaya di Semarang.",
    gambar: "images/sampookong.jpg",
    peta: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.753082274225!2d110.392886!3d-6.981928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708af612e92d35%3A0xf0b7f71d90d64a73!2sKlenteng%20Sam%20Poo%20Kong!5e0!3m2!1sid!2sid!4v12345"
  },
  {
    id: 4,
    nama: "Masjid Agung Jawa Tengah",
    lokasi: "Jl. Gajah Raya, Gayamsari",
    deskripsi:
      "Masjid megah dengan menara tinggi dan pemandangan kota yang indah.",
    gambar: "images/majt.jpg",
    peta: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.870208299078!2d110.444858!3d-6.972258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708c19dcceeb4f%3A0xc095b237640239bb!2sMasjid%20Agung%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v12345"
  },
  {
    id: 5,
    nama: "Brown Canyon",
    lokasi: "Rowosari, Tembalang",
    deskripsi:
      "Tebing bekas tambang yang kini jadi spot foto alam eksotis di Semarang.",
    gambar: "images/browncanyon.jpg",
    peta: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.754522240178!2d110.482482!3d-7.024304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708aef9a7bbd63%3A0x153f3b4e379e42e8!2sBrown%20Canyon!5e0!3m2!1sid!2sid!4v12345"
  },
];

// Render daftar wisata
const cardContainer = document.getElementById("cardContainer");
if (cardContainer) {
  wisataData.forEach((w) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${w.gambar}" alt="${w.nama}">
      <h3>${w.nama}</h3>
      <p>${w.lokasi}</p>
      <a href="detail.html?id=${w.id}">Lihat Detail</a>
    `;
    cardContainer.appendChild(card);
  });
}

// Pencarian
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = wisataData.filter(
      (w) =>
        w.nama.toLowerCase().includes(keyword) ||
        w.lokasi.toLowerCase().includes(keyword)
    );
    cardContainer.innerHTML = "";
    filtered.forEach((w) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${w.gambar}" alt="${w.nama}">
        <h3>${w.nama}</h3>
        <p>${w.lokasi}</p>
        <a href="detail.html?id=${w.id}">Lihat Detail</a>
      `;
      cardContainer.appendChild(card);
    });
  });
}

// Rekomendasi acak
function showRandom() {
  const random = wisataData[Math.floor(Math.random() * wisataData.length)];
  alert(`🎲 Rekomendasi: ${random.nama}\n📍 Lokasi: ${random.lokasi}`);
}

// Detail wisata
const detailContainer = document.getElementById("detailContainer");
if (detailContainer) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const wisata = wisataData.find((w) => w.id === id);
  if (wisata) {
    detailContainer.innerHTML = `
      <h2>${wisata.nama}</h2>
      <img src="${wisata.gambar}" alt="${wisata.nama}">
      <p><strong>Lokasi:</strong> ${wisata.lokasi}</p>
      <p>${wisata.deskripsi}</p>
      <iframe src="${wisata.peta}" width="100%" height="350" style="border:0;" allowfullscreen></iframe>
    `;
  }
}

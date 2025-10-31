const places = [
  {
    name: "Lawang Sewu",
    image: "images/lawangsewu.jpg",
    desc: "Bangunan bersejarah dengan arsitektur kolonial Belanda yang megah.",
  },
  {
    name: "Kota Lama",
    image: "images/kotalama.jpg",
    desc: "Kawasan dengan bangunan kuno yang menjadi saksi sejarah kolonial di Semarang.",
  },
  {
    name: "Sam Poo Kong",
    image: "images/sampookong.jpg",
    desc: "Klenteng megah dengan nilai sejarah dan budaya Tionghoa yang kuat.",
  },
  {
    name: "Masjid Agung Jawa Tengah (MAJT)",
    image: "images/majt.jpg",
    desc: "Masjid terbesar di Semarang dengan menara tinggi dan pemandangan indah.",
  },
  {
    name: "Brown Canyon",
    image: "images/browncanyon.jpg",
    desc: "Destinasi unik dengan tebing batu tinggi hasil bekas galian yang mirip Grand Canyon.",
  },
];

function displayPlaces(list = places) {
  const container = document.getElementById("places");
  if (!container) return;

  container.innerHTML = list.map(place => `
    <div class="place-card">
      <img src="${place.image}" alt="${place.name}">
      <h3>${place.name}</h3>
      <p>${place.desc}</p>
    </div>
  `).join("");
}

function searchPlace() {
  const query = document.getElementById("searchBox").value.toLowerCase();
  const filtered = places.filter(p => p.name.toLowerCase().includes(query));
  displayPlaces(filtered);
}

function randomPlace() {
  const random = places[Math.floor(Math.random() * places.length)];
  displayPlaces([random]);
}

document.addEventListener("DOMContentLoaded", () => {
  displayPlaces();
});

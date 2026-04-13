// Data tanaman dengan yield per hektar (ton/ha) dan rekomendasi pupuk
const tanamanData = {
    padi: { yield: 5, pupuk: "Gunakan pupuk urea 200kg/ha, SP-36 100kg/ha, KCl 100kg/ha." },
    jagung: { yield: 4, pupuk: "Gunakan pupuk urea 150kg/ha, SP-36 100kg/ha, KCl 100kg/ha." },
    kedelai: { yield: 2, pupuk: "Gunakan pupuk urea 50kg/ha, SP-36 50kg/ha, KCl 50kg/ha." },
    singkong: { yield: 20, pupuk: "Gunakan pupuk urea 100kg/ha, SP-36 50kg/ha, KCl 50kg/ha." },
    cabai: { yield: 1.5, pupuk: "Gunakan pupuk urea 100kg/ha, SP-36 50kg/ha, KCl 50kg/ha." }
};

// Fungsi untuk toggle mobile menu
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Event listener untuk form kalkulator panen
document.getElementById('panenForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const lahan = parseFloat(document.getElementById('lahan').value) / 10000; // Convert m² to ha
    const tanaman = document.getElementById('tanaman').value;
    if (tanaman && lahan > 0) {
        const yieldPerHa = tanamanData[tanaman].yield;
        const totalPanen = lahan * yieldPerHa;
        document.getElementById('hasilPanen').innerHTML = `<p class="text-green-600 font-semibold">Perkiraan panen: ${totalPanen.toFixed(2)} ton</p>`;
    } else {
        document.getElementById('hasilPanen').innerHTML = '<p class="text-red-600">Silakan isi semua field dengan benar.</p>';
    }
});

// Event listener untuk form rekomendasi pupuk
document.getElementById('pupukForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const tanah = document.getElementById('tanah').value;
    const tanaman = document.getElementById('tanamanPupuk').value;
    if (tanah && tanaman) {
        const pupuk = tanamanData[tanaman].pupuk;
        document.getElementById('hasilPupuk').innerHTML = `<p class="text-green-600">${pupuk}</p>`;
    } else {
        document.getElementById('hasilPupuk').innerHTML = '<p class="text-red-600">Silakan pilih kondisi tanah dan tanaman.</p>';
    }
});

// Event listener untuk form konsultasi
document.getElementById('konsultasiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const lokasi = document.getElementById('lokasi').value;
    const jenisTanah = document.getElementById('jenisTanah').value;
    if (lokasi && jenisTanah) {
        let rekomendasi = '';
        if (jenisTanah === 'berpasir') {
            rekomendasi = 'Rekomendasi: Tanam jagung atau cabai yang cocok untuk tanah berpasir.';
        } else if (jenisTanah === 'liat') {
            rekomendasi = 'Rekomendasi: Tanam padi yang cocok untuk tanah liat.';
        } else {
            rekomendasi = 'Rekomendasi: Tanam berbagai jenis tanaman, tanah humus sangat subur.';
        }
        document.getElementById('hasilKonsultasi').innerHTML = `<p class="text-green-600 font-semibold">${rekomendasi}</p>`;
    } else {
        document.getElementById('hasilKonsultasi').innerHTML = '<p class="text-red-600">Silakan isi lokasi dan jenis tanah.</p>';
    }
});
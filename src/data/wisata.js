let data = [
  {
    id: 1,
    nama: "Pantai Kuta",
    kategori: "Pantai",
    kota: "Badung",
    provinsi: "Bali",
    rating: 4.8,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deskripsi: "Pantai Kuta adalah sebuah tujuan wisata terkenal di Bali, Indonesia. Terkenal dengan pasir putihnya yang panjang dan ombaknya yang cocok untuk berselancar, pantai ini menarik wisatawan dari seluruh dunia."
  },
  {
    id: 2,
    nama: "Candi Borobudur",
    kategori: "Budaya",
    kota: "Magelang",
    provinsi: "Jawa Tengah",
    rating: 4.9,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deskripsi: "Candi Borobudur adalah candi Buddha terbesar di dunia dan salah satu monumen Buddha terbesar di dunia. Candi ini merupakan salah satu dari Situs Warisan Dunia UNESCO."
  },
  {
    id: 3,
    nama: "Danau Toba",
    kategori: "Danau",
    kota: "Toba",
    provinsi: "Sumatera Utara",
    rating: 4.7,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deskripsi: "Danau Toba adalah danau vulkanik besar di Sumatera Utara, Indonesia. Ini adalah danau terbesar di Indonesia dan danau vulkanik terbesar di dunia."
  },
  {
    id: 4,
    nama: "Raja Ampat",
    kategori: "Laut",
    kota: "Waisai",
    provinsi: "Papua Barat",
    rating: 5.0,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deskripsi: "Kepulauan Raja Ampat adalah sebuah kepulauan yang terdiri dari lebih dari 1.500 pulau kecil, di lepas pantai barat laut Semenanjung Kepala Burung di Papua Barat."
  },
  {
    id: 5,
    nama: "Gunung Bromo",
    kategori: "Gunung",
    kota: "Probolinggo",
    provinsi: "Jawa Timur",
    rating: 4.9,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deskripsi: "Gunung Bromo adalah gunung berapi aktif di Jawa Timur, Indonesia. Gunung ini termasuk dalam Taman Nasional Bromo Tengger Semeru."
  },
  {
    id: 6,
    nama: "Kawah Ijen",
    kategori: "Gunung",
    kota: "Banyuwangi",
    provinsi: "Jawa Timur",
    rating: 4.8,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deskripsi: "Kawah Ijen adalah sebuah danau kawah asam yang terletak di puncak Gunung Ijen di Jawa Timur, Indonesia. Kawah ini terkenal dengan api birunya yang unik."
  },
  {
    id: 7,
    nama: "Pantai Parangtritis",
    kategori: "Pantai",
    kota: "Bantul",
    provinsi: "DI Yogyakarta",
    rating: 4.5,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deskripsi: "Pantai Parangtritis adalah salah satu pantai paling terkenal di Yogyakarta. Pantai ini terkenal dengan pasirnya yang hitam dan ombaknya yang besar."
  },
  {
    id: 8,
    nama: "Taman Mini Indonesia Indah",
    kategori: "Taman",
    kota: "Jakarta Timur",
    provinsi: "DKI Jakarta",
    rating: 4.6,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deskripsi: "Taman Mini Indonesia Indah adalah sebuah taman rekreasi yang merangkum budaya Indonesia dalam skala kecil. Taman ini memiliki anjungan-anjungan yang mewakili setiap provinsi di Indonesia."
  },
  {
    id: 9,
    nama: "Monas",
    kategori: "Monumen",
    kota: "Jakarta Pusat",
    provinsi: "DKI Jakarta",
    rating: 4.7,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deskripsi: "Monumen Nasional, atau Monas, adalah monumen peringatan setinggi 132 meter di pusat Jakarta, Indonesia. Monumen ini melambangkan perjuangan kemerdekaan Indonesia."
  },
  {
    id: 10,
    nama: "Pantai Pink",
    kategori: "Pantai",
    kota: "Lombok",
    provinsi: "NTB",
    rating: 4.8,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deskripsi: "Pantai Pink, atau Pantai Tangsi, adalah salah satu pantai paling unik di Lombok. Pasirnya yang berwarna merah muda berasal dari serpihan karang merah yang hancur."
  },
  {
    id: 11,
    nama: "Pulau Komodo",
    kategori: "Pulau",
    kota: "Labuan Bajo",
    provinsi: "NTT",
    rating: 4.9,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deskripsi: "Pulau Komodo adalah salah satu dari tiga pulau utama di Taman Nasional Komodo. Pulau ini terkenal sebagai habitat asli komodo, spesies kadal terbesar di dunia."
  },
  {
    id: 12,
    nama: "Labuan Bajo",
    kategori: "Laut",
    kota: "Manggarai Barat",
    provinsi: "NTT",
    rating: 4.9,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deskripsi: "Labuan Bajo adalah sebuah kota nelayan yang sibuk di ujung barat Flores di provinsi Nusa Tenggara Timur. Ini adalah titik awal untuk perjalanan ke Taman Nasional Komodo."
  },
  {
    id: 13,
    nama: "Malioboro",
    kategori: "Wisata Kota",
    kota: "Yogyakarta",
    provinsi: "DI Yogyakarta",
    rating: 4.7,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deskripsi: "Jalan Malioboro adalah jalan perbelanjaan utama di Yogyakarta, Indonesia. Jalan ini dipenuhi dengan toko-toko, restoran, dan pedagang kaki lima yang menjual berbagai macam barang."
  },
  {
    id: 14,
    nama: "Keraton Yogyakarta",
    kategori: "Budaya",
    kota: "Yogyakarta",
    provinsi: "DI Yogyakarta",
    rating: 4.6,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deskripsi: "Keraton Yogyakarta adalah istana resmi Kesultanan Yogyakarta. Kompleks istana ini merupakan contoh arsitektur istana Jawa yang terbaik."
  },
  {
    id: 15,
    nama: "Tangkuban Perahu",
    kategori: "Gunung",
    kota: "Bandung",
    provinsi: "Jawa Barat",
    rating: 4.6,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deskripsi: "Tangkuban Perahu adalah gunung berapi aktif di Jawa Barat, Indonesia. Gunung ini merupakan salah satu tujuan wisata paling populer di daerah Bandung."
  },
  {
    id: 16,
    nama: "Kebun Raya Bogor",
    kategori: "Taman",
    kota: "Bogor",
    provinsi: "Jawa Barat",
    rating: 4.7,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deskripsi: "Kebun Raya Bogor adalah sebuah kebun raya besar yang terletak di kota Bogor, Indonesia. Kebun ini memiliki lebih dari 15.000 jenis koleksi pohon dan tumbuhan."
  },
  {
    id: 17,
    nama: "Pantai Pangandaran",
    kategori: "Pantai",
    kota: "Pangandaran",
    provinsi: "Jawa Barat",
    rating: 4.5,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deskripsi: "Pantai Pangandaran adalah sebuah pantai yang terletak di Kabupaten Pangandaran, Jawa Barat. Pantai ini terkenal dengan pasir putihnya yang lembut dan air lautnya yang jernih."
  },
  {
    id: 18,
    nama: "Bunaken",
    kategori: "Laut",
    kota: "Manado",
    provinsi: "Sulawesi Utara",
    rating: 4.9,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deskripsi: "Taman Nasional Bunaken adalah taman laut di lepas pantai Manado, Sulawesi Utara, Indonesia. Taman ini terkenal dengan keanekaragaman hayati lautnya yang luar biasa."
  },
  {
    id: 19,
    nama: "Wakatobi",
    kategori: "Laut",
    kota: "Wangi-Wangi",
    provinsi: "Sulawesi Tenggara",
    rating: 4.9,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deskripsi: "Taman Nasional Wakatobi adalah taman nasional laut yang terletak di Kabupaten Wakatobi, Sulawesi Tenggara, Indonesia. Taman ini merupakan salah satu dari Situs Warisan Dunia UNESCO."
  },
  {
    id: 20,
    nama: "Pantai Losari",
    kategori: "Pantai",
    kota: "Makassar",
    provinsi: "Sulawesi Selatan",
    rating: 4.5,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    deskripsi: "Pantai Losari adalah sebuah pantai yang terletak di pusat kota Makassar, Sulawesi Selatan. Pantai ini merupakan salah satu ikon kota Makassar dan tempat yang populer untuk bersantai."
  },
];

module.exports = data;

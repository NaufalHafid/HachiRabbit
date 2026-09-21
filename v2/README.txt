HACHI RABBIT — MASONRY RABBIT GALLERY

Versi ini menambahkan:
- Foto kelinci nyata sebagai placeholder/referensi
- Masonry gallery dengan CSS columns
- Hover zoom pada foto
- Nama kelinci
- Umur
- Gender
- Warna / breed
- Status Available / Sold
- Filter berdasarkan breed dan status
- Detail modal/lightbox ketika card diklik
- AOS animation
- Responsive desktop/tablet/mobile

PENTING:
Foto yang sekarang adalah FOTO REFERENSI dari Wikimedia Commons, bukan foto kelinci Hachi Rabbit.
Data nama/umur/gender/warna/status juga masih DATA DEMO.
Sebelum website dipublikasikan, ganti dengan foto dan data kelinci Hachi Rabbit sendiri.

CARA GANTI DATA:
Buka script.js dan cari:
const rabbits = [ ... ]

Contoh:
{
  id:'hachi-07',
  name:'Nama Kelinci',
  age:'7 bulan',
  gender:'♂',
  genderText:'Jantan',
  breed:'Fuzzy Lop',
  key:'fuzzy',
  color:'White / Grey',
  status:'available',
  ratio:'4/5',
  image:'assets/rabbits/nama-kelinci.jpg',
  description:'Deskripsi singkat kelinci.',
  source:'Foto milik Hachi Rabbit'
}

Untuk foto lokal, buat folder:
assets/rabbits/

Lalu masukkan JPG/PNG milik Hachi Rabbit dan ubah image menjadi:
assets/rabbits/nama-kelinci.jpg

SUMBER FOTO DEMO:
1. American Fuzzy Lop — Lithonius — Public Domain
2. Rex — DestinationFearFan — CC BY-SA 4.0
3. Holland Lop — Orlandkurtenbach — Public Domain
4. Netherland Dwarf — DestinationFearFan — CC BY-SA 4.0

Link sumber ada di bagian source pada detail card.

FONT + AOS menggunakan CDN, jadi koneksi internet diperlukan saat pertama membuka website.

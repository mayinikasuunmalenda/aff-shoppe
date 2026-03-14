export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  imageAlt: string;
  dateGmt: string;
  modifiedGmt: string;
  redirectUrl?: string; // URL tujuan saat user klik dari Facebook (opsional)
}

export const posts: Post[] = [
  {
    slug: 'fajar-sadboy-dari-tangisan-viral-ke-bintang-film-galaksi',
    title: 'Fajar Sadboy: Dari Tangisan Viral ke Bintang Film Galaksi',
    excerpt: 'Fajar Sadboy (Fajar Labatjo) sukses bertransformasi dari remaja Gorontalo yang viral karena tangisan patah hati menjadi selebritas internet, penyanyi, dan aktor yang sukses di Jakarta.',
    image: '/images/fajar-sadboy.jpg',
    imageAlt: 'Fajar Sadboy - Dari Viral ke Bintang Film',
    dateGmt: '2026-03-13T00:00:00',
    modifiedGmt: '2026-03-13T00:00:00',
    redirectUrl: '', // isi URL tujuan kalau mau redirect, kosongkan kalau tidak
    content: `
      <p>Fajar Sadboy (Fajar Labatjo) sukses bertransformasi dari remaja Gorontalo yang viral karena tangisan patah hati menjadi selebritas internet, penyanyi, dan aktor yang sukses di Jakarta. Dikenal karena kesedihannya, Fajar kini membintangi film Galaksi dan berfokus membahagiakan orang tua serta membangun rumah.</p>

      <h2>Perjalanan & Kesuksesan Fajar Sadboy</h2>

      <p><strong>Awal Viral:</strong> Fajar mulai dikenal luas di akhir 2022 setelah video dirinya menangis sesenggukan karena ditinggal kekasih viral di TikTok, membuatnya dijuluki "Sad Boy".</p>

      <p><strong>Puncak Karier:</strong> Menggunakan popularitasnya, Fajar merambah dunia hiburan, menjadi bintang tamu TV, aktor film layar lebar (Galaksi), dan penyanyi.</p>

      <p><strong>Kini Sukses:</strong> Fajar berhasil mencapai kesuksesan finansial yang memungkinkannya membeli rumah dan berencana membangun masjid di kampung halamannya.</p>

      <p><strong>Karakter:</strong> Meskipun terkenal karena citra sedih, ia dikenal pekerja keras dan tetap mengutamakan keluarga (setor muka ke ibu setelah syuting).</p>

      <h2>Perjalanan Hidup</h2>

      <p>Sebelum terkenal, Fajar mengaku pernah mengalami kejadian mistis dan masa sulit. Fajar bersikeras tidak akan meninggalkan nama "Sad Boy" yang membawanya menuju kesuksesan di tahun 2025 ini.</p>
    `,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostByPath(pathArr: string[]): Post | undefined {
  // support slug langsung atau dengan prefix tanggal: 2026/03/13/slug
  const slug = pathArr[pathArr.length - 1];
  return getPostBySlug(slug);
}

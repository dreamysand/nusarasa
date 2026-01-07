
import { Product, CompanyInfo } from './types';

export const COMPANY: CompanyInfo = {
  name: 'Nusarasa',
  tagline: 'Cita Rasa Bali Sejati',
  address: 'Kota Administrasi Jakarta Timur, DKI Jakarta, Indonesia',
  email: 'cs@nusarasa.com',
  phone: '+62 812 3456 7890',
  vision: 'Menjaga dan melestarikan cita rasa khas Bali dalam setiap gigitan.',
  mission: [
    'Meningkatkan daya saing produk lokal.',
    'Membangun loyalitas konsumen terhadap produk.',
    'Mengembangkan varian produk untuk menggaet konsumen.',
    'Mengutamakan kualitas untuk meningkatkan kepercayaan konsumen.',
  ]
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Pie Susu Bali',
    category: 'Makanan',
    price: 5000,
    description:
      'Pie susu khas Bali dengan isian susu lembut dan kulit pie renyah, cocok sebagai oleh-oleh.',
    image:
      'https://static.promediateknologi.id/crop/0x758:1080x1769/750x500/webp/photo/p1/1067/2024/07/31/Screenshot_20240730_142307_Instagram-2466597866.jpg',
    details: [
      'Resep Tradisional Bali',
      'Tekstur Lembut & Renyah',
      'Isi: 1 pcs',
      'Tanpa Pengawet'
    ],
    stock: 120
  },
  {
    id: '2',
    name: 'Es Kuwut Bali',
    category: 'Minuman',
    price: 5000,
    description:
      'Minuman segar khas Bali berbahan kelapa muda, melon, jeruk nipis, dan biji selasih.',
    image:
      'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/20084441/Asam-Manis-Segar-Ini-Resep-Es-Kuwut-Khas-Bali.jpg.webp',
    details: [
      'Segar & Alami',
      'Kelapa Muda Asli',
      'Tanpa Pewarna Buatan',
      'Isi: 250ml'
    ],
    stock: 80
  }
];


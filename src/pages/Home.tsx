
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Truck, Clock } from 'lucide-react';
import { PRODUCTS } from '../constants';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0 hero-gradient"></div>
        <div className="relative z-10 max-w-4xl px-4 animate-in fade-in zoom-in duration-1000">
          <span className="text-emerald-light font-medium tracking-[0.2em] uppercase mb-4 block">Modern Balinese Heritage</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white font-bold mb-6 leading-tight">
            Keanggunan Rasa <br /> Dari Alam Nusantara
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Dari bahan organik pilihan hingga resep yang diwariskan turun-temurun, Nusarasa menghadirkan kuliner khas Bali dengan rasa jujur dan sentuhan modern.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="bg-emerald hover:bg-emerald-light text-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 flex items-center group"
            >
              Lihat Koleksi
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-medium transition-all"
            >
              Kisah Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="bg-emerald/5 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="text-emerald w-8 h-8" />
              </div>
              <h3 className="font-serif font-semibold text-lg">Kualitas Premium</h3>
              <p className="text-stone-500 text-sm">Hanya bahan terbaik pilihan</p>
            </div>
            <div className="text-center space-y-3">
              <div className="bg-emerald/5 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="text-emerald w-8 h-8" />
              </div>
              <h3 className="font-serif font-semibold text-lg">Autentik Bali</h3>
              <p className="text-stone-500 text-sm">Sentuhan seni dan tradisi</p>
            </div>
            <div className="text-center space-y-3">
              <div className="bg-emerald/5 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="text-emerald w-8 h-8" />
              </div>
              <h3 className="font-serif font-semibold text-lg">Pengiriman Cepat</h3>
              <p className="text-stone-500 text-sm">Aman sampai tujuan</p>
            </div>
            <div className="text-center space-y-3">
              <div className="bg-emerald/5 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="text-emerald w-8 h-8" />
              </div>
              <h3 className="font-serif font-semibold text-lg">Tahan Lama</h3>
              <p className="text-stone-500 text-sm">Kualitas awet terjaga</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-serif text-emerald-dark font-bold mb-4">Koleksi Terpilih</h2>
              <p className="text-stone-600">Pilihan produk terlaris yang paling banyak dicintai oleh pelanggan setia Nusarasa.</p>
            </div>
            <Link to="/products" className="text-emerald font-semibold flex items-center hover:underline group">
              Lihat Semua <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-3xl overflow-hidden border border-stone-200 hover:shadow-2xl transition-all duration-500">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-dark">
                    {product.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-serif font-bold text-emerald-dark mb-2">{product.name}</h3>
                  <p className="text-stone-500 text-sm mb-6 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-emerald">Rp {product.price.toLocaleString('id-ID')}</span>
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-emerald text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-emerald-dark transition-colors"
                    >
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Glimpse */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=1000"
                  alt="Bali Culture"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-emerald/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl -z-10"></div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h4 className="text-emerald font-semibold uppercase tracking-widest text-sm">Warisan Nusantara</h4>
              <h2 className="text-4xl md:text-5xl font-serif text-emerald-dark font-bold leading-tight">
                Membawa Kehangatan Alam Ke Rumah Anda
              </h2>
              <p className="text-stone-600 leading-relaxed text-lg">
                Nusarasa bukan sekadar brand, melainkan perjalanan rasa. Dimulai dari kekaguman akan kekayaan alam pulau dewata, kami berkomitmen untuk melestarikan tradisi sekaligus menghadirkan produk yang relevan untuk gaya hidup modern.
              </p>
              <ul className="space-y-4">
                {['Bahan baku 100% organik dari petani lokal', 'Proses produksi ramah lingkungan', 'Packaging berkelanjutan', 'Kurasi kualitas ekspor'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-stone-700">
                    <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center flex-shrink-0">
                      <ArrowRight size={14} className="text-emerald" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-block border-b-2 border-emerald text-emerald font-bold pb-1 hover:text-emerald-dark hover:border-emerald-dark transition-all"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

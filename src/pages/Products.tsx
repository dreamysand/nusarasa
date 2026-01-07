
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Semua', ...new Set(PRODUCTS.map(p => p.category))];

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'Semua' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-warm-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-emerald-dark mb-4">Koleksi Kami</h1>
          <p className="text-stone-600 max-w-2xl">
            Rasa asli Bali, dari alam dan budaya yang hidup.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-emerald text-white'
                    : 'bg-white text-stone-600 hover:bg-stone-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white rounded-full border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-all"
            />
          </div>
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map(product => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group bg-white rounded-[2rem] overflow-hidden border border-stone-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-emerald/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-xl font-serif font-bold text-emerald-dark mb-1 group-hover:text-emerald transition-colors">{product.name}</h3>
                    <p className="text-stone-400 text-sm">{product.description.slice(0, 60)}...</p>
                  </div>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-xl font-bold text-emerald-dark">Rp {product.price.toLocaleString('id-ID')}</span>
                    <div className="bg-warm-100 text-stone-700 p-2 rounded-full group-hover:bg-emerald group-hover:text-white transition-all">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[3rem]">
            <div className="max-w-xs mx-auto space-y-4">
              <Search size={48} className="mx-auto text-stone-200" />
              <h3 className="text-xl font-serif font-bold text-stone-800">Produk tidak ditemukan</h3>
              <p className="text-stone-500">Coba gunakan kata kunci lain atau pilih kategori yang berbeda.</p>
              <button 
                onClick={() => {setSearchQuery(''); setActiveCategory('Semua');}}
                className="text-emerald font-bold"
              >
                Reset Filter
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

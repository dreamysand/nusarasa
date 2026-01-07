
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ShoppingCart, ArrowLeft, ChevronRight, CheckCircle2, Truck, RotateCcw } from 'lucide-react';
import { CartItem, Product } from '../types';

interface ProductDetailProps {
  addToCart: (product: Product, quantity: number) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState(false);

  useEffect(() => {
    const found = PRODUCTS.find(p => p.id === id);
    if (found) setProduct(found);
    else navigate('/products');
  }, [id, navigate]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 3000);
  };

  return (
    <div className="min-h-screen bg-warm-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-stone-400 mb-12">
          <Link to="/" className="hover:text-emerald">Home</Link>
          <ChevronRight size={14} />
          <Link to="/products" className="hover:text-emerald">Koleksi</Link>
          <ChevronRight size={14} />
          <span className="text-stone-600 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="rounded-[3rem] overflow-hidden bg-white shadow-xl aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-8">
            <div>
              <span className="text-emerald font-semibold text-sm uppercase tracking-widest">{product.category}</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-emerald-dark mt-2 mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-stone-800">Rp {product.price.toLocaleString('id-ID')}</p>
            </div>

            <div className="space-y-4">
              <p className="text-stone-600 leading-relaxed text-lg">{product.description}</p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {product.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-stone-600">
                    <CheckCircle2 size={18} className="text-emerald" />
                    <span className="text-sm">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-stone-200">
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center border border-stone-300 rounded-full bg-white overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-5 py-3 hover:bg-stone-50 transition-colors text-xl"
                  >
                    -
                  </button>
                  <span className="px-5 py-3 font-bold min-w-[50px] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-5 py-3 hover:bg-stone-50 transition-colors text-xl"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-emerald hover:bg-emerald-dark text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center space-x-2 transform active:scale-95"
                >
                  <ShoppingCart size={20} />
                  <span>Tambah ke Keranjang</span>
                </button>
              </div>

              {addedMessage && (
                <div className="bg-emerald/10 text-emerald p-4 rounded-2xl flex items-center space-x-3 mb-6 animate-in slide-in-from-bottom duration-300">
                  <CheckCircle2 size={20} />
                  <span className="font-medium">Produk berhasil ditambahkan!</span>
                  <Link to="/checkout" className="underline font-bold ml-auto">Ke Kasir</Link>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-stone-500 pt-8 border-t border-stone-100">
                <div className="flex items-start space-x-3">
                  <Truck size={20} className="text-stone-400 shrink-0" />
                  <div>
                    <p className="font-bold text-stone-800">Pengiriman Seluruh Indonesia</p>
                    <p>Estimasi 2-5 hari kerja tergantung lokasi.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <RotateCcw size={20} className="text-stone-400 shrink-0" />
                  <div>
                    <p className="font-bold text-stone-800">Kebijakan Pengembalian</p>
                    <p>Garansi 7 hari untuk produk rusak atau cacat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

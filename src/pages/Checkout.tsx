
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartItem } from '../types';
import { Trash2, CreditCard, ShoppingBag, ArrowRight, ShieldCheck, Truck, ChevronLeft } from 'lucide-react';

interface CheckoutProps {
  cart: CartItem[];
  updateQuantity: (productId: string, delta: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, updateQuantity, removeFromCart, clearCart }) => {
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 25000 : 0;
  const total = subtotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 5000);
  };

  if (isOrdered) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-warm-50 px-4">
        <div className="max-w-md w-full text-center space-y-8 bg-white p-12 rounded-[3rem] shadow-2xl border border-stone-100 animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-emerald/10 text-emerald rounded-full flex items-center justify-center mx-auto">
            <ShoppingBag size={48} />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-serif font-bold text-emerald-dark">Terima Kasih!</h2>
            <p className="text-stone-600">Pesanan Anda telah kami terima dan sedang dalam proses verifikasi. Kami akan mengirimkan notifikasi melalui email dalam waktu dekat.</p>
          </div>
          <div className="pt-6 border-t border-stone-100 flex items-center justify-center space-x-2 text-stone-400 text-sm">
            <div className="animate-spin w-4 h-4 border-2 border-emerald border-t-transparent rounded-full"></div>
            <span>Mengalihkan kembali ke Beranda...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-emerald-dark mb-12">Penyelesaian Pesanan</h1>

        {cart.length === 0 ? (
          <div className="bg-white rounded-[3rem] p-16 text-center shadow-xl border border-stone-100">
            <div className="max-w-sm mx-auto space-y-8">
              <div className="w-20 h-20 bg-warm-50 rounded-full flex items-center justify-center mx-auto">
                <ShoppingBag size={32} className="text-stone-300" />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-2">Keranjang Anda Kosong</h2>
                <p className="text-stone-500">Sepertinya Anda belum memilih produk apa pun untuk melengkapi hari Anda.</p>
              </div>
              <Link to="/products" className="inline-flex items-center space-x-2 bg-emerald text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-dark transition-all">
                <span>Lihat Koleksi Produk</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Cart Items & Form */}
            <div className="lg:col-span-7 space-y-8">
              {/* Order Items */}
              <div className="bg-white rounded-[2rem] shadow-lg border border-stone-100 overflow-hidden">
                <div className="p-8 border-b border-stone-100 bg-stone-50/50 flex justify-between items-center">
                  <h2 className="text-xl font-serif font-bold text-emerald-dark">Keranjang Belanja</h2>
                  <span className="text-sm font-medium text-stone-500">{cart.length} Produk</span>
                </div>
                <div className="divide-y divide-stone-100">
                  {cart.map((item) => (
                    <div key={item.product.id} className="p-8 flex flex-col sm:flex-row gap-6 items-center">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-stone-100">
                        <img src={item.product.image} className="w-full h-full object-cover" alt={item.product.name} />
                      </div>
                      <div className="flex-grow space-y-1 text-center sm:text-left">
                        <h4 className="font-serif font-bold text-emerald-dark text-lg">{item.product.name}</h4>
                        <p className="text-stone-400 text-sm">{item.product.category}</p>
                        <p className="text-emerald font-bold">Rp {item.product.price.toLocaleString('id-ID')}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center border border-stone-200 rounded-full overflow-hidden bg-warm-50">
                          <button onClick={() => updateQuantity(item.product.id, -1)} className="px-3 py-1 hover:bg-stone-200 transition-colors">-</button>
                          <span className="px-4 font-bold text-sm">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.product.id, 1)} className="px-3 py-1 hover:bg-stone-200 transition-colors">+</button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-2 text-stone-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Form */}
              <div className="bg-white rounded-[2rem] shadow-lg border border-stone-100 p-8">
                <h2 className="text-2xl font-serif font-bold text-emerald-dark mb-8">Informasi Pengiriman</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-stone-500 uppercase tracking-widest ml-1">Nama Lengkap</label>
                    <input required type="text" className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald/20 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-500 uppercase tracking-widest ml-1">Email</label>
                    <input required type="email" className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald/20 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-500 uppercase tracking-widest ml-1">Telepon</label>
                    <input required type="tel" className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald/20 transition-all" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-stone-500 uppercase tracking-widest ml-1">Alamat Lengkap</label>
                    <textarea required rows={3} className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald/20 transition-all" />
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column: Summary */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                <div className="bg-emerald-dark text-white rounded-[2.5rem] shadow-xl p-10">
                  <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-2">
                    Ringkasan Order
                  </h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center text-stone-300">
                      <span>Subtotal</span>
                      <span className="font-bold">Rp {subtotal.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex justify-between items-center text-stone-300">
                      <div className="flex items-center gap-2">
                        <span>Ongkos Kirim</span>
                        <Truck size={14} className="text-emerald-light" />
                      </div>
                      <span className="font-bold">Rp {shipping.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="border-t border-white/10 pt-6 flex justify-between items-center text-xl">
                      <span className="font-serif">Total Tagihan</span>
                      <span className="font-bold text-white">Rp {total.toLocaleString('id-ID')}</span>
                    </div>
                    
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-4">
                      <p className="text-xs font-bold text-emerald-light uppercase tracking-widest">Metode Pembayaran</p>
                      <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-xl hover:bg-white/5 transition-all">
                        <input type="radio" name="payment" defaultChecked className="accent-emerald" />
                        <CreditCard size={18} className="text-emerald-light" />
                        <span className="text-sm">Transfer Bank Virtual Account</span>
                      </label>
                    </div>

                    <button
                      onClick={handlePlaceOrder}
                      className="w-full bg-emerald-light hover:bg-emerald text-white px-8 py-5 rounded-2xl font-bold transition-all shadow-lg flex items-center justify-center space-x-3 group"
                    >
                      <span>Konfirmasi Pesanan</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <div className="flex items-center justify-center space-x-2 text-[10px] text-stone-400 uppercase tracking-widest font-bold">
                      <ShieldCheck size={14} />
                      <span>Pembayaran Aman & Terenkripsi</span>
                    </div>
                  </div>
                </div>
                
                <Link to="/products" className="flex items-center justify-center space-x-2 text-stone-500 hover:text-emerald font-bold transition-colors">
                  <ChevronLeft size={18} />
                  <span>Kembali Belanja</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;

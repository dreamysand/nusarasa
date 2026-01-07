
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react';
import { COMPANY } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-warm-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl font-serif font-bold text-emerald-dark mb-6">Hubungi Kami</h1>
          <p className="text-xl text-stone-600 font-light leading-relaxed">
            Apakah Anda memiliki pertanyaan tentang produk kami, tertarik untuk berkolaborasi, atau hanya ingin menyapa? Kami selalu senang mendengar dari Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-1 space-y-10">
            <div className="bg-emerald-dark text-white p-12 rounded-[3rem] space-y-8">
              <h3 className="text-2xl font-serif font-bold mb-4">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-2xl">
                    <MapPin size={24} className="text-emerald-light" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-300 text-sm">Alamat Kantor</h4>
                    <p className="text-stone-100 text-sm leading-relaxed">{COMPANY.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-2xl">
                    <Phone size={24} className="text-emerald-light" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-300 text-sm">Telepon & WhatsApp</h4>
                    <p className="text-stone-100 text-sm">{COMPANY.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-2xl">
                    <Mail size={24} className="text-emerald-light" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-300 text-sm">Email</h4>
                    <p className="text-stone-100 text-sm">{COMPANY.email}</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 flex space-x-4">
                <a href="#" className="p-2 hover:bg-emerald-light rounded-full transition-colors"><Instagram size={20} /></a>
                <a href="#" className="p-2 hover:bg-emerald-light rounded-full transition-colors"><Facebook size={20} /></a>
                <a href="#" className="p-2 hover:bg-emerald-light rounded-full transition-colors"><Twitter size={20} /></a>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-[3rem] shadow-lg overflow-hidden h-64 border border-stone-200">
               {/* Mock Map Placeholder */}
               <div className="w-full h-full bg-stone-100 rounded-[2.5rem] flex items-center justify-center text-stone-400">
                 <div className="text-center">
                   <MapPin size={40} className="mx-auto mb-2 opacity-20" />
                   <p className="text-xs uppercase tracking-widest font-bold">Peta Lokasi Kami di Bali</p>
                 </div>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-stone-100">
              {submitted ? (
                <div className="text-center py-20 space-y-6">
                  <div className="w-20 h-20 bg-emerald/10 text-emerald rounded-full flex items-center justify-center mx-auto">
                    <Send size={40} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-emerald-dark">Pesan Terkirim!</h2>
                  <p className="text-stone-500">Terima kasih telah menghubungi Nusarasa. Tim kami akan segera merespons pesan Anda dalam 24 jam ke depan.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-serif font-bold text-emerald-dark mb-8">Kirim Pesan</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-stone-600 ml-2">Nama Lengkap</label>
                        <input
                          required
                          type="text"
                          value={formState.name}
                          onChange={e => setFormState({...formState, name: e.target.value})}
                          className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-all"
                          placeholder="Masukkan nama Anda"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-stone-600 ml-2">Alamat Email</label>
                        <input
                          required
                          type="email"
                          value={formState.email}
                          onChange={e => setFormState({...formState, email: e.target.value})}
                          className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-all"
                          placeholder="email@contoh.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-stone-600 ml-2">Subjek</label>
                      <input
                        required
                        type="text"
                        value={formState.subject}
                        onChange={e => setFormState({...formState, subject: e.target.value})}
                        className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-all"
                        placeholder="Apa yang bisa kami bantu?"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-stone-600 ml-2">Pesan</label>
                      <textarea
                        required
                        rows={5}
                        value={formState.message}
                        onChange={e => setFormState({...formState, message: e.target.value})}
                        className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald/20 focus:border-emerald transition-all"
                        placeholder="Tuliskan detail pesan Anda di sini..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-emerald hover:bg-emerald-dark text-white px-8 py-5 rounded-2xl font-bold transition-all shadow-lg hover:shadow-emerald/20 flex items-center justify-center space-x-2"
                    >
                      <Send size={20} />
                      <span>Kirim Pesan Sekarang</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

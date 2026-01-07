
import React from 'react';
import { COMPANY } from '../constants';
import { Leaf, Heart, Users, Recycle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-warm-50 pb-20">
      {/* Header */}
      <section className="bg-emerald-dark text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1537953391648-762d01e1164e?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Tentang Nusarasa</h1>
          <p className="text-xl text-stone-300 font-light max-w-2xl mx-auto">
            Menyatukan keaslian tradisi nusantara dengan estetika modern untuk pengalaman gaya hidup yang lebih bermakna.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        {/* Story Section */}
        <div className="bg-white rounded-[3rem] shadow-xl p-10 md:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-emerald-dark">Awal Sebuah Perjalanan</h2>
              <p className="text-stone-600 leading-relaxed">
                Nusarasa lahir di jantung Bali, berawal dari impian kecil untuk membawa hasil bumi Indonesia ke panggung dunia. Kami percaya bahwa setiap rasa memiliki cerita, dan setiap kerajinan memiliki jiwa.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Melalui kolaborasi dengan petani lokal dan pengrajin tradisional, kami mengkurasi produk-produk yang tidak hanya berkualitas tinggi secara fungsional, namun juga membawa nilai-nilai luhur budaya Indonesia.
              </p>
              <div className="pt-6 border-t border-stone-100">
                <blockquote className="italic text-lg text-emerald font-serif">
                  "Menghargai alam adalah cara kami berterima kasih kepada kehidupan."
                </blockquote>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1559628233-100c798642d4?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-lg" alt="Organic farming" />
              <img src="https://images.unsplash.com/photo-1542897644-e04428948020?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-lg mt-10" alt="Tradition" />
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <section className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-emerald-dark p-12 rounded-[3rem] text-white">
              <h3 className="text-3xl font-serif font-bold mb-6">Visi Kami</h3>
              <p className="text-xl text-stone-300 leading-relaxed font-light italic">
                "{COMPANY.vision}"
              </p>
            </div>
            <div className="bg-emerald/5 p-12 rounded-[3rem] border border-emerald/10">
              <h3 className="text-3xl font-serif font-bold text-emerald-dark mb-6">Misi Kami</h3>
              <ul className="space-y-4">
                {COMPANY.mission.map((m, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-emerald text-white flex items-center justify-center shrink-0 mt-1 text-xs font-bold">
                      {i + 1}
                    </div>
                    <span className="text-stone-700 leading-relaxed">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="text-center py-20">
          <h2 className="text-4xl font-serif font-bold text-emerald-dark mb-16">Filosofi Brand</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Leaf />, title: 'Alami', desc: 'Hanya menggunakan bahan yang bersumber langsung dari alam tanpa tambahan kimia berbahaya.' },
              { icon: <Heart />, title: 'Integritas', desc: 'Menjunjung tinggi kejujuran dalam setiap rantai pasokan dan kualitas produk.' },
              { icon: <Users />, title: 'Komunitas', desc: 'Membangun ekosistem yang saling menguntungkan bagi petani dan pengrajin lokal.' },
              { icon: <Recycle />, title: 'Berkelanjutan', desc: 'Berkomitmen pada praktik bisnis yang menjaga kelestarian lingkungan untuk masa depan.' }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="w-20 h-20 bg-white shadow-xl rounded-full flex items-center justify-center mx-auto text-emerald">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                </div>
                <h4 className="text-xl font-serif font-bold text-emerald-dark">{item.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

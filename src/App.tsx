/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Printer, 
  Package, 
  Layout, 
  Box, 
  Layers, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ChevronRight, 
  Menu, 
  X,
  Instagram,
  Facebook,
  Twitter,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// --- Constants ---
const SERVICES: Service[] = [
  {
    id: 1,
    title: "الطباعة الأوفست (Offset Printing)",
    description: "طباعة عالية الجودة للكميات الكبيرة باستخدام أحدث ماكينات الأوفست رباعية الألوان.",
    icon: <Printer className="w-8 h-8" />,
  },
  {
    id: 2,
    title: "التغليف والعلب (Packaging)",
    description: "تصميم وتصنيع علب الكرتون بمختلف الأنواع: بريستول، كوتيد، ميتالايز، وعلب التعبئة الفاخرة.",
    icon: <Box className="w-8 h-8" />,
  },
  {
    id: 3,
    title: "اللوحات الإعلانية (Banners & Signage)",
    description: "طباعة البنرات واللوحات الإعلانية الخارجية والداخلية بجودة ألوان استثنائية.",
    icon: <Layout className="w-8 h-8" />,
  },
  {
    id: 4,
    title: "الكلادينج والحروف البارزة (3D Letters)",
    description: "تركيب واجهات الكلادينج وتصنيع الحروف البارزة 3D لواجهات المحلات والشركات.",
    icon: <Layers className="w-8 h-8" />,
  },
];

const WHY_US = [
  { title: "جودة استثنائية", desc: "نستخدم أفضل الخامات وأحدث التقنيات لضمان دقة الألوان." },
  { title: "سرعة التنفيذ", desc: "نلتزم بمواعيد التسليم المحددة مهما كان حجم الطلب." },
  { title: "أسعار تنافسية", desc: "نقدم أفضل قيمة مقابل السعر في السوق المحلي." },
  { title: "ماكينات حديثة", desc: "نمتلك أحدث ماكينات الطباعة رباعية الألوان لضمان الكفاءة." },
];

const GALLERY = [
  { url: "https://i.top4top.io/p_3712g27kk1.png", title: "مشروع أجندات 2026 البنك العربي" },
  { url: "https://l.top4top.io/p_3712bm7uo1.png", title: "مشروع علب مطعم ABO ALI" },
  { url: "https://g.top4top.io/p_3712dfk6y1.png", title: "مشروع شنط لبراند RODY Secrets" },
  { url: "https://c.top4top.io/p_3712am4y21.png", title: "مشروع كتالوجات لشركة BAYTAK" },
  { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800", title: "مشروع طباعة متميز" },
  { url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800", title: "مشروع طباعة متميز" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-cyan-100 selection:text-cyan-900" dir="rtl">
      {/* --- Navigation --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('hero')}>
            <div className="w-12 h-12 flex items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm border border-slate-100">
              <img 
                src="https://f.top4top.io/p_3712kna5d1.png" 
                alt="Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">مطبعة النور</span>
              <span className="text-[10px] font-semibold text-cyan-600 uppercase tracking-widest mt-1">ALNOOR PRINTHOUSE</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['الرئيسية', 'خدماتنا', 'من نحن', 'أعمالنا', 'اتصل بنا'].map((item, idx) => (
              <button 
                key={idx}
                onClick={() => scrollTo(['hero', 'services', 'about', 'gallery', 'contact'][idx])}
                className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('contact')}
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-cyan-600 transition-all shadow-md active:scale-95"
            >
              اطلب عرض سعر
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {['الرئيسية', 'خدماتنا', 'من نحن', 'أعمالنا', 'اتصل بنا'].map((item, idx) => (
                <button 
                  key={idx}
                  onClick={() => scrollTo(['hero', 'services', 'about', 'gallery', 'contact'][idx])}
                  className="text-2xl font-bold text-slate-800"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => scrollTo('contact')}
                className="mt-4 bg-cyan-600 text-white py-4 rounded-xl text-lg font-bold"
              >
                اطلب عرض سعر
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Hero Section --- */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-white z-10" />
          <img 
            src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20"
            alt="Printing Background"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              نحن نصنع الفرق في عالم الطباعة
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
              مطبعة النور <br />
              <span className="text-cyan-600">إبداع يتجاوز الحدود</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
              نقدم حلول طباعة متكاملة تجمع بين التكنولوجيا الحديثة والخبرة العريقة. من العلب الكرتونية الفاخرة إلى اللوحات الإعلانية الضخمة، نحن شريكك في النجاح.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollTo('contact')}
                className="px-8 py-4 bg-cyan-600 text-white rounded-xl font-bold text-lg hover:bg-cyan-700 transition-all shadow-xl shadow-cyan-200 flex items-center gap-2 group"
              >
                اتصل بنا الآن
                <ChevronRight className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform rotate-180" />
              </button>
              <button 
                onClick={() => scrollTo('services')}
                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all"
              >
                استكشف خدماتنا
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden md:block relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://f.top4top.io/p_3712ebe7m1.png" 
                alt="Printing Machine"
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-cyan-600 rounded-3xl -z-10 animate-pulse" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-200 rounded-full -z-10" />
          </motion.div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-[0.2em] mb-3">ماذا نقدم؟</h2>
            <h3 className="text-4xl font-black text-slate-900">خدمات طباعة احترافية</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all group"
              >
                <div className="w-16 h-16 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- About Us Section --- */}
      <section id="about" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://a.top4top.io/p_3712dco8n1.png" 
                className="rounded-2xl shadow-lg"
                alt="About 1"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://i.top4top.io/p_3712v6w3y1.png" 
                className="rounded-2xl shadow-lg mt-8"
                alt="About 2"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-600 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-2xl border-4 border-white">
              20+ عام
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-[0.2em] mb-3">من نحن؟</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-6">مطبعة النور: ريادة في عالم المطبوعات</h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              تعد مطبعة النور واحدة من المؤسسات الرائدة في مجال الطباعة والتغليف. نحن نفخر بامتلاكنا أحدث ماكينات طباعة الأوفست رباعية الألوان (4 Color Sheet Printing Machine) التي تضمن دقة متناهية في إعادة إنتاج الألوان.
            </p>
            <div className="space-y-4">
              {['متخصصون في علب الكرتون والبريستول', 'خبراء في اللوحات الإعلانية والكلادينج', 'حروف بارزة 3D بأعلى جودة', 'حلول تغليف مبتكرة للمنتجات الغذائية والطبية'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-cyan-600 w-6 h-6 flex-shrink-0" />
                  <span className="font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Why Choose Us --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.2em] mb-3">لماذا نحن؟</h2>
            <h3 className="text-4xl font-black">نحن نضع معايير جديدة للجودة</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {WHY_US.map((item, idx) => (
              <div key={idx} className="text-center p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-4xl font-black text-cyan-400 mb-4">0{idx + 1}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section id="gallery" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-[0.2em] mb-3">معرض الأعمال</h2>
              <h3 className="text-4xl font-black text-slate-900">شاهد جودة مخرجاتنا</h3>
            </div>
            <button className="px-6 py-3 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
              مشاهدة المزيد على إنستجرام
              <Instagram className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {GALLERY.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-md cursor-pointer"
              >
                <img 
                  src={item.url} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt={`Work ${idx}`}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 text-center justify-center">
                  <span className="text-white font-bold text-sm md:text-base">{item.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-[0.2em] mb-3">تواصل معنا</h2>
              <h3 className="text-4xl font-black text-slate-900 mb-8">هل لديك مشروع؟ دعنا نساعدك</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-cyan-600 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">العنوان</h4>
                    <p className="text-slate-600 text-sm">13 شارع مدرسة المتفوقين - مزلقان عين شمس, cairo, egypt, 11772</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-cyan-600 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">رقم الهاتف</h4>
                    <p className="text-slate-600" dir="ltr">01070210070</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-cyan-600 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">البريد الإلكتروني</h4>
                    <p className="text-slate-600">marketing@alnoor.online</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-cyan-600 rounded-3xl text-white shadow-xl shadow-cyan-200">
                <h4 className="text-xl font-bold mb-4">تواصل سريع عبر واتساب</h4>
                <p className="mb-6 opacity-90">احصل على تسعير فوري لمشروعك عبر محادثة مباشرة مع فريق المبيعات.</p>
                <a 
                  href="https://wa.me/201070210070" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  ابدأ المحادثة الآن
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100"
            >
              <h4 className="text-2xl font-bold text-slate-900 mb-8">أرسل لنا رسالة</h4>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">الاسم الكامل</label>
                    <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all" placeholder="أدخل اسمك" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">رقم الجوال</label>
                    <input type="tel" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all" placeholder="05xxxxxxxx" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">نوع الخدمة</label>
                  <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all appearance-none">
                    <option>طباعة أوفست</option>
                    <option>علب وتغليف</option>
                    <option>لوحات إعلانية</option>
                    <option>كلادينج وحروف بارزة</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">تفاصيل المشروع</label>
                  <textarea rows={4} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none" placeholder="اشرح لنا ما تحتاجه باختصار..."></textarea>
                </div>
                <button className="w-full py-5 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-cyan-600 transition-all shadow-lg active:scale-[0.98]">
                  إرسال الطلب
                </button>
              </form>
            </motion.div>
          </div>

          {/* Map Embed */}
          <div className="mt-24 rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] grayscale hover:grayscale-0 transition-all duration-700 border-8 border-white">
            <iframe 
              src="https://maps.google.com/maps?q=30.1337,31.3216&z=17&output=embed" 
              className="w-full h-full border-0" 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm border border-slate-100">
                  <img 
                    src="https://f.top4top.io/p_3712kna5d1.png" 
                    alt="Logo" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">مطبعة النور</span>
                  <span className="text-[10px] font-semibold text-cyan-600 uppercase tracking-widest mt-1">ALNOOR PRINTHOUSE</span>
                </div>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed mb-8">
                نحن ملتزمون بتقديم أعلى مستويات الجودة في عالم الطباعة والتغليف. نجمع بين الفن والتكنولوجيا لنقدم لعملائنا أفضل النتائج التي تليق بعلاماتهم التجارية.
              </p>
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, url: "https://www.facebook.com/AlNoor.Print" },
                ].map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-cyan-600 hover:text-white transition-all"
                  >
                    <item.Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 mb-6">روابط سريعة</h5>
              <ul className="space-y-4 text-slate-500 text-sm">
                {['الرئيسية', 'خدماتنا', 'من نحن', 'أعمالنا', 'سياسة الخصوصية'].map((item, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => {
                        if (item === 'سياسة الخصوصية') {
                          setShowPrivacy(true);
                          window.scrollTo(0, 0);
                        } else {
                          scrollTo(['hero', 'services', 'about', 'gallery', 'contact'][idx] || 'hero');
                        }
                      }} 
                      className="hover:text-cyan-600 transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 mb-6">ساعات العمل</h5>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li className="flex justify-between">
                  <span>السبت - الخميس:</span>
                  <span className="font-bold text-slate-700">9 ص - 9 م</span>
                </li>
                <li className="flex justify-between">
                  <span>الجمعة:</span>
                  <span className="font-bold text-slate-700 text-red-500">مغلق</span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-xs text-slate-400 mb-2">هل تحتاج مساعدة؟</p>
                <p className="font-bold text-slate-900">01070210070</p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
            <p>© {new Date().getFullYear()} مطبعة النور. جميع الحقوق محفوظة.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-cyan-600 transition-colors">الشروط والأحكام</a>
              <a href="#" className="hover:text-cyan-600 transition-colors">سياسة الكوكيز</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Buttons Container */}
      <div className="fixed bottom-8 left-8 z-50 flex flex-row gap-4">
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/201070210070" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="absolute bottom-full mb-4 left-0 bg-white text-slate-900 px-4 py-2 rounded-xl shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            تحدث معنا الآن
          </span>
        </a>

        {/* Facebook Button */}
        <a 
          href="https://www.facebook.com/AlNoor.Print" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
        >
          <Facebook className="w-8 h-8" />
          <span className="absolute bottom-full mb-4 left-0 bg-white text-slate-900 px-4 py-2 rounded-xl shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            تابعنا على فيسبوك
          </span>
        </a>
      </div>

      {/* --- Privacy Policy Overlay --- */}
      <AnimatePresence>
        {showPrivacy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto px-6 py-20 relative">
              <button 
                onClick={() => setShowPrivacy(false)}
                className="fixed top-8 left-8 p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors z-[110]"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="prose prose-slate max-w-none">
                <h1 className="text-3xl font-black text-slate-900 mb-8 text-center">سياسة الخصوصية – مطبعة النور Al Noor Print House</h1>
                
                <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                  في مطبعة النور Al Noor Print House، نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح هذه السياسة كيفية جمع المعلومات، استخدامها، وحمايتها عند استخدامك لموقعنا الإلكتروني وخدماتنا.
                </p>

                <div className="space-y-12">
                  <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">1. المعلومات التي نجمعها</h2>
                    <p className="text-slate-600 mb-4">نقوم بجمع معلوماتك عند تفاعلك معنا، وتشمل:</p>
                    <ul className="list-disc pr-6 space-y-2 text-slate-600">
                      <li><strong>المعلومات الشخصية:</strong> الاسم، البريد الإلكتروني، رقم الهاتف، عنوان الفوترة أو التسليم عند الطلب.</li>
                      <li><strong>معلومات الاستخدام:</strong> صفحات الموقع التي تزورها، مدة التصفح، والروابط التي تنقر عليها.</li>
                      <li><strong>ملفات تعريف الارتباط (Cookies):</strong> لتحسين تجربة التصفح وتخصيص الخدمات.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">2. كيفية استخدام المعلومات</h2>
                    <p className="text-slate-600 mb-4">نستخدم بياناتك للأغراض التالية:</p>
                    <ul className="list-disc pr-6 space-y-2 text-slate-600">
                      <li>معالجة طلبات الطباعة والخدمات المرتبطة بها.</li>
                      <li>التواصل معك بشأن الطلبات، العروض، أو التحديثات الخاصة بمطبعتنا.</li>
                      <li>تحسين الموقع والخدمات وتجربة المستخدم.</li>
                      <li>الامتثال للقوانين واللوائح المعمول بها.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">3. حماية المعلومات</h2>
                    <p className="text-slate-600 leading-relaxed">
                      نطبق إجراءات أمان تقنية وإدارية لحماية معلوماتك من الوصول غير المصرح به أو التعديل أو الكشف أو الحذف. لا نشارك بياناتك مع أطراف ثالثة إلا إذا كان ذلك ضروريًا لتقديم الخدمة أو وفقًا للقانون.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">4. ملفات تعريف الارتباط (Cookies)</h2>
                    <p className="text-slate-600 leading-relaxed">
                      قد نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم وتحليل استخدام الموقع. يمكنك تعطيل ملفات تعريف الارتباط من خلال إعدادات المتصفح، لكن قد يؤثر ذلك على بعض وظائف الموقع.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">5. الروابط لمواقع أخرى</h2>
                    <p className="text-slate-600 leading-relaxed">
                      موقعنا قد يحتوي على روابط لمواقع خارجية. نحن لسنا مسؤولين عن سياسات الخصوصية أو محتوى هذه المواقع، وننصحك بقراءة سياساتها الخاصة.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">6. حقوقك</h2>
                    <ul className="list-disc pr-6 space-y-2 text-slate-600">
                      <li>الحق في الوصول إلى بياناتك الشخصية.</li>
                      <li>الحق في تصحيح أو تحديث معلوماتك.</li>
                      <li>الحق في طلب حذف بياناتك من سجلاتنا.</li>
                      <li>الحق في الاعتراض على معالجة البيانات لأغراض تسويقية.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">7. التغييرات على سياسة الخصوصية</h2>
                    <p className="text-slate-600 leading-relaxed">
                      نحتفظ بالحق في تعديل سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة مع تحديث تاريخ السريان.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">8. التواصل معنا</h2>
                    <p className="text-slate-600 mb-4">إذا كان لديك أي أسئلة أو استفسارات بخصوص سياسة الخصوصية، يرجى التواصل معنا عبر:</p>
                    <ul className="pr-6 space-y-2 text-slate-600">
                      <li><strong>البريد الإلكتروني:</strong> marketing@alnoorprint.online</li>
                      <li><strong>الهاتف:</strong> 01070210070</li>
                    </ul>
                  </section>

                  <div className="pt-12 border-t border-slate-100 text-center text-slate-400 text-sm">
                    آخر تحديث: 1 مارس 2026
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

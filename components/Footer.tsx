"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Footer() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <footer className="bg-primary-50 border-t border-primary-100 pt-20 pb-10 mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* GRID UTAMA (3 Kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* KOLOM 1: Logo & Info (Porsi lebih besar) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <Image
                src={
                  resolvedTheme === "dark"
                    ? "/img/el-teks-2.png"
                    : "/img/el-teks.png"
                }
                alt="Logo Komplek-eL"
                width={240}
                height={40}
                priority
                className="w-48"
              />
            </Link>
            <p className="text-quinary-800 text-sm leading-relaxed max-w-sm">
              Membentuk pribadi santri yang beriman, bertakwa, berilmu, dan berakhlakul karimah.
            </p>
            <div className="text-quinary-800 text-sm flex flex-col gap-1 mt-1">
              <p className="font-semibold text-quinary-950">Pondok Pesantren Al-Munawwir Komplek L Krapyak</p>
              <p>Bantul, Daerah Istimewa Yogyakarta</p>
              <p>Sekretariat/WA: (+62) 851 6259 1329</p>
              <p>Email: almunawwirkomplekel@gmail.com</p>
            </div>
          </div>

          {/* KOLOM 2: Quick Links (Menu Cepat) */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="text-quinary-950 font-heading font-bold text-md tracking-wide">
              Tautan Cepat
            </h3>
            <nav className="flex flex-col gap-3 text-sm text-quinary-800">
              <Link href="/profil/sejarah" className="hover:text-primary transition-colors w-max">Profil Pesantren</Link>
              <Link href="/artikel" className="hover:text-primary transition-colors w-max">Artikel & Karya</Link>
              <Link href="/berita" className="hover:text-primary transition-colors w-max">Berita Terbaru</Link>
              <Link href="/kontribusi" className="hover:text-primary transition-colors w-max">Kontribusi</Link>
              <Link href="/psb" className="hover:text-primary transition-colors w-max">Pendaftaran Santri Baru</Link>
            </nav>
          </div>

          {/* KOLOM 3: Google Maps iframe (Minimalis & Interaktif) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-primary-100/50 border border-primary-200 group">
              {/* Ganti 'src' di bawah ini dengan link embed iframe Google Maps aslimu nanti */}
              <iframe
                src="https://maps.google.com/maps?q=Al+Munawwir+Komplek+L&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
              ></iframe>
            </div>
          </div>

        </div>

        {/* GARIS PEMISAH & COPYRIGHT */}
        <div className="pt-8 border-t border-primary-100/80 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-quinary-800 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Komplek-eL. All Right Reserved.
          </p>
          
          {/* Ikon Media Sosial Minimalis */}
          <div className="flex items-center gap-4 text-quinary-800">
            <a href="https://www.instagram.com/komplek_el/" className="hover:text-primary transition-colors" aria-label="Instagram" target="_blank">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCf-uQEv7rkA7roWsD-ycElA" className="hover:text-primary transition-colors" aria-label="YouTube" target="_blank">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
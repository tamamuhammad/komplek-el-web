import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-hero-mesh pt-10 pb-20 lg:pt-16 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-12 md:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center justify-between">
          {/* KOLOM KIRI: Teks & Call to Action */}
          <div className="flex flex-col items-center md:items-start gap-2 lg:pr-8 z-10">
            {/* Badge kecil di atas judul */}
            <div className="inline-flex w-max items-center px-3 py-1 rounded-full bg-primary-100/50 border border-primary-200 text-primary-700 text-xs font-bold tracking-wide uppercase">
              Selamat Datang Di Website Resmi
            </div>

            {/* Judul Utama (Menggunakan font-heading SF Rounded) */}
            <h1 className="font-heading text-6xl lg:text-7xl xl:text-7xl font-extrabold text-quinary-950 leading-[1.1] tracking-tight">
              Komplek-eL
            </h1>

            <p className="text-lg text-quinary-800 text-center md:text-left leading-tight max-w-lg mt-2">
              PP Al-Munawwir Komplek L bervisi membentuk pribadi santri yang
              beriman, bertakwa, berilmu, dan berakhlakul karimah.
            </p>

            {/* Tombol Aksi */}
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Link
                href="/psb"
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-primary/30 transition-all hover:-translate-y-1"
              >
                Daftar Sekarang
              </Link>
              <Link
                href="/profil/sejarah"
                className="px-8 py-4 rounded-2xl font-semibold text-quinary-900 bg-primary-100 hover:bg-primary-50 border border-primary-150 transition-all hover:-translate-y-1"
              >
                Kenali Kami
              </Link>
            </div>
          </div>

          {/* KOLOM KANAN: Komposisi Gambar Mengambang (The Magic Happens Here) */}
          <div className="relative w-full md:w-3/4 aspect-square md:aspect-4/3 lg:aspect-square lg:mr-12 mt-10 lg:mt-0 justify-self-end">
            {/* 1. GAMBAR UTAMA (Paling belakang) */}
            <div className="absolute inset-0 bg-linear-to-br from-secondary-200/40 to-transparent rounded-4xl overflow-hidden bg-primary-100 shadow-2xl">
              {/* Ganti src dengan gambar orang/santrimu nanti */}
              <Image
                src="/img/hero-1.jpg"
                alt="Santri Komplek-eL"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* 2. GAMBAR BACKGROUND / KARTU (Mengambang di kiri bawah) */}
            {/* absolute & -left-12 membuatnya keluar dari batas gambar utama */}
            <div className="absolute hidden md:block md:right-0 md:-left-32 md:bottom-15 w-48 md:w-52 h-32 md:h-32 bg-white/60 dark:bg-quinary-900/60 backdrop-blur-xl rounded-2xl shadow-xl z-20 transition-transform hover:scale-105 duration-300">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                {/* Ganti src dengan gambar background/pattern milikmu */}
                <Image
                  src="/img/hero-2.jpg"
                  alt="Background Dekorasi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* 3. LOGO (Mengambang di kiri atas) */}
            {/* Efek glassmorphism bulat untuk menonjolkan logo */}
            <div className="absolute hidden md:flex md:-right-24 md:top-4 w-32 h-32 md:w-48 md:h-48 bg-transparent rounded-3xl items-center justify-center p-4 md:p-6 z-20 transition-transform hover:-translate-y-2 duration-300">
              <div className="relative w-full h-full">
                {/* Ganti src dengan logomu */}
                <Image
                  src="/img/hero-3.png"
                  alt="Logo Mengambang"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Elemen Dekorasi Tambahan (Opsional: Dot Pattern Apple-style) */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary-200/40 to-transparent rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-secondary-200/40 to-transparent rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

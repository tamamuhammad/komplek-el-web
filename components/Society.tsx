import Image from "next/image";

// Data dummy lembaga (Bisa kamu sesuaikan dengan lembaga asli di Komplek-eL)
const institutions = [
  { name: "Madrasah Diniyah Salafiyyah IV", logo: "/img/brand-1.png" },
  { name: "Pengurus Komplek L", logo: "/img/brand-2.png" },
  { name: "Lembaga Bimbingan Komplek L", logo: "/img/brand-3.png" },
];

export default function Society() {
  return (
    <section className="py-12 md:py-16 border-b border-primary-100/60 bg-secondary relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Teks Pengantar Kecil */}
        <p className="text-center text-xs md:text-sm font-semibold text-quinary-50 dark:text-quinary-100/70 uppercase tracking-[0.2em] mb-10">
          Lembaga & Badan Otonom di Bawah Naungan Pesantren
        </p>

        {/* Grid / Flexbox untuk barisan logo */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {institutions.map((inst, index) => (
            <div
              key={index}
              // Efek Grayscale dan Opacity yang memudar jadi berwarna saat di-hover
              className="relative w-28 h-12 md:w-48 md:h-24 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-out cursor-pointer group"
              title={inst.name}
            >
              <Image
                src={inst.logo}
                alt={`Logo ${inst.name}`}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

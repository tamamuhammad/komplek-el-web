import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <section className="py-24 relative bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-quinary-950 tracking-tight">
            Mengenal Lebih Dekat
          </h2>
          <p className="mt-4 text-lg text-quinary-800">
            Fondasi dan arah gerak Komplek L dalam mencetak
            peradaban.
          </p>
        </div>

        {/* GRID UTAMA (12 Kolom) */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* KOLOM 1 (Kiri): Gambar & Nilai Dasar */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Gambar Image Card */}
            <div className="aspect-4/3 h-full rounded-2xl overflow-hidden shadow-lg border-2 border-white dark:border-quinary-800 relative bg-primary-100 group">
              <Image
                src="/img/profile.png"
                alt="Gedung Komplek-eL"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-quinary-950/80 via-quinary-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <p className="font-heading text-sm md:text-base leading-tight drop-shadow-md">
                  PP. Al-Munawwir Komplek L
                </p>
                <p className="text-xs opacity-90 mt-1">
                  Krapyak, DI Yogyakarta
                </p>
              </div>
            </div>
          </div>

          {/* KOLOM 2 (Tengah): Identitas Madrasah/Pesantren */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-primary-50 rounded-2xl border border-primary-100 shadow-md p-5 transition-colors">
              <p className="text-xs font-bold text-quinary-500 uppercase tracking-widest mb-4">
                Identitas Komplek L
              </p>
              <div className="space-y-3">
                {[
                  { label: "Pengasuh", value: "K.H. Muhammad Munawwar Ahmad" },
                  {
                    label: "Penyelenggara",
                    value: "Pondok Pesantren Al-Munawwir Krapyak",
                  },
                  {
                    label: "Alamat",
                    value:
                      "Jl. KH. Ali Maksum Tromol Pos 5, Krapyak Kulon, Krapyak, Kec. Sewon, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55141",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col border-b border-primary-50 dark:border-quinary-800/50 pb-2.5 last:border-0 last:pb-0"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary-800/70">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-quinary-950 leading-tight mt-0.5">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-50 rounded-2xl border border-primary-100 shadow-md p-5 transition-colors">
              <p className="text-xs font-bold text-quinary-500 uppercase tracking-widest mb-4">
                Visi Pesantren
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <p className="text-sm italic text-quinary-800 leading-relaxed">
                    "Membentuk pribadi santri yang beriman, bertakwa, berilmu,
                    dan berakhlakul karimah.""
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* KOLOM 3 (Kanan): Misi & 3 Ikon Fitur */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Kotak Misi */}
            <div className="bg-primary-50 rounded-2xl border border-primary-100 shadow-md p-5 transition-colors grow">
              <p className="text-xs font-bold text-quinary-500 uppercase tracking-widest mb-4">
                Misi Pesantren
              </p>
              <ul className="space-y-4">
                {[
                  "Menghasilkan pribadi muslim yang beriman, berakhlakul karimah, beramal shaleh, memiliki rasa tanggung jawab kepada agama, bangsa, dan negara.",
                  "Menghasilkan pribadi muslim yang pandai membaca Al-Qur’an serta memahami tafsir dan hadis.",
                  "Menghasilkan pribadi muslim yang berkeahlian, cakap, terampil, dan tangguh sehingga mampu menunaikan tugas dan kewajiban serta optimal dalam beragama, bermasyarakat, berbangsa, dan bernegara.",
                ].map((misi, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-primary shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <p className="text-sm text-quinary-800 leading-relaxed">
                      {misi}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Program() {
  const programs = [
    {
      title: "Madrasah Diniyah (Klasikal)",
      description:
        "Pendidikan agama berjenjang (I'dad-Takhassus) dengan fokus utama pada penguasaan ilmu alat (I'dad-Tsani) dan kajian kitab turats (Tsalits-Takhassus) ala pesantren salaf.",
      tags: ["6 Jenjang Kelas", "Bandongan", "Sorogan", "Musyawarah"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary" aria-hidden="true"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
      ),
    },
    {
      title: "Pengajian Al-Qur'an",
      description:
        "Program setoran Al-Qur'an baik bin-nadzri maupun bil-hifdzi bersanad yang dibimbing langsung oleh Asatidz. Dilengkapi dengan tahsin, tajwid, dan evaluasi setoran berkala.",
      tags: ["Bersanad", "Bin-Nadzir & Bil-Hifdzi", "Waqof Krapyak"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-primary"
          aria-hidden="true"
        >
          <path d="M10 2v8l3-3 3 3V2"></path>
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
        </svg>
      ),
    },
    {
      title: "Pengembangan Bahasa Asing",
      description:
        "Program ekstrakurikuler yang dirancang untuk meningkatkan kemampuan santri dalam berkomunikasi secara efektif di lingkungan global.",
      tags: ["Pilihan Khusus"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-primary"
        >
          <path d="m4 6 8-4 8 4" />
          <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
          <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
          <path d="M18 5v17" />
          <path d="M6 5v17" />
          <circle cx="12" cy="9" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-5 relative bg-primary-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-quinary-950 tracking-tight">
            Program Pendidikan & Pengembangan Santri
          </h2>
          <p className="mt-4 text-sm md:text-lg text-quinary-800">
            Struktur kurikulum dirancang secara
            komprehensif untuk memastikan setiap santri mendapatkan keseimbangan
            antara ilmu akhirat dan kecakapan dunia.
          </p>
        </div>

        {/* Grid Program (2x2 di desktop, 1 kolom di HP) */}
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-primary-50 rounded-3xl border-2 border-primary-100 p-8 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* Ikon Program */}
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {program.icon}
              </div>

              {/* Judul & Deskripsi */}
              <h3 className="font-heading text-2xl font-bold text-quinary-950 mb-3 group-hover:text-primary transition-colors">
                {program.title}
              </h3>
              <p className="text-quinary-800 text-sm leading-relaxed grow">
                {program.description}
              </p>

              {/* Garis Pemisah & Tags */}
              <div className="pt-6 mt-6 border-t border-primary-600/10">
                <div className="flex flex-wrap gap-2">
                  {program.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-[10px] font-bold uppercase tracking-wider bg-primary-100 text-primary-900 border border-primary-200 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

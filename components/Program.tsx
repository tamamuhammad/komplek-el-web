export default function Program() {
  const programs = [
    {
      title: "Madrasah Diniyah (Klasikal)",
      description:
        "Pendidikan agama berjenjang (I'dad-Takhassus) dengan fokus utama pada penguasaan ilmu alat (I'dad-Tsani) dan kajian kitab turats (Tsalits-Takhassus) ala pesantren salaf.",
      tags: ["6 Jenjang Kelas", "Bandongan", "Sorogan", "Musyawarah"],
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
          <path d="M12 7v14"></path>
          <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
        </svg>
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

  const ekstras = [
    {
      name: "EL-Hadroh",
      icon: (
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
          className="w-3.5 h-3.5 text-primary"
        >
          <path d="M9 18V5l12-2v13"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
        </svg>
      ),
    },
    {
      name: "EL-Tasrih (Jurnalistik)",
      icon: (
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
          className="w-3.5 h-3.5 text-primary"
        >
          <path d="M12 7v14"></path>
          <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
        </svg>
      ),
    },
    {
      name: "EL-OR (Olahraga)",
      icon: (
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
          className="w-3.5 h-3.5 text-primary"
        >
          <path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path>
          <path d="m2.5 21.5 1.4-1.4"></path>
          <path d="m20.1 3.9 1.4-1.4"></path>
          <path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path>
          <path d="m9.6 14.4 4.8-4.8"></path>
        </svg>
      ),
    },
    {
      name: "EL-Pro (Media dan Produksi)",
      icon: (
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
          className="w-3.5 h-3.5 text-primary"
        >
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
          <circle cx="12" cy="13" r="3"></circle>
        </svg>
      ),
    },
    {
      name: "EL-Takmir",
      icon: (
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
          className="w-3.5 h-3.5 text-primary"
        >
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" x2="12" y1="19" y2="22"></line>
        </svg>
      ),
    },
    {
      name: "EL-PBA (Pengembangan Bahasa Asing)",
      icon: (
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
          className="w-3.5 h-3.5 text-primary"
        >
          <path d="m5 8 6 6"></path>
          <path d="m4 14 6-6 2-3"></path>
          <path d="M2 5h12"></path>
          <path d="M7 2h1"></path>
          <path d="m22 22-5-10-5 10"></path>
          <path d="M14 18h6"></path>
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
            Struktur kurikulum dirancang secara komprehensif untuk memastikan
            setiap santri mendapatkan keseimbangan antara ilmu akhirat dan
            kecakapan dunia.
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
        <div className="bg-primary-50 rounded-3xl p-6 md:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            {/* Bagian Kiri: Judul */}
            <div className="shrink-0 lg:w-64">
              <p className="text-xs font-bold text-primary uppercase tracking-widest">
                6 Kegiatan Ekstrakurikuler
              </p>
              <p className="text-xs md:text-sm text-quinary-500 mt-1">
                Pengembangan bakat & potensi santri
              </p>
            </div>

            {/* Bagian Kanan: Kumpulan Badge/Pill */}
            <div className="flex flex-wrap gap-2.5">
              {ekstras.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 bg-primary-100 border border-primary-200 rounded-full px-3.5 py-1.5 shadow-sm hover:border-primary/50 transition-colors cursor-default"
                >
                  {item.icon}
                  <span className="text-xs font-semibold text-quinary-700">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

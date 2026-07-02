export default function Schedule() {
  // 1. Data Jadwal Harian
  const jadwalHarian = [
    { time: "04.00–05.00", title: "Sholat Shubuh Berjama'ah", highlight: false },
    { time: "05.00–06.30", title: "Ziaroh Maqbaroh (Jum'at)", highlight: true },
    { time: "05.00–selesai", title: "Pengajian Al-Qur'an", highlight: true },
    { time: "07.00–09.00", title: "Ro'an (Ahad)", highlight: false },
    { time: "07.00–18.00", title: "Kegiatan Pribadi", highlight: false },
    { time: "18.00–18.15", title: "Sholat Maghrib Berjama'ah", highlight: false },
    { time: "18.15–19.15", title: "Yasin Dan Tahlil (Kamis)", highlight: true },
    { time: "18.15–19.30", title: "Pengajian Al-Qur'an/Bandongan", highlight: true },
    { time: "19.30–19.45", title: "Sholat Isya Berjama'ah", highlight: false },
    { time: "19.45–20.15", title: "Setoran dan Sima'an (El-Huffadz)", highlight: true },
    { time: "20.15–21.45", title: "Madrasah Diniyyah", highlight: true },
    { time: "20.15–21.45", title: "Ijtima'iyah Usbu'iyyah (Kamis)", highlight: true },
    { time: "21.45–22.30", title: "Sorogan dan Musyawaroh", highlight: true },
  ];

  // 2. Data Fasilitas (Menggantikan posisi Ubudiyah lama di kotak gelap)
  const fasilitas = [
    "Asrama Representatif", "Lemari", "Jas Almameter Komplek L", "Kalender", "Kartu Tanda Santri", "Buku Santri", "Al-Qur'an", "Kitab Al-Munawwiriyyah"
  ];

  // 3. Data Kompetensi Ubudiyah (Menggantikan posisi Agenda di kotak bawah)
  const kompetensiUbudiyah = [
    {
      badge: "Mingguan",
      title: "Ijtima'iyah Usbu'iyyah<br>Ziaroh Maqbaroh<br>Ro'an",
      desc: "Kegiatan Mingguan berupa Pembacaan Maulid, Ziaroh, dan Kerja Bakti Lingkungan Pondok."
    },
    {
      badge: "Setiap 2 Minggu",
      title: "Musyawaroh Kubro",
      desc: "Kegiatan diskusi pada beberapa as'ilah yang diselenggarakan oleh LSO At-Tihami MDS IV."
    },
    {
      badge: "Hari Besar Islam",
      title: "Peringatan Hari Besar Islam",
      desc: "Peringatan-peringatan serta amaliyah yang relevan dengan hari besar Islam."
    },
    {
      badge: "Haul dan Tahunan",
      title: "Haul Masyayikh<br>Sima'an Al-Qur'an<br>Muqoddaman",
      desc: "Peringatan Haul dengan pembacaan Yasin Tahlil, Sima'an dan Muqoddaman Al-Qur'an."
    },
  ];

  return (
    <section id="jadwal" className="py-20 relative bg-primary-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 border-b border-primary-100 dark:border-primary-800 pb-6">
          <div>
            <p className="text-primary font-bold tracking-widest uppercase text-xs mb-2">
              Sistem Asrama 24 Jam
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary-50 tracking-tight">
              Jadwal Kegiatan Santri
            </h2>
          </div>
          <p className="text-sm text-primary-500 max-w-sm sm:text-right">
            Seluruh santri tinggal, belajar, dan beribadah dalam ekosistem pesantren yang terstruktur dan kondusif.
          </p>
        </div>

        {/* GRID UTAMA (12 Kolom) */}
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* KOLOM KIRI (5/12): Jadwal Harian */}
          <div className="lg:col-span-5 bg-white/70 dark:bg-quinary-900/50 backdrop-blur-sm rounded-3xl border border-primary-100 dark:border-quinary-800 p-6 md:p-8">
            <div className="flex items-center gap-2.5 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                <circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path>
              </svg>
              <p className="text-xs font-bold text-quinary-900 dark:text-quinary-100 uppercase tracking-widest">
                Jadwal Kegiatan Harian
              </p>
            </div>
            
            <div className="space-y-2">
              {jadwalHarian.map((item, i) => (
                <div 
                  key={i} 
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors ${
                    item.highlight 
                      ? "bg-white dark:bg-quinary-900 border border-primary-100/50 dark:border-quinary-700 shadow-sm" 
                      : "hover:bg-primary-50/50 dark:hover:bg-quinary-800/50"
                  }`}
                >
                  <span className="text-[11px] font-black text-primary/90 w-24 shrink-0 font-mono tracking-tight">
                    {item.time}
                  </span>
                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.highlight ? "bg-primary" : "bg-quinary-200 dark:bg-quinary-700"}`}></div>
                  <span className="text-xs font-semibold text-quinary-700 dark:text-quinary-300 leading-tight">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* KOLOM KANAN (7/12): Fasilitas & Ubudiyah */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* KOTAK ATAS: Fasilitas (Dark Box) */}
            <div className="bg-primary-50 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-lg border border-quinary-800">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl"></div>
              
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1.5 relative z-10">
                Fasilitas Pesantren
              </p>
              <p className="text-primary-950 font-heading font-semibold text-lg md:text-2xl mb-5 opacity-90 relative z-10">
                Penunjang Santri
              </p>
              
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {fasilitas.map((item, i) => (
                  <span key={i} className="text-xs font-semibold bg-primary-200/50 hover:bg-primary-300/50 transition-colors border border-primary-3  00/50 text-primary-950 px-4 py-2 rounded-full cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* KOTAK BAWAH: Kompetensi Ubudiyah (List Box) */}
            <div className="bg-white dark:bg-quinary-900/50 rounded-3xl border border-primary-100 dark:border-quinary-800 shadow-sm p-6 md:p-8 flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs font-bold text-quinary-400 uppercase tracking-widest">
                  Kegiatan Rutinan
                </p>
              </div>
              
              <div className="space-y-4">
                {kompetensiUbudiyah.map((item, i) => (
                  <div key={i} className="flex gap-4 border-b border-primary-50 dark:border-quinary-800/60 pb-4 last:border-0 last:pb-0">
                    <div className="shrink-0 pt-0.5 min-w-32">
                      <span className="inline-block text-[9px] font-black px-2.5 py-1 rounded-full mb-1.5 bg-primary-500 text-white uppercase tracking-wider shadow-sm">
                        {item.badge}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-sm md:text-base text-primary-50 leading-tight" dangerouslySetInnerHTML={{ __html: item.title }}
/>
                      <p className="text-xs text-primary-300/50 mt-1.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
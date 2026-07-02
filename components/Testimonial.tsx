import Image from "next/image";

export default function Testimonial() {
  // Data Ulasan (Dibagi dua agar baris atas dan bawah berbeda isinya)
  const row1 = [
    {
      author_name: "Ahmad Fulan",
      profile_photo_url: "/img/user.png",
      rating: 5,
      text: "Alhamdulillah, selama memondokkan anak di sini perubahannya sangat signifikan. Anak menjadi lebih disiplin sholat jamaah.",
    },
    {
      author_name: "Siti Aminah",
      profile_photo_url: "/img/user.png",
      rating: 5,
      text: "Fasilitas lengkap, asramanya bersih. Pengasuh dan para ustadz sangat memantau perkembangan santri.",
    },
    {
      author_name: "Budi Santoso",
      profile_photo_url: "/img/user.png",
      rating: 4,
      text: "Konsep boarding school yang memadukan kitab kuning salaf dan kurikulum modern. Sangat rekomended.",
    },
  ];

  const row2 = [
    {
      author_name: "Keluarga Bapak Ilham",
      profile_photo_url: "/img/user.png",
      rating: 5,
      text: "Sistem keamanannya bagus, anak tidak sembarangan bisa keluar gerbang. Lulusan dari sini banyak yang keterima di PTN ternama.",
    },
    {
      author_name: "Dewi Lestari",
      profile_photo_url: "/img/user.png",
      rating: 5,
      text: "Kajian rutinan malam Jumatnya sangat syahdu. Merasakan ketenangan yang luar biasa setiap kali menjenguk anak ke pondok.",
    },
    {
      author_name: "Muhammad Rizky",
      profile_photo_url: "/img/user.png",
      rating: 5,
      text: "Pesantren yang benar-benar menerapkan kedisiplinan tingkat tinggi tanpa kekerasan fisik.",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={i < rating ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        className={`w-3.5 h-3.5 ${i < rating ? "text-amber-400" : "text-quinary-300 dark:text-quinary-700"}`}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ));
  };

  // Komponen Anak untuk Kartu Testimoni agar kode tidak berulang
  const ReviewCard = ({ review }: { review: any }) => (
    <figure className="relative w-80 shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-primary-200/50 bg-primary-100/50 p-6 hover:border-primary/50 dark:hover:border-primary/50 transition-colors shadow-sm">
      <div className="flex flex-row items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 bg-primary-50">
          <Image
            src={review.profile_photo_url}
            alt={review.author_name}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold text-primary-950">
            {review.author_name}
          </figcaption>
          <div className="flex items-center gap-1 mt-0.5">
            {renderStars(review.rating)}
          </div>
        </div>
      </div>
      <blockquote className="mt-4 text-xs md:text-sm text-quinary-800/50 leading-relaxed">
        "{review.text}"
      </blockquote>
    </figure>
  );

  return (
    <section className="py-24 relative bg-primary-50 transition-colors duration-300">
      {/* Header Bagian */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">
          Sosial Proof
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-quinary-950 tracking-tight mb-4">
          Testimoni Wali Santri
        </h2>
      </div>

      {/* Area Marquee */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6">
        {/* Efek Gradasi (Fading) di Kiri dan Kanan agar muncul/hilangnya kartu terlihat halus */}
        <div className="absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-primary-50 to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-primary-50 to-transparent pointer-events-none"></div>

        {/* Baris 1 (Berjalan ke Kiri) */}
        <div className="group flex overflow-hidden [--gap:1.5rem] gap-(--gap) flex-row [--duration:40s]">
          {/* Kita menduplikasi map 3x agar barisan kartunya cukup panjang untuk loop tak terbatas */}
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="flex shrink-0 justify-around gap-(--gap) animate-marquee flex-row group-hover:[animation-play-state:paused]"
            >
              {row1.map((review, i) => (
                <ReviewCard key={i} review={review} />
              ))}
            </div>
          ))}
        </div>

        {/* Baris 2 (Berjalan ke Kanan -> perhatikan atribut [animation-direction:reverse]) */}
        <div className="group flex overflow-hidden [--gap:1.5rem] gap-(--gap) flex-row [--duration:45s]">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="flex shrink-0 justify-around gap-(--gap) animate-marquee-reverse flex-row group-hover:[animation-play-state:paused]"
            >
              {row2.map((review, i) => (
                <ReviewCard key={i} review={review} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

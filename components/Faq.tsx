"use client";

import { useState } from "react";

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("keuangan");
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  // Data Kategori Tab
  const tabs = [
    {
      id: "keuangan",
      labelDesktop: "Keuangan",
      labelMobile: "Keuangan",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
        </svg>
      ),
    },
    {
      id: "komunikasi",
      labelDesktop: "Komunikasi & Perizinan",
      labelMobile: "Komunikasi",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
        </svg>
      ),
    },
    {
      id: "fasilitas",
      labelDesktop: "Barang Bawaan & Fasilitas",
      labelMobile: "Barang",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path><path d="M8 10h8"></path><path d="M8 18h8"></path><path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"></path><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
        </svg>
      ),
    },
    {
      id: "kurikulum",
      labelDesktop: "Keseharian & Kurikulum",
      labelMobile: "Keseharian",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
          <path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
        </svg>
      ),
    },
  ];

  // Data Pertanyaan (Dibagi berdasarkan ID kategori tab)
  const faqs = [
    {
      id: 1,
      category: "keuangan",
      question: "Berapa kira-kira rincian biaya persis bulanan di pondok ini?",
      answer: "Biaya rutin bulanan santri berkisar Rp660.000 dengan rincian:\n1. Biaya pendidikan bulanan pondok pesantren dan madrasah, makan 3x sehari, dan utilitas sebesar Rp630.000.\n2. Tabungan wajib untuk persiapan pembiayaan kegiatan kelas akhir santri Rp30.000."
    },
    {
      id: 2,
      category: "keuangan",
      question: "Apa itu sistem SIU eL-Net dan bagaimana cara kerjanya?",
      answer: "Sistem SIU eL-Net adalah platform manajemen digital mandiri milik pesantren. Sistem ini memudahkan wali santri untuk memantau tagihan, mengelola akses WiFi santri, serta melakukan pembayaran otomatis dan *real-time* menggunakan QRIS dinamis melalui integrasi Midtrans."
    },
    {
      id: 3,
      category: "keuangan",
      question: "Berapa batasan uang saku (jajan) seminggu untuk anak?",
      answer: "Untuk melatih kesederhanaan, uang saku maksimal dijatah Rp50.000 hingga Rp70.000 per minggu yang dikelola melalui sistem tabungan pengurus atau koperasi pondok."
    },
    {
      id: 4,
      category: "komunikasi",
      question: "Apakah santri diizinkan membawa HP (Smartphone)?",
      answer: "Tidak diizinkan. Segala bentuk komunikasi dengan wali santri difasilitasi melalui telepon asrama yang telah disediakan pengurus pada jam-jam tertentu (biasanya hari Jumat atau Ahad)."
    },
    {
      id: 5,
      category: "fasilitas",
      question: "Berapa jumlah maksimal baju yang boleh dibawa?",
      answer: "Maksimal 6-7 stel pakaian (termasuk seragam) dan disarankan tidak membawa pakaian mahal atau berbahan sutra untuk menghindari kesenjangan sosial antar santri."
    },
    {
      id: 6,
      category: "kurikulum",
      question: "Apakah ada pemisahan kelas antara santri reguler dan tahfidz?",
      answer: "Ya, terdapat pemisahan fokus pada jam Diniyah. Santri program tahfidz akan difokuskan pada ziyadah dan murojaah, sedangkan reguler fokus pada kajian kitab kuning."
    },
  ];

  // Filter FAQ berdasarkan tab yang sedang aktif
  const filteredFaqs = faqs.filter(faq => faq.category === activeTab);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="faq" className="py-4 bg-primary-50 relative overflow-hidden transition-colors duration-300">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-100 border border-primary-200/50 rounded-full shadow-sm text-xs font-bold text-primary mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path>
            </svg>
            Pusat Bantuan
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-quinary-950 tracking-tight">
            Tanya Jawab (<span className="text-primary">FAQ</span>)
          </h2>
          <p className="text-sm text-quinary-600 max-w-lg mx-auto mt-3 leading-relaxed">
            Jawaban transparan atas pertanyaan yang paling sering diajukan oleh calon wali santri sebelum pendaftaran.
          </p>
        </div>

        {/* Tab Buttons Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setOpenFaq(null); // Tutup accordion saat pindah tab
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-primary-200/50 shadow-md shadow-primary/20 border border-primary-300/50"
                    : "bg-primary-100/50 border border-primary-200/50 hover:border-primary/40 hover:text-primary dark:hover:text-primary"
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.labelDesktop}</span>
                <span className="sm:hidden">{tab.labelMobile}</span>
              </button>
            );
          })}
        </div>

        {/* List Accordion FAQ */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              
              return (
                <div 
                  key={faq.id} 
                  className={`bg-primary-100/50 border rounded-xl overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? "border-primary-400/50 shadow-md shadow-primary/5" 
                      : "border-primary-200/50 hover:border-primary-300 dark:hover:border-quinary-600"
                  }`}
                >
                  <button 
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className={`text-sm font-bold transition-colors ${isOpen ? "text-primary-900" : "text-primary-700"}`}>
                      {faq.question}
                    </span>
                    <div className={`p-1 rounded-full shrink-0 transition-transform duration-300 ${
                      isOpen 
                        ? "bg-primary-100 dark:bg-primary-900/50 text-primary rotate-180" 
                        : "text-quinary-400 bg-quinary-50 dark:bg-quinary-800"
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </div>
                  </button>
                  
                  {/* Area Jawaban (Conditional Rendering) */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-0">
                        <div className="w-full h-px bg-primary-300/50 mb-4"></div>
                        <p className="text-primary-600 text-sm leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-sm text-quinary-500 py-6">
              Belum ada pertanyaan untuk kategori ini.
            </p>
          )}
        </div>

      </div>
    </section>
  );
}
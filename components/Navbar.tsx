"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return <header className="fixed w-full h-20" />;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary-50/60 backdrop-blur-md border-b border-primary-100 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* BAGIAN KIRI: Logo & Kaligrafi */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex flex-col">
              <Image
                src={
                  resolvedTheme === "dark"
                    ? "/img/el-teks-2.png"
                    : "/img/el-teks.png"
                }
                alt="Logo Komplek-eL"
                width={160}
                height={40}
                priority
                className="w-32"
              />
            </Link>
          </div>

          {/* BAGIAN KANAN: Menu, Search, Button PSB */}
          <div className="hidden md:flex items-center gap-8">
            {/* 2. MAIN MENU (DESKTOP) */}
            <nav className="hidden lg:flex items-center gap-6 font-medium text-quinary-800 text-sm xl:text-base">
              {/* Beranda */}
              <Link
                href="/"
                className="font-body hover:text-primary transition-colors"
              >
                Beranda
              </Link>

              {/* Profil (Dropdown) */}
              <div className="relative group py-2">
                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                  Profil
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 opacity-70 group-hover:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2 bg-primary-50/90 backdrop-blur-xl border border-primary-100 rounded-2xl shadow-xl flex flex-col">
                    <Link
                      href="/profil/sejarah"
                      className="px-4 py-2 hover:bg-primary-100/50 hover:text-primary transition-colors"
                    >
                      Sejarah dan Visi Misi
                    </Link>
                    <Link
                      href="/profil/struktur"
                      className="px-4 py-2 hover:bg-primary-100/50 hover:text-primary transition-colors"
                    >
                      Struktur Kepengurusan
                    </Link>
                    <Link
                      href="/profil/redaksi"
                      className="px-4 py-2 hover:bg-primary-100/50 hover:text-primary transition-colors"
                    >
                      Tim Redaksi
                    </Link>
                  </div>
                </div>
              </div>

              {/* Artikel (Dropdown) */}
              <div className="relative group py-2">
                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                  Artikel
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 opacity-70 group-hover:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2 bg-primary-50/90 backdrop-blur-xl border border-primary-100 rounded-2xl shadow-xl flex flex-col">
                    <Link
                      href="/artikel/opini"
                      className="px-4 py-2 hover:bg-primary-100/50 hover:text-primary transition-colors"
                    >
                      Opini
                    </Link>
                    <Link
                      href="/artikel/figur"
                      className="px-4 py-2 hover:bg-primary-100/50 hover:text-primary transition-colors"
                    >
                      Figur
                    </Link>
                    <Link
                      href="/artikel/kajian"
                      className="px-4 py-2 hover:bg-primary-100/50 hover:text-primary transition-colors"
                    >
                      Kajian Khusus
                    </Link>
                    <Link
                      href="/artikel/kalam"
                      className="px-4 py-2 hover:bg-primary-100/50 hover:text-primary transition-colors"
                    >
                      Kalam
                    </Link>
                    <Link
                      href="/artikel/resensi"
                      className="px-4 py-2 hover:bg-primary-100/50 hover:text-primary transition-colors"
                    >
                      Resensi
                    </Link>
                    <Link
                      href="/artikel/sastra"
                      className="px-4 py-2 hover:bg-primary-100/50 hover:text-primary transition-colors"
                    >
                      Sastra
                    </Link>
                  </div>
                </div>
              </div>

              {/* Berita (Dropdown) */}
              <div className="relative group py-2">
                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                  Berita
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 opacity-70 group-hover:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2 bg-primary-50/90 backdrop-blur-xl border border-primary-100 rounded-2xl shadow-xl flex flex-col">
                    <Link
                      href="/berita/kegiatan"
                      className="px-4 py-2 hover:bg-primary-100/50 hover:text-primary transition-colors"
                    >
                      Kegiatan
                    </Link>
                    <Link
                      href="/berita/peringatan"
                      className="px-4 py-2 hover:bg-primary-100/50 hover:text-primary transition-colors"
                    >
                      Peringatan
                    </Link>
                  </div>
                </div>
              </div>

              {/* Kontribusi */}
              <Link
                href="/kontribusi"
                className="hover:text-primary transition-colors"
              >
                Kontribusi
              </Link>
            </nav>

            {/* 3. RIGHT SECTION: Search, Theme, PSB */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Search Bar ala Aceternity UI */}
              <div className="group relative flex items-center bg-white/40 dark:bg-primary-100/10 backdrop-blur-md border border-primary-100 hover:border-primary-200 rounded-xl px-3 py-1.5 transition-all shadow-sm hover:shadow-md cursor-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-quinary-800/70"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Cari..."
                  className="bg-transparent border-none outline-none text-sm text-quinary-950 placeholder:text-quinary-800/50 w-24 focus:w-40 xl:w-32 xl:focus:w-48 px-2 transition-all duration-300"
                />
                <kbd className="hidden xl:inline-flex items-center gap-0.5 bg-primary-100/50 border border-primary-200 rounded px-1.5 text-[10px] font-semibold text-quinary-700 ml-1">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </div>

              {/* Tombol Toggle Theme */}
              <button
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                className="p-2 text-quinary-800 hover:text-primary transition-colors rounded-full hover:bg-primary-100/50"
                aria-label="Toggle Theme"
              >
                {resolvedTheme === "dark" ? "☀️" : "🌙"}
              </button>

              {/* Tombol Daftar PSB */}
              <Link
                href="/psb"
                className="bg-primary text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-lg shadow-primary/40 hover:shadow-primary/60 hover:bg-primary-700 transition-all duration-200"
              >
                Daftar PSB
              </Link>
            </div>
          </div>

          {/* MOBILE MENU BUTTON (Hamburger) */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="p-2 text-quinary-800"
            >
              {resolvedTheme === "dark" ? "☀️" : "🌙"}
            </button>
            <button className="text-quinary-950">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

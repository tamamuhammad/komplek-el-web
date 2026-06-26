// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

import { createClient } from "@/utils/supabase/server";

// Perhatikan bahwa fungsi komponen ini sekarang menggunakan 'async'
export default async function Beranda() {
  // 1. Inisialisasi klien Supabase versi Server
  const supabase = await createClient();

  // 2. Tarik data dari tabel 'posts'
  // gunakan destructuring untuk mendapatkan data (namai dengan posts) dan error dari query Supabase
  // format response supabase = { data: .., error: null, count: null, status: 200, statusText: 'OK' )
  const { data: posts, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  // Penanganan jika ada error saat query
  if (error) {
    return (
      <div className="p-4 text-red-500">
        Gagal memuat artikel: {error.message}
      </div>
    );
  }

  // 3. Render HTML
  return (
    <main className="max-w-4xl mx-auto p-8 font-sans">
      <h1 className="text-3xl font-bold mb-8 text-green-800">
        Kabar Terbaru Komplek-eL
      </h1>

      <div className="grid gap-6">
        {posts?.map((post) => (
          <article
            key={post.id}
            className="border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
              {post.category}
            </span>
            <h2 className="text-xl font-bold mt-2 mb-3">{post.title}</h2>
            <p className="text-gray-600 line-clamp-3">{post.content}</p>
          </article>
        ))}

        {/* State Kosong jika database masih nihil */}
        {posts?.length === 0 && (
          <p className="text-gray-500 italic">
            Belum ada artikel yang diterbitkan.
          </p>
        )}
      </div>
    </main>
  );
}

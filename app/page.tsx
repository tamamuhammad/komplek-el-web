import Hero from "@/components/Hero";
import { createClient } from "@/utils/supabase/server";

// Perhatikan bahwa fungsi komponen ini sekarang menggunakan 'async'
export default async function Beranda() {
  // 1. Inisialisasi klien Supabase versi Server
  // const supabase = await createClient();

  // 2. Tarik data dari tabel 'posts'
  // gunakan destructuring untuk mendapatkan data (namai dengan posts) dan error dari query Supabase
  // format response supabase = { data: .., error: null, count: null, status: 200, statusText: 'OK' )
  // const { data: posts, error } = await supabase
  //   .from("posts")
  //   .select("*")
  //   .order("created_at", { ascending: false });

  // Penanganan jika ada error saat query
  // if (error) {
  //   return (
  //     <div className="p-4 text-red-500">
  //       Gagal memuat artikel: {error.message}
  //     </div>
  //   );
  // }

  let posts = [];

  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
    const response = await fetch(`${apiUrl}/api/posts`, {
      // Mematikan cache agar data selalu baru setiap kali halaman direfresh (mode development)
      cache: "no-store",
    });

    if (response.ok) {
      const resData = await response.json();
      posts = resData.data;
    } else {
      console.error("API merespons dengan status:", response.status);
    }
  } catch (error) {
    // Jika Vercel gagal menghubungi server (misal karena masih localhost)
    console.error("Gagal terhubung ke API Laravel:", error);
  }

  // 3. Render HTML
  // return (
  //   <main className="max-w-4xl mx-auto p-8 font-sans">
  //     <h1 className="text-3xl font-bold mb-8 text-green-800">
  //       Kabar Terbaru Komplek-eL
  //     </h1>

  //     <div className="grid gap-6">
  //       {posts?.map((post) => (
  //         <article
  //           key={post.id}
  //           className="border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
  //         >
  //           <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
  //             {post.category}
  //           </span>
  //           <h2 className="text-xl font-bold mt-2 mb-3">{post.title}</h2>
  //           <p className="text-gray-600 line-clamp-3">{post.content}</p>
  //         </article>
  //       ))}

  //       {/* State Kosong jika database masih nihil */}
  //       {posts?.length === 0 && (
  //         <p className="text-gray-500 italic">
  //           Belum ada artikel yang diterbitkan.
  //         </p>
  //       )}
  //     </div>
  //   </main>
  // );

  return (
    <>
      <Hero />
      <main className="max-w-4xl mx-auto p-8 font-sans">
        <h1 className="font-heading text-4xl font-black mb-10 text-primary-900">
          Kabar Terbaru Komplek-eL
        </h1>

        <div className="grid gap-8">
          {posts?.map((post: any) => (
            <article
              key={post.id}
              className="group border border-gray-200 p-7 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
            >
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 block">
                {post.category}
              </span>
              <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-500 leading-relaxed line-clamp-3 mb-4">
                {post.excerpt}
              </p>
              <div className="text-sm text-gray-400 font-medium">
                {new Date(post.published_at).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </article>
          ))}

          {posts?.length === 0 && (
            <p className="text-gray-500 italic text-center py-10">
              Belum ada artikel yang diterbitkan.
            </p>
          )}
        </div>
      </main>
    </>
  );
}

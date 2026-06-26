import { type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

// Middleware ini akan dijalankan untuk setiap request yang masuk ke server
export async function middleware(request: NextRequest) {
  // Panggil fungsi yang sudah kita buat tadi
  return await updateSession(request);
}

export const config = {
  // "Jalankan middleware ini di SEMUA rute, KECUALI file statis (gambar, css, js)"
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

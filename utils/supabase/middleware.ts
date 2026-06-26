import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  // Membuat response awal
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll() // Mengambil cookies dari request
        },
        setAll(cookiesToSet) { // Fungsi ini akan dipanggil oleh Supabase ketika perlu memperbarui cookie sesi
          // Update request cookies agar server/client Supabase bisa menggunakan cookie yang sudah diperbarui
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          
          // Update response cookies setelah kita perbarui di request agar dikirim ke client
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Panggil metode getUser untuk mengecek token kadaluarsa dan trigger setAll jika perlu memperbarui sesi karena token sudah kadaluarsa
  await supabase.auth.getUser()

  return supabaseResponse
}
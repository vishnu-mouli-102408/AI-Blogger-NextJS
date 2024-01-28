/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pkezppeokxkidvmwqrpu.supabase.co'
      }
    ]
  }
}

module.exports = nextConfig

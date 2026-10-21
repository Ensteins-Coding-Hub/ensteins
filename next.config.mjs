/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "ensteins-club.vercel.app",
          },
        ],
        destination: "https://ensteins-club.vercel.app/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

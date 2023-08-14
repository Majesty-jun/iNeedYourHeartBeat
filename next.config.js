/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination:
          "http://apis.data.go.kr/B552657/AEDInfoInqireService:path*",
      },
    ];
  },
};

module.exports = nextConfig;

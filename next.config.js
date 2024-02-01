/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/feedback",
        destination:
          "https://github.com/themanafov/nextjs-dashboard-template/issues",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/themanafov/nextjs-dashboard-template",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: '"picsum.photos"',
      },
    ],
  },
};

module.exports = nextConfig;

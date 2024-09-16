/** @type {import('next').NextConfig} */
const nextConfig = {
    // output : 'export',
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'firebasestorage.googleapis.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
};

export default nextConfig;

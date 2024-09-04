/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'res.cloudinary.com',  // Add your domains here
        'firebasestorage.googleapis.com',   // Add more domains as needed
      ],
      },
};

export default nextConfig;

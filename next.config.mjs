/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['images.unsplash.com', 'cloudfront-us-east-2.images.arcpublishing.com'],
    },
};

export default nextConfig;

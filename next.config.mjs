/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nextjs-demo.tailadmin.com'
            }
        ]
    }
};

export default nextConfig;

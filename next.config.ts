import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Optimize production builds
  compress: true,
  // Enable PoweredByHeader removal for security
  poweredByHeader: false,
  // Configure image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ryzmdn.wordpress.com",
      },
      {
        protocol: "https",
        hostname: "www.svgrepo.com",
      },
    ],
    // Optimize images for Web Core Vitals
    formats: ["image/avif", "image/webp"],
  },
  // Redirect rules for SEO
  async redirects() {
    return [
      // Redirect old URLs if needed
      {
        source: "/blog",
        destination: "/blog/category/all",
        permanent: true,
      },
    ];
  },
  // Custom headers for SEO and security
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // SEO Headers
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      // Cache headers for static assets
      {
        source: "/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache headers for images
      {
        source: "/:path*.(jpg|jpeg|png|gif|webp|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

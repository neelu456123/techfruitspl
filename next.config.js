module.exports = {
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true, // Enable gzip compression for production
  
    images: {
      remotePatterns: [
        {
          protocol: 'https', 
          hostname: 'techfruitspl.com',
          
        },
      ],
    },
  
    
    // Security headers
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block',
            },
          ],
        },
      ];
    },
  
    
  };
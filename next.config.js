/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ['www.mdpi.com','imageio.forbes.com','resources.stuff.co.nz','cdn.ghanaweb.com'],
    // domains : ['img.particlenews.com','cdn.dnaindia.com', ]
    domains: ['jdsupra-static.s3.amazonaws.com','www.cnet.com']
  },

}

module.exports = nextConfig

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig

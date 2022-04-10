const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "/napolitain.github.io/" : "",
  images: {
    loader: 'imgix',
    path: '',
  },
}

module.exports = nextConfig

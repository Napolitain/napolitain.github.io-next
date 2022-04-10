const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "/napolitain.github.io/" : "",
}

module.exports = nextConfig

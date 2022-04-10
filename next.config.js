const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "/lab34.github.io/" : "",
}

module.exports = nextConfig

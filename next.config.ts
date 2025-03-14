import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
	/* config options here */
	output: "standalone",
	basePath: "", // Changed from isProd ? "/" : "" to just ""
	reactStrictMode: true,
	images: {
		unoptimized: true,
		loader: "custom",
		loaderFile: "./src/utils/imageLoader.ts",
		domains: ["paranoma.manportfolio.id.vn", "ui-avatars.com"],
	},
};

export default nextConfig;

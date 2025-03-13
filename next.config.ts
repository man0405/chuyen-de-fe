import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	output: "standalone", // <=== enables static exports
	basePath: "/",
	reactStrictMode: true,
	images: {
		loader: "custom",
		loaderFile: "./src/utils/imageLoader.ts",
		domains: ["paranoma.manportfolio.id.vn", "ui-avatars.com"],
	},
};

export default nextConfig;

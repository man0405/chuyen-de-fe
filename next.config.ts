import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "standalone",
	basePath: "",
	reactStrictMode: true,
	images: {
		unoptimized: true,
		loader: "custom",
		loaderFile: "./src/utils/imageLoader.ts",
		domains: [
			"paranoma.manportfolio.id.vn",
			"ui-avatars.com",
			"images.unsplash.com",
		],
	},
};

export default nextConfig;

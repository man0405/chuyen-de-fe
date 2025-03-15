import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
	/* config options here */
	output: "standalone",
	basePath: "", // Changed from isProd ? "/" : "" to just ""
	reactStrictMode: true,
	images: {
		loader: "default",
		unoptimized: true,
		domains: ["paranoma.manportfolio.id.vn", "ui-avatars.com"],
	},
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	output: "export", // <=== enables static exports
	basePath: "/",
	reactStrictMode: true,
	images: {
		domains: ["ui-avatars.com"],
	},
};

export default nextConfig;

import { NextResponse } from "next/server";
import { Client } from "minio-js"; // Import từ minio-js
import { Readable } from "stream";

const minioClient = new Client({
	endPoint: process.env.MINIO_ENDPOINT as string,
	useSSL: true,
	accessKey: process.env.MINIO_ACCESS_KEY as string,
	secretKey: process.env.MINIO_SECRET_KEY as string,
});

const bucketName = "house3D";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { files } = body;

		if (!files || !files.length) {
			return new NextResponse("No files to upload", { status: 400 });
		}

		const uploadResults = await Promise.all(
			files.map(async (file: any) => {
				const objectName = file.originalFileName;
				const fileStream = file.stream();
				const fileSize = file.size;
				const metaData = { "Content-Type": file.type };

				try {
					await minioClient.putObject(
						bucketName,
						objectName,
						fileStream,
						fileSize,
						metaData
					);
					return { fileName: objectName, status: "success" };
				} catch (err: any) {
					console.error("Error uploading file:", err);
					return {
						fileName: objectName,
						status: "failure",
						error: err.message,
					};
				}
			})
		);

		return new NextResponse(JSON.stringify(uploadResults), { status: 200 });
	} catch (error) {
		console.error("Error:", error);
		return new NextResponse("Internal Server Error", { status: 500 });
	}
}

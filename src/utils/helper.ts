export const fetchPresignedUrl = async (fileName: any) => {
	try {
		if (fileName.startsWith("/house-image")) {
			fileName = fileName.substring(12);
		}
		const response = await fetch(`/api/minio?fileName=${fileName}`);
		const data = await response.json();

		if (response.ok) {
			const presignedUrl = data.url;
			return presignedUrl;
		} else {
			console.error("Failed to fetch presigned URL:", data);
		}
	} catch (error) {
		console.error("Error fetching presigned URL:", error);
	}
};

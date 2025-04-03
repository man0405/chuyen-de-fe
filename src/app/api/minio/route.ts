import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import MinioService from "@/utils/services/MinioService";

export async function POST(req: Request) {
  try {
    const formData = await req.formData(); // Sử dụng formData thay vì json
    const file = formData.get("file");

    // Kiểm tra nếu file có tồn tại và là instance của Blob
    if (!(file instanceof Blob)) {
      return new NextResponse("Uploaded content is not a valid file", {
        status: 400,
      });
    }

    // Kiểm tra các thuộc tính size và type
    if (typeof file.size !== "number" || typeof file.type !== "string") {
      return new NextResponse("Uploaded content is not a valid file", {
        status: 400,
      });
    }

    const fileName = nanoid(12);
    const fileStream = file.stream(); // Đảm bảo rằng bạn xử lý đúng kiểu stream
    const fileSize = file.size;
    const metaData = { "Content-Type": file.type };

    // Upload file lên MinIO bằng MinioService
    const uploadResult = await MinioService.uploadFile(
      fileName,
      fileStream.toString(),
      fileSize,
      metaData
    );

    return new NextResponse(
      JSON.stringify({ fileNameInBucket: fileName, uploadResult }),
      { status: 200 }
    );
  } catch (error) {
    console.error({ error });
    return new NextResponse("Internal error", { status: 500 });
  }
}
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const fileName = searchParams.get("fileName");

    if (!fileName) {
      return new NextResponse("File name is required", { status: 400 });
    }

    const presignedUrl = await MinioService.presignedGetUrl(fileName);

    return new NextResponse(JSON.stringify({ url: presignedUrl }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error generating presigned URL:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

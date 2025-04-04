import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import MinioService from "@/utils/services/MinioService";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!(file instanceof Blob)) {
      return new NextResponse("Uploaded content is not a valid file", {
        status: 400,
      });
    }

    if (typeof file.size !== "number" || typeof file.type !== "string") {
      return new NextResponse("Uploaded content is not a valid file", {
        status: 400,
      });
    }

    const fileName = file.name;
    const fileStream = file.stream();
    const fileSize = file.size;
    const metaData = { "Content-Type": file.type };

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

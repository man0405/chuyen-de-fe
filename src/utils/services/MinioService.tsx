import { Client } from "minio";
import { Readable } from "stream";

class MinioService {
  private minioClient: Client;
  public bucketName: string = "house3d";
  constructor() {
    this.minioClient = new Client({
      endPoint: "console-minio.manportfolio.id.vn" as string,
      useSSL: true,
      accessKey: process.env.MINIO_ACCESS_KEY as string,
      secretKey: process.env.MINIO_SECRET_KEY as string,
    });
  }

  async uploadFile(
    objectName: string,
    fileStream: Buffer | Readable | string,
    fileSize: number,
    metaData: Record<string, string> = {}
  ): Promise<any> {
    return this.minioClient.putObject(
      this.bucketName,
      objectName,
      fileStream,
      fileSize,
      metaData
    );
  }

  async getFile(objectName: string): Promise<Readable> {
    return this.minioClient.getObject(this.bucketName, objectName);
  }

  async deleteFile(objectName: string): Promise<void> {
    return this.minioClient.removeObject(this.bucketName, objectName);
  }
  async presignedGetUrl(fileName: string): Promise<string> {
    try {
      const presignedUrl = await this.minioClient.presignedGetObject(
        this.bucketName,
        fileName,
        24 * 60 * 60
      );
      return presignedUrl;
    } catch (error: any) {
      throw new Error("Error generating presigned URL: " + error.message);
    }
  }
}

export default new MinioService();

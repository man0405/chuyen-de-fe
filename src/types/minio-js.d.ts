declare module "minio-js" {
  export class Client {
    constructor(options: {
      endPoint: string;
      useSSL: boolean;
      accessKey: string;
      secretKey: string;
    });

    putObject(
      bucketName: string,
      objectName: string,
      body: Buffer | ReadableStream | string,
      size: number,
      metaData: Record<string, string>
    ): Promise<void>;

    getObject(bucketName: string, objectName: string): Promise<ReadableStream>;

    removeObject(bucketName: string, objectName: string): Promise<void>;
  }
}

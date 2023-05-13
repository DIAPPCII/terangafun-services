import { S3Client } from "@aws-sdk/client-s3";

const client = new S3Client({ region: "REGION" });

export class S3Service {
  public putObject(bucket: string, key: string, body: string, tags: string[]) {
    console.log(bucket);
  }
}

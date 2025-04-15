import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {PutObjectCommand, S3Client} from '@aws-sdk/client-s3'
import { fileURLToPath } from 'url';
@Injectable()
export class UploadService {
    private readonly s3Client : S3Client
    constructor(private  readonly configService : ConfigService){
        this.s3Client =  new S3Client({
        region: this.configService.getOrThrow('AWS_S3_REGION'),
        });
    }
    async upload(fileName:string,file:Buffer){
        await this.s3Client.send(
            new PutObjectCommand({
                Bucket : 'nestjs-uploader',
                Key: fileName,
                Body:file,
            })
        )
    }
}

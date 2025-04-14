import { Controller, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile(
        //want some validation for file like size,type
        new ParseFilePipe({
            validators : [
                new MaxFileSizeValidator({ maxSize : 6000000}),
                new FileTypeValidator({ fileType: 'image/png' }),
            ]
        })
    ) file:Express.Multer.File){
        console.log(file);
    }
}


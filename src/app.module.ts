import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadController } from './upload/upload.controller';
import { UploadService } from './upload/upload.service';
import { UploadModule } from './upload/upload.module';
import {ConfigModule} from '@nestjs/config'
@Module({
  imports: [UploadModule,
    ConfigModule.forRoot({ //this is to use .env file everywhere inside the code
      isGlobal:true
    })],
  controllers: [AppController, UploadController],
  providers: [AppService, UploadService],
})
export class AppModule {}

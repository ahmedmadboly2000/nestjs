import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppController } from "./app.controller";

async function bootstrap() {
  AppController
  const app = await NestFactory.create(AppModule);
  
  await app.listen(3000,()=>{console.log("server is running on port 3000.....");
  });
}
bootstrap();

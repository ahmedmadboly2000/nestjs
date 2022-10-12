import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppController } from "./app.controller";
import { AllExceptionsFilter } from '../src/err/excptionFilter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  AppController
  const app = await NestFactory.create(AppModule);
  // const { httpAdapter } = app.get(HttpAdapterHost);
  // app.useGlobalFilters(new QueryErrorFilter(httpAdapter));
  
  
  app.useGlobalPipes(new ValidationPipe());
  
  
  await app.listen(3000,()=>{console.log("server is running on port 3000.....");
  });
}
bootstrap();

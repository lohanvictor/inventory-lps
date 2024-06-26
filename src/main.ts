import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.API_PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port);
}
bootstrap();

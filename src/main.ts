import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookies from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookies('Razi9nw4sUMzdniBO86mIXGrMUj3mwWs'));
  await app.listen(3000);
}
bootstrap();

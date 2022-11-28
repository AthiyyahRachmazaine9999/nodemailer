import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();






// {
//   "$schema": "https://json.schemastore.org/nest-cli",
//   "collection": "@nestjs/schematics",
//   "sourceRoot": "src"
// }






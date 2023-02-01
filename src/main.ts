import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { MainModule } from './MainModule';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  setTemplateEngine(app);
  await app.listen(3000);
}
bootstrap();

function setTemplateEngine(app) {
  app.useStaticAssets(join(__dirname, '..', 'template/public'));
  app.setBaseViewsDir(join(__dirname, '..', 'template/views'));
  app.setViewEngine('hbs');
}

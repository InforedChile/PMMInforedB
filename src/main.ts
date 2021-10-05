import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  )

  const config = new DocumentBuilder()
    .setTitle('Backend Directorio Digital Interactivo')
    .setDescription('Descripcion de API')
    .setVersion('1.3')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document,{
    explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDuration:true,
    },
  });
 

  await app.listen(3000);
}
bootstrap();

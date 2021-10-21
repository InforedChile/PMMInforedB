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

  app.enableCors({
    origin: '*',
  })

  const config = new DocumentBuilder()
    .setTitle('Backend Directorio Digital Interactivo')
    .setDescription('Directorio BackEnd creado para la empresa InforedChile en el marco del Programa de Memorias Multidiciplinarias')
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
 // process.env.PORT ||

  await app.listen( process.env.PORT || 4000);
}
bootstrap();

import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: 'smtps://atya89999@gmail.com:34061A45C568E8DEF586738C55B986F98BCF@smtp.elasticemail.com',
        port: 2525 ,
        defaults: {
          from: '"nest-modules" <modules@nestjs.com>',
        },
        template: {
          dir: process.cwd() + '/template/',
        adapter: new HandlebarsAdapter(), // or new PugAdapter()
        options: {
          strict: true,
          },
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';

// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [MongooseModule.forRoot('mongodb://localhost/demo')],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
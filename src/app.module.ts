import { Module } from '@nestjs/common';
import { TodoModule } from './modules/todo/todo.module';
import { QuoteModule } from './modules/quote/quote.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [
      TodoModule, 
      QuoteModule,
      MongooseModule.forRoot(config.mongoURI)
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}

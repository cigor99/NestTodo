import { Module } from '@nestjs/common';
import { QuoteController } from './controller/qoute/qoute.controller';
import { QuoteService } from './service/quote/quote.service';

@Module({
  controllers: [QuoteController],
  providers: [QuoteService]
})
export class QuoteModule {}

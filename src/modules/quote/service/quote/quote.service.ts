import { Injectable } from '@nestjs/common';
import * as data from '../../../quote/quotes.json';

@Injectable()
export class QuoteService {

    getQuote() {
        const quotes = data['quotes']

        const index = Math.floor(Math.random() * quotes.length)

        return quotes[index]
    }
}

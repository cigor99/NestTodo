import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import * as moment from 'moment';

@Injectable()
export class ParseDatePipe implements PipeTransform<number, Date> {
  transform(value: number, metadata: ArgumentMetadata): Date {
    const result = moment(value);
    
    if(!result.isValid){
        throw new BadRequestException('Incorrect Date format');
    }

    return result.toDate();
  }
}

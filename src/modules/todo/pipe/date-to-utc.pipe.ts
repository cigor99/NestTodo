import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import * as moment from 'moment';

@Injectable()
export class DateToUtcPipe implements PipeTransform<Date, Date> {
  transform(value: Date, metadata: ArgumentMetadata): Date {
    const result = moment.utc(value);

    if(!result.isValid()){
        throw new BadRequestException('Invalid date format');
    }

    return result.startOf('day').toDate();
  }
}

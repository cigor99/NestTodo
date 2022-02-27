import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TodoDTO } from '../dto/todo.dto';
import { DateToUtcPipe } from '../pipe/date-to-utc.pipe';
import { ParseDatePipe } from '../pipe/parse-date.pipe';
import { TodoService } from '../service/todo.service';

@Controller('api/todo')
export class TodoController {

    constructor(private readonly todoService: TodoService){}

    @Get(':date')
    async getAllByDate(@Param('date', ParseIntPipe, ParseDatePipe, DateToUtcPipe) date: Date): Promise<TodoDTO[]> {        
        return await this.todoService.getAllByDate(date);
    }

    @Post()
    @HttpCode(201)
    async create(@Body() dto: TodoDTO): Promise<TodoDTO> {
        return await this.todoService.create(dto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return await this.todoService.delete(id);
    }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { TodoDTO } from '../dto/todo.dto';
import { toDTO, toEntity } from '../mapper/todo.mapper';
import { Todo } from '../model/todo.model';
import { TodoRepository } from '../repository/todo.repository';

@Injectable()
export class TodoService {
    constructor(private readonly todoRepository: TodoRepository){}

    async getAllByDate(date: Date): Promise<TodoDTO[]> {
        const result: Todo[] = await this.todoRepository.getAllByDate(date);

        return result.map(e => (toDTO(e)))
    }

    async create(dto: TodoDTO): Promise<TodoDTO> {
        const result = await this.todoRepository.create(toEntity(dto));

        return toDTO(result);
    }

    async delete(id: string): Promise<void> {
        const found = await this.todoRepository.getById(id);

        if(!found) {
            throw new NotFoundException(`Todo with id: ${id} not found`)
        }

        await this.todoRepository.delete(id);

        return;
    }
}

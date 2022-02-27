import { TodoDTO } from '../dto/todo.dto';
import { Todo } from '../model/todo.model';

export function toDTO(entity: Todo){
    return {
        id: entity.id,
        text: entity.text,
        createdAt: entity.createdAt,
        updatedAt: entity.updatedAt
    }
}

export function toEntity(dto: TodoDTO){
    return {
        id: dto.id,
        text: dto.text,
        createdAt: dto.createdAt,
        updatedAt: dto.updatedAt
    }
}
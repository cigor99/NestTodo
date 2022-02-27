import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoController } from './controller/todo.controller';
import { TodoRepository } from './repository/todo.repository';
import { TodoSchema } from './schema/todo.schema';
import { TodoService } from './service/todo.service';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Todo', schema: TodoSchema}])],
    controllers: [TodoController],
    providers: [
        TodoService, 
        TodoRepository,
    ]
})
export class TodoModule {}
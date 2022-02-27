import { Injectable } from '@nestjs/common';
import * as moment from 'moment';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from '../model/todo.model';
import { Model } from 'mongoose'

@Injectable()
export class TodoRepository {

    constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

    async getAllByDate(date: Date): Promise<Todo[]> {
        const todos = await this.todoModel.find({
            createdAt: {
                $gte: date,
                $lte: moment.utc(date).endOf('day').toDate()
            }
        });

        return todos;
    }

    async getById(id: string): Promise<Todo> {
        return this.todoModel.findById(id);
    }

    async create(entity: Todo): Promise<Todo> {
        const created = new this.todoModel(entity);

        return await created.save();
    }

    async delete(id: string): Promise<void> {
        return await this.todoModel.findByIdAndRemove(id);
    }
}
import { Component } from '@angular/core'
import { Todo } from './todo'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'todo-form',
    standalone: true,
    templateUrl: './todos.component.html',
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class TodosComponent {
    todo: Todo = new Todo('', false);
    todos: Todo[] = [];

    adicionarTodo(){
        this.todos.push(this.todo);
        this.todo = new Todo('', false);
    }

    finalizarTodo(todo: Todo){
        todo.done = true;
    }
}

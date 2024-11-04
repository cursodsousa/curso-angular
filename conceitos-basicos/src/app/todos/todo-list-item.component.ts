import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'todo-list-item',
    templateUrl: './todo-list-item.component.html'
})
export class TodoListItem {
    taskTitle: string = '';
    isComplete: boolean = false;

    completeTask() {
        this.isComplete = true;
    }

    updateTitle(newTitle: string){
        this.taskTitle = newTitle;
    }
}
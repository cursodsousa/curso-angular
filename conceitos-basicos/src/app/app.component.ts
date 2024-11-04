import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { CrudComponent } from './crud/crud.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent, CrudComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'conceitos-basicos';
}

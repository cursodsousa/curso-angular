import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar'

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule
  ],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { LayoutProps } from './layout.model';

@Component({
  selector: 'app-layout',
  standalone: false,
  
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  titulo: string = '';
  subTitulo: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit() : void {
    this.router.events
      .pipe(
        filter(() => this.activatedRoute.firstChild !== null),
        map(() => this.getChildTitle())
      ).subscribe( (props: LayoutProps) => {
        this.titulo = props.titulo;
        this.subTitulo = props.subTitulo;
      })
  }

  getChildTitle() : LayoutProps {
    let child = this.activatedRoute.firstChild;
    while(child?.firstChild){
      child = child.firstChild;
    }
    return child?.snapshot.data as LayoutProps || { titulo: '', subTitulo: '' };
  }
}

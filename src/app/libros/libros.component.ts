import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
items:any=[
  {
    id:1,
    nombre:"libro1",
    autor:"marcosr",
    publicacion:"1980"
  },
  {
    id:2,
    nombre:"libro1",
    autor:"marcosr",
    publicacion:"1980"
  },
  {
    id:3,
    nombre:"libro1",
    autor:"marcosr",
    publicacion:"1980"
  },
];
  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  abriredicion(item){
    this.router.navigate (['/editarlibros/',item]);

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editarlibros',
  templateUrl: './editarlibros.component.html',
  styleUrls: ['./editarlibros.component.css']
})
export class EditarlibrosComponent implements OnInit {

  constructor(private mirouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.mirouter.params.subscribe(data=>{
      if(data['id']!=null){
        console.log(data)
      }
  });
  
  }

}

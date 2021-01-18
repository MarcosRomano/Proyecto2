import { Component } from '@angular/core';
import { Action, Actor, Reducer } from './dependencias';
import { createStore, Store } from 'redux';
import { Contadorreducer } from './Contador.reducer';
import { IncrementarAction } from './Contador.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
    title = 'Proyecto2';

  angular:string='vamos largando'

   html:boolean=true;
  
   lista:string[]=["autos","motos","camiones","bus","tractores","aviones"]
   
    
angulares(){
  console.log('holamunda')
}
 



 public actores: Actor[];
  constructor() {
    this.actores = [
      {
         actor_name: 'Peter Dinklage',
         character_name: 'Tyrion Lannister',
         gender: 'Male',
         status: 'Alive'
      },
      {
         actor_name: 'Sean Bean',
         character_name: 'Ned Stark',
         gender: 'Male',
         status: 'Dead'
      },
      {
         actor_name: 'Emilia Clark',
         character_name: 'Khaleesi',
         gender: 'Female',
         status: 'Alive'
      },
      {
         actor_name: 'Catelyn Stark',
         character_name: 'Michelle Fairley',
         gender: 'Female',
         status: 'Dead'
      }
    ];
  }
} 

const store:Store = createStore(Contadorreducer);

store.subscribe(()=>{
console.log('Subs:',store.getState());
});

store.dispatch(IncrementarAction);













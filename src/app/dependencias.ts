export class Actor{  
    actor_name:string;
    character_name: string;
    gender: string;
    status: string;

}
 export interface Action{
    type:string,
    payload?:any;
  }

  export interface Reducer<i>{
      (state:i,action:Action):i
  }
import {Component,Input} from '@angular/core';

@Component({
  selector:'app-body-login',
  templateUrl:'./body-login.component.html',
  styleUrls:['./body-login.component.css']
})

export class BodyLoginComponent{
    userName:string;
    @Input() login: Function; 
    



 
}

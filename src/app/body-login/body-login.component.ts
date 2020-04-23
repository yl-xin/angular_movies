import {Component,Input} from '@angular/core';

@Component({
  selector:'app-body-login',
  templateUrl:'./body-login.component.html',
})

export class BodyLoginComponent{
    userName:string;
    isLogin:boolean=false;
    @Input() login: Function; 
    



 
}

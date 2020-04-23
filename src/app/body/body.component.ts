import {Component} from '@angular/core';

@Component({
  selector:'app-body',
  templateUrl:'./body.component.html'
})

export class BodyComponent{
  username:string = 'YL';
  isLogin:boolean=false;
  login(){
    this.isLogin =!this.isLogin;
  }
 
}

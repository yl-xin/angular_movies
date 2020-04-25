import {Component,ViewChild} from '@angular/core';
import {BodyLoginComponent} from '../body-login/body-login.component';

@Component({
  selector:'app-body',
  templateUrl:'./body.component.html'
})


export class BodyComponent{
  @ViewChild(BodyLoginComponent)bodyLoginComponent:BodyLoginComponent;
  username:string="";
  ngAfterViewInit(){
    // console.log(this.bodyLoginComponent);
    this.username=this.bodyLoginComponent.userName;
  }
  isLogin:boolean=false;
  login(){
    this.isLogin =!this.isLogin;
    this.username=this.bodyLoginComponent.userName;
  }
  logout(){
    this.isLogin =!this.isLogin;
  }
 
}

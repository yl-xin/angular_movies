import {Component,Input} from '@angular/core';

@Component({
  selector:'app-body-nav',
  templateUrl:'./body-nav.component.html'
})

export class BodyNavComponent{
    userName:string;
    @Input() logout:Function;
    @Input() isLogin;
}

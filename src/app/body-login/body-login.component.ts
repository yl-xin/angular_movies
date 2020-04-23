import {Component,Input} from '@angular/core';

@Component({
  selector:'app-body-login',
  templateUrl:'./body-login.component.html',
  styles: ['div { background-color:lightyellow; }']
})

export class BodyLoginComponent{
    @Input() userName:string;



 
}

import {Component,Input} from '@angular/core';

@Component({
  selector:'app-body-welcome',
  templateUrl:'./body-welcome.component.html',
  styles: ['div { background-color:lightblue; }']
})

export class BodyWelcomeComponent{
    @Input() userName:string;



 
}

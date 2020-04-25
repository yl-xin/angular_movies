import {Component,Input} from '@angular/core';

@Component({
  selector:'app-body-welcome',
  templateUrl:'./body-welcome.component.html',
})

export class BodyWelcomeComponent{
    @Input() userName:string;



 
}

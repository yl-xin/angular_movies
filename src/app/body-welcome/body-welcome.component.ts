import {Component,Input} from '@angular/core';

@Component({
  selector:'app-body-welcome',
  templateUrl:'./body-welcome.component.html',
})

export class BodyWelcomeComponent{
    @Input() userName:string;
    welcomeDetail:string ="This dynamic website recommends our hand-picked highly rated awesome movies! I hope you have some quality time with your family during social distancing by watching our hand-picked awesome movies.";



 
}

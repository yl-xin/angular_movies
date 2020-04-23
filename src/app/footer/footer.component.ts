import {Component} from '@angular/core';

@Component({
  selector:'app-footer',
  template:`
  <div class="text-center">
    <p> {{title}}  &copy; Copyright 2020</p>
  </div>
  `,
  styles: ['div { background-color:lightblue; }']
})

export class FooterComponent{
  title:string='YL Xin';

}

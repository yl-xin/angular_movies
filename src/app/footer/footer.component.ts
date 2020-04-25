import {Component} from '@angular/core';

@Component({
  selector:'app-footer',
  template:`
  <div class="bg-danger  d-flex align-items-center justify-content-center text-white ">
    <p> {{title}}  &copy; Copyright 2020</p>
  </div>
  `,
  styles: ['div { height:80px; }']
})

export class FooterComponent{
  title:string='YL Xin';

}

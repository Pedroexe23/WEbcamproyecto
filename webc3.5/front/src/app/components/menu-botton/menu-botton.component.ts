import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-botton',
  templateUrl: './menu-botton.component.html',
  styleUrls: ['./menu-botton.component.scss']
})
export class MenuBottonComponent implements OnInit {
menu: Array<any>= [
  {name: 'Muted', icon:'uil uil-microphone'},
  {name: 'Home', icon: 'uil uil-home'},
  {name: 'Share', icon:'uil uil-share'},
];

  constructor() { }

  ngOnInit(): void {
  }

}

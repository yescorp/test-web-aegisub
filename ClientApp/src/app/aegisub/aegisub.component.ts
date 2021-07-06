import { Component, OnInit } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { ButtonsMenuComponent } from './buttons-menu/buttons-menu.component';
import { TitleComponent } from './title/title.component';

@Component({
  selector: 'app-aegisub',
  templateUrl: './aegisub.component.html',
  styleUrls: ['./aegisub.component.css']
})
export class AegisubComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

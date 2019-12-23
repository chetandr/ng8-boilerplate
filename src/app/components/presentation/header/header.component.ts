import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
// import * as fromLayout from '../../modules/app/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-show',
  templateUrl: './loading-show.component.html',
  styleUrls: ['./loading-show.component.scss']
})
export class LoadingShowComponent implements OnInit {

  constructor() {
    console.log('应该构造');
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
// import { CYIA_LOADING_HINT_CLOSE_FN } from 'cyia-ngx-common/loading-hint';
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
  close() {
    console.log('关闭');
    // this[CYIA_LOADING_HINT_CLOSE_FN]();
  }
}

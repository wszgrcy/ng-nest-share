import { Component, OnInit } from '@angular/core';
import { CYIA_LOADING_HINT_CLOSE_FN, CYIA_LOADING_HINT_RESULT$ } from 'cyia-ngx-common/loading-hint';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-loading-show',
  templateUrl: './loading-show.component.html',
  styleUrls: ['./loading-show.component.scss'],
})
export class LoadingShowComponent implements OnInit {
  complete;
  constructor() {
    console.log('应该构造');
  }

  ngOnInit() {
    (this[CYIA_LOADING_HINT_RESULT$] as Subject<any>).subscribe((val) => {
      console.log('完成', val);
      if (val === 1) {
        this.complete = true;
        // this[CYIA_LOADING_HINT_CLOSE_FN]();
      }

    });
  }
  close() {
    console.log('关闭');
    this[CYIA_LOADING_HINT_CLOSE_FN]();
  }
}

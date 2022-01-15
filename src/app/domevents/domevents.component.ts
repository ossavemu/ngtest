import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-domevents',
  templateUrl: './domevents.component.html',
  styleUrls: ['./domevents.component.css'],
})
export class DomeventsComponent implements OnInit {
  @Input() textshow: string | undefined;

  constructor() {}

  ngOnInit(): void {}
  // addAnswer() {
  //   const AlertAns =
  //     '<br /><div class="alert alert-success alert-dismissible mx-auto" role="alert" style="width: 65%"> The answer is  ';
  //   const AlertAns2 =
  //     '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
  //   const errorShow = `<div class="alert alert-dismissible alert-danger mx-auto" role="alert" style="width: 65%">
  //     <button type="button" class="btn-close" data-bs-dismiss="alert"></button> <strong>Invalid input!</strong>
  //       Write an operation and try again. </div>`;
  //   const answerA = document.getElementById('ans');
  //   const element = document.createElement('div');
  //   if (inputST === undefined) {
  //     element.innerHTML = errorShow;
  //     return answerA.insertBefore(element, answerA.firstChild);
  //   } else {
  //     element.innerHTML = AlertAns + ans + AlertAns2;
  //     answerA.insertBefore(element, answerA.firstChild);
  //   }
  // }
}

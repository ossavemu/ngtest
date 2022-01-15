import { Component, OnInit } from '@angular/core';
import * as math from 'mathjs';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  inputST: string = '';
  result: any = '';
  dotchecker() {
    if (this.inputST.includes(',')) {
      this.inputST = this.inputST.replace(/[,]/gi, '.');
      console.log(this.inputST);
    }
  }
  calculate() {
    this.dotchecker();
    this.result = math.evaluate(this.inputST);
    console.log(this.result);
    return this.result;
  }
  simp() {
    console.log(this.inputST);
    this.dotchecker();
    this.result = math.simplify(this.inputST);
    console.log(this.result);
  }
}

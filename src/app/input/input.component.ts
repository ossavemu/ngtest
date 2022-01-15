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
  inputST = '';
  dotchecker() {
    if (this.inputST.includes(',')) {
      this.inputST = this.inputST.replace(/[,]/gi, '.');
      console.log(this.inputST);
    }
  }
  calculate() {
    this.dotchecker();
    let result = math.evaluate(this.inputST);
    console.log(result);
    return result;
  }
  simp() {
    console.log(this.inputST);
    this.dotchecker();
    let result = math.simplify(this.inputST);
    console.log(result);
  }
}

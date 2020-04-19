import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lenght = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;

  onChangeLetters() {
    this.useLetters = !this.useLetters;
  }

  onChangeNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  onChangeSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  genPassword() {
   console.log(
     `use letters : [${ this.useLetters}]\nuse Numbers : [${this.useNumbers}]\nUse Symbols : [${this.useSymbols}]`); 
  }
}

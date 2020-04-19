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
  password = '';

  onInput(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.lenght = parsedValue;
    }
  }

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
    const letters = 'qwertyuiopasdfghjklzxcvbnm';
    const numbers = '123456789';
    const symbols = '!@#$%&*(_+-)';

    let allowedValues = '';

    if (this.useLetters) {
      allowedValues +=  letters;
    }

    if (this.useNumbers) {
      allowedValues +=  numbers;
    }

    if (this.useSymbols) {
      allowedValues +=  symbols;
    }

    let generatedPassword = '';


    for(let i = 0; i < this.lenght ; i++) {
      const index = Math.floor(Math.random() * allowedValues.length);
      generatedPassword += allowedValues[index];
    }

    this.password = generatedPassword

  }
}

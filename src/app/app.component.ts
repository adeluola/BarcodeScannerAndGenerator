import { Component } from '@angular/core';
import {BarcodeFormat} from '@zxing/library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resString: string | undefined;
  value = '';

  title = 'scanner-app';
  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/ ];
  onCode(resultString: string): void
  {
    this.resString = resultString;
  }
   generate(inputed: string): void
   {
    this.value = inputed;
   }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import { NgxBarcodeModule } from 'ngx-barcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ZXingScannerModule,
     NgxBarcodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

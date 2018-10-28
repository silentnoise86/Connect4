import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BoardComponent} from "./board.component";

@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    BoardComponent

  ],
  providers: [],

})
export class BoardModule { }

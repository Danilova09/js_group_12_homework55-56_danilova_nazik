import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IngredientsBlockComponent } from './ingredients-block/ingredients-block.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IngredientsBlockComponent } from './ingredients-block/ingredients-block.component';
import { IngredientsItemsComponent } from './ingredients-block/ingredients-items/ingredients-items.component';
import { BurgerBlockComponent } from './burger-block/burger-block.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsBlockComponent,
    IngredientsItemsComponent,
    BurgerBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

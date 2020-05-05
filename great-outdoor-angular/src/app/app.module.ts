import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { FormsModule } from '@angular/forms';


ProductsModule
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    OrdersModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatListModule,
    MatToolbarModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {WeatherRoutingModule} from './weather-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    WeatherRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent],
})
export class WeatherModule {
}

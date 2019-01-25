import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../_service/weather.service';
import {City} from '../_model/city.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  city: City;
  form: FormGroup;
  error: string;

  constructor(private weatherService: WeatherService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      'city': this.fb.control('', Validators.required)
    });
  }

  list() {

    this.city = null;
    this.error = null;

    if (this.form.valid) {
      this.weatherService.list(this.form.get('city').value).subscribe(
        (city) => this.city = city,
        () => this.error = 'Cidade não encontrada.'
      );
    }
  }
}

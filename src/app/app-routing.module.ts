import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {TemplateComponent} from './template/template.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full'
  },
  {
    path: 'weather',
    component: TemplateComponent,
    children: [
      {
        path: '',
        loadChildren: 'src/app/weather/weather.module#WeatherModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

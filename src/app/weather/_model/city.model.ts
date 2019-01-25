import {Weather} from './weather.model';
import {Coordinate} from './coordinate.model';
import {Main} from './main.model';
import {System} from './system.model';
import {Cloud} from './cloud.model';

export class City {

  public id: number;

  constructor(
    public name: string,
    public cod: number,
    public weather: Weather[],
    public coord: Coordinate,
    public main: Main,
    public sys: System,
    public clouds: Cloud
  ) {}
}

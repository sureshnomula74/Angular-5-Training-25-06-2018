import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

//Angular 4.0 way  (Note: http is going to be deprecated in Angular 6.0)
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { debounceTime, switchMap, map } from 'rxjs/operators';


const httpOptions = {
    headers: new Headers(
        { 'Content-Type': 'application/json' })
};

@Component({
    selector: "app-weather",
    template: `
    <div class="container">
      <h3 style="background:orange">Live Weather Forecast by Murthy</h3>
      
      City:<input type="text"
            [formControl]="searchInput">

      <h3>Current Temperature in {{temperature}}F </h3>
      <h3>Humidity {{humidity}}% </h3>
     <h2 >Status : {{description}}</h2>
     </div>
    `
})
export class WeatherComponent {
    //http://api.openweathermap.org/data/2.5/weather?q=chennai&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73
    
    private baseWeatherURL: string =
    'http://api.openweathermap.org/data/2.5/weather?q=';

    private urlSuffix: string =
    "&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73";

   // FormControl comes from ReactiveFormsModule
    searchInput: FormControl = new FormControl();
    temperature: string;
    description: string = '';
    humidity: string = '';

    constructor(private http: Http) {
        //Observable form       
        this.searchInput.valueChanges
            .pipe(debounceTime(4000)) // wait 4 seconds
            .pipe(switchMap((city: string) => this.getWeather(city)))
            .subscribe(    (res: any) => {
                this.description = res.weather[0].description;
                this.temperature = res.main.temp;
                this.humidity = res.main.humidity;
            },
            (err: any) =>
                console.log(
                `Can't get weather. Error code: %s, URL: %s`, 
                  err.message, err.url
                ),
            () => console.log('made request to openweather map')
            );
    }
    ngOnInit() {
        this.searchInput.setValue("Hyderabad");
    }    
      // send a POST request to the API to create a new data object
      createWeather(data) {
        //let body = JSON.stringify(data);
       // return this.http.post
           //(this.baseUrl+'/api/weather/', body, httpOptions);
    }
    //Ajax call here (write this code in service)
    getWeather(city: string): Observable<Array<string>> {
        return this.http.get(this.baseWeatherURL + city + this.urlSuffix)
            .pipe(map((data:any) => {
                console.log(data);
                return data.json()
            }));
    }
}
// end
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseUrl: string = `http://api.weatherapi.com/v1/forecast.json?key=61701315568d4faaa22163510231303&q=galle&days=1`;

  constructor(private http: HttpClient) { }
  
  public getPhotos() { 
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }


  public getNews() { 
    return this.http.get(this.baseUrl);
  }

  public get(url: string, options?: any) { 
    return this.http.get(url, options); 
  } 
  
  public post(url: string, data: any, options?: any) { 
    return this.http.post(url, data, options); 
  }  
  
  public put(url: string, data: any, options?: any) { 
    return this.http.put(url, data, options); 
  } 
  
  public delete(url: string, options?: any) {
    return this.http.delete(url, options);
  }  
}

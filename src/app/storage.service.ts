import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setLocalStorageUserName(value: string): void {
    localStorage.setItem("username", value);
  }

  setLocalStoragePassword(value:string):void{
    localStorage.setItem("password",value);
  }

  getLocalStoragePassword(): string|null {
    return localStorage.getItem("password");
  }

  getLocalStorageUserName():string|null{
    return localStorage.getItem("username");
  }

  removeItemUserName(): void {
    localStorage.removeItem("username");
  }

  removeItemPassword():void{
    localStorage.removeItem("password");
  }

  clear(): void {
    localStorage.clear();
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class DemoService {
 public static objCount=0;
 constructor (){
  DemoService.objCount=DemoService.objCount+1
  console.log(DemoService.objCount);
 }
 singletonData(name:string):any{
  return 'singleton Data' +name;
 }
}

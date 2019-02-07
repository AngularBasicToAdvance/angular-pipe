import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any, ...args): any 
  {
    let str = value;
  
    if(args[0] == "Tekdi")
    {
      str += "Take the Lead" 
    }
    return str;
  }
}

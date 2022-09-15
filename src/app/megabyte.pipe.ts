import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name :'megabyte'
})
export class MegabytePipe implements PipeTransform{
    transform(value:any, ...args: any[]){
        console.log(value);
        return value/1000000
    }
}
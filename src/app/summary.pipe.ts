import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name : 'summary'
})
export class SummaryPipe implements PipeTransform{
    // transform(value: any, ...args: any[]) {  //args not mandatory
    //     // throw new Error("Method not implemented.");
    //     console.log(value);        
    // }
    transform(value: string, limit?:number) {
        let actualLimit = limit ? limit : 50;
        return value.substring(0,actualLimit) + '...';
    }
    
}
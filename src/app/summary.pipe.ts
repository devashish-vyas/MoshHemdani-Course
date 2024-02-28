import {Pipe, PipeTransform} from "@angular/core"


@Pipe({
    name : 'summary',
    standalone : true
})
export class SummaryPipe implements PipeTransform{
    transform(value: String, limit?:number ) {
        if(!value) return null;
        let actual = limit ? limit : 20;
        return value.substring(0,actual); 
        
    }
}
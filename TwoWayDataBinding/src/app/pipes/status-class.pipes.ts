import { Pipe, PipeTransform } from "@angular/core";

@Pipe({

    name: 'statusClass'
})
export class StatusClassPipe implements PipeTransform {
    transform(status: number): string {
        console.log(StatusClassPipe)
        //throw new Error("Method not implemented");
      /*  if(status ===1){
            return 'active';
        }
        else if (status === 2){
            return 'partial';
        }
        else{
            return 'blocked';
        }
*/
        const obj: { [key : number]: string} = {
            1: 'active',
            2: 'partial',
            3: 'blocked',
        };
        
        return obj[status];
    }

}
import { AbstractControl, ValidationErrors } from "@angular/forms";

export class userNameValidators{

    names : String[] = ['Devashish','tarun','Neelam'] 
    static userNameWithSpace(context:AbstractControl): ValidationErrors | null{

        if((context.value as string).indexOf(' ')>=0){
            return {cannotContainSpace : true}
        }
        return null;
    }

    static shouldBeUnique(control : AbstractControl) : Promise<ValidationErrors> | null{

        return new Promise((resolve,reject)=>{
            if(new userNameValidators().names.indexOf((control.value as string))>=0){
                resolve({userNameNotUnique:true})
            }
            resolve(null);
        })
    }
}
import { AbstractControl, ValidationErrors } from "@angular/forms";

export class changePasswordValidation{

    static passwordMatch(context: AbstractControl): ValidationErrors | null {
        let tmp = (context.value as string);
        if(tmp!="1234"){
            return {"PasswordIncorrect":true}
        }
        return null;
    }

    static PasswordShouldMatch(context: AbstractControl):ValidationErrors | null{
        let newPassword = (context.value.newPassword as string);
        let confirmPassword = (context.value.confirmPassword as string);

        if(newPassword != confirmPassword){
            return {"PasswordNotMatch":true}
        }
        return null;
    }

}
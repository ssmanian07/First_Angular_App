import { AbstractControl } from '@angular/forms';

export class passwordValidators{
    static ValidOldPassword(control: AbstractControl){
        return new Promise((resolve) => {
            if(control.value !== "1234")
                resolve({ invalidOldPassword: true});
            else
             resolve(null);
        })
    }

    static PasswordsShouldMatch(control: AbstractControl){
     let newPassword = control.get('newPassword');
     let confirmPassword = control.get('confirmPassword');

     return { PasswordsShouldMatch: newPassword.value !== confirmPassword.value };    
    }
}
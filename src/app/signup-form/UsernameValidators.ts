import { AbstractControl, ValidationErrors } from '@angular/forms';
import { promise } from 'protractor';

export class UsernameValidator{
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf(' ') >=0)
            return{ cannotContainSpace : true}
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null>{
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                control.value === 'Subbu' ?
                    resolve({ shouldBeUnique : true}) :
                    resolve(null)
            },2000)

        });
    }
}
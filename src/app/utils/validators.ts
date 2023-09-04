import { AbstractControl } from "@angular/forms";

export class MyValidators {

    static validPassword(control: AbstractControl) {
        const value = control.value;
        if (!containsNuumber(value)) {
            return { invalid_password: true }
        }
        return null;
    }


}
function containsNuumber(value: string) {
    return value.split('').find(v => isNumber(v)) !== undefined
}


function isNumber(value: any) {
    return !isNaN(parseInt(value, 10));
}


// static matchPasswords(control: AbstractControl) {
    //     const password = control.get('password')?.value
    //     const confirmPassword = control.get('confirmPassword')?.value
    //     if (password === confirmPassword) {
    //         return null
    //     }
    //     return { match_error: true }
    // }
import { AbstractControl } from "@angular/forms";

export class MyValidators {

    static validPassword(control: AbstractControl) {
        const value = control.value;
        if (!containsNuumber(value)) {
            return { invalid_password: true }
        }
        return null;
    }

    static matchPasswords(constrol: AbstractControl) {
        const password = constrol.get('password')?.value;
        const confirmPassword = constrol.get('confirmPassword')?.value;

        if (password === confirmPassword) {
            return null
        }
        return { match_password: true }
    }
}
function containsNuumber(value: string) {
    return value.split('').find(v => isNumber(v)) !== undefined
}


function isNumber(value: any) {
    return !isNaN(parseInt(value, 10));
}

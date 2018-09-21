import {AbstractControl} from '@angular/forms';
export class PhoneNumberValidation {

    static MatchPhoneNumber(AC: AbstractControl) {
       let phoneNumber = AC.get('phoneNumber').value; // to get value in input tag
       let confirmPhoneNumber = AC.get('confirmPhoneNumber').value; // to get value in input tag
        if(phoneNumber != confirmPhoneNumber) {
            AC.get('confirmPhoneNumber').setErrors( {MatchPhoneNumber: true} )
        } else {
            return null
        }
    }
}
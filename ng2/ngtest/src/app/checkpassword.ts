import { FormControl, FormGroup } from '@angular/forms'

export class Checkpassword {
    static checkPasswordLength(control: FormControl){
        if(control.value.length > 0 && control.value.length < 5 ) return {smallPassword: true};
        return null;
    }

    static isSamePassword(group: FormGroup){
        let newpassword1 = group.controls['newpassword1'].value;
        let newpassword2 = group.controls['newpassword2'].value;

        if(newpassword1 !== newpassword2){
            return {notSamePassword: true};
        } 
       // console.dir(group.controls);
        
        return null;
    }
}

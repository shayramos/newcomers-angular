import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-feature',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-feature.component.html',
  styleUrl: './form-feature.component.sass'
})
export class FormFeatureComponent {
  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthdate: new FormControl('', [Validators.required, this.dateValidator()]),
    phone: new FormControl('', [Validators.required]), // TODO: Permitir apenas números
    taxnumber: new FormControl('', Validators.required), // TODO: Validar
  })
  // Every field should use native input elements and are required.
  // The "Email" field only accepts valid emails.
  // The "Birthdate" field does not accept dates in the futures.
  // The "Phone" field only accepts 9 digit numbers.
  // The "Tax number" field only accepts valid portuguese Individual Identification Number (Número de Identificação Fiscal (NIF) )
  // When submitting, the fields with invalid values should appear with a red background.
  // If all fields are valid, the page should refresh.

  // Build a custom Dropdown component that implements Angular's ControlValueAccessor interface.
  // Add a new field "Country" into the form, which uses the custom Dropdown component.
  // The "Country" field is required.

  onSubmit(): void {
    // TODO: Refresh page if all valid
    console.log(this.formGroup)
  }

  private dateValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const today = new Date().getTime();
  
      if(!(control && control.value)) {
        return null;
      }
  
      return new Date(control.value).getTime() > today 
        ? { invalidDate: 'Future date invalid' } 
        : null;
    }
  }
}

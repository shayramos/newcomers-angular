import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { NifValidatorService } from '../../core/services/nif-validator.service';
import { CustomDropdownComponent, DropdownType } from '../../shared/components/custom-dropdown/custom-dropdown.component';

@Component({
  selector: 'app-form-feature',
  standalone: true,
  imports: [ReactiveFormsModule, CustomDropdownComponent],
  templateUrl: './form-feature.component.html',
  styleUrl: './form-feature.component.sass'
})
export class FormFeatureComponent {

  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthdate: new FormControl('', [Validators.required, this.dateValidator()]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]), // TODO: Permitir digitar apenas números
    taxnumber: new FormControl('', Validators.required), // TODO: Validar
    country: new FormControl('', Validators.required),
  })

  // TODO: Marcar country vermelho
  // TODO: The "Tax number" field only accepts valid portuguese Individual Identification Number (Número de Identificação Fiscal (NIF) )
  // TODO: Erro no console

  // constructor(private nifValidatorService: NifValidatorService) { 
  //   this.formGroup?.valueChanges?.subscribe(console?.info);
  // }

  // Every field should use native input elements and are required.
  // ok The "Email" field only accepts valid emails.
  // ok The "Birthdate" field does not accept dates in the futures.
  // ok The "Phone" field only accepts 9 digit numbers.
  // ok When submitting, the fields with invalid values should appear with a red background.
  // ok If all fields are valid, the page should refresh.
  // ok Build a custom Dropdown component that implements Angular's ControlValueAccessor interface.
  // ok Add a new field "Country" into the form, which uses the custom Dropdown component.
  // ok The "Country" field is required.

  protected options = [
    { code: '', name: '' },
    { code: 'JP', name: 'Japão' },
    { code: 'IN', name: 'Indonésia' },
    { code: 'BR', name: 'Brasil' }
  ] as DropdownType[];

  onSubmit(): void {
    // TODO: Unsubiscribe
    // this.nifValidatorService.getNIF('320121704').subscribe((response: any) => {
    //   console.log(response);
    // })
    console.log(this.formGroup)
    if (this.formGroup.valid) {
      // window.location.reload()
    }
  }

  private dateValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const today = new Date().getTime();
  
      if (!(control && control.value)) {
        return null;
      }
  
      return new Date(control.value).getTime() > today 
        ? { invalidDate: 'Future date invalid' } 
        : null;
    }
  }
}

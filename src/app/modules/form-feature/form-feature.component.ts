import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
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
    phone: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    taxnumber: new FormControl('', [Validators.required, this.NIFValidator()]), // TODO: Permitir digitar apenas números
    country: new FormControl('', Validators.required),
  })

  protected options = [
    { code: '', name: '' },
    { code: 'JP', name: 'Japão' },
    { code: 'IN', name: 'Indonésia' },
    { code: 'BR', name: 'Brasil' }
  ] as DropdownType[];

  onSubmit(): void {
    if (this.formGroup.valid) {
      window.location.reload()
    }
  }

  private NIFValid(nif: string): boolean {
    if (nif?.length !== 9)
    return false
    
    const controlDigt = Number(nif.at(8))
    const arrNif = nif.split('')
    let sum = 0
    let countControl = 9
    for (let index = 0; index < arrNif.length-1; index++) {
      sum += Number(arrNif[index])*countControl;
      countControl -= 1
    }
    
    const sumModulo = sum % 11
    const sumComplement = 11 - sumModulo
    const result = sumComplement > 9 ? 0 : sumComplement
    
    return (result === controlDigt)
  }

  private NIFValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if (!(control && control?.value)) {
        return null;
      }
    
      return !this.NIFValid(control?.value) 
        ? { invalidNIF: 'NIF invalid' } 
        : null;
    }
  }

  private dateValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const today = new Date().getTime();
      
      if (!(control && control?.value)) {
        return null;
      }
    
      return new Date(control?.value).getTime() > today 
        ? { invalidDate: 'Future date invalid' } 
        : null;
    }
  }

}

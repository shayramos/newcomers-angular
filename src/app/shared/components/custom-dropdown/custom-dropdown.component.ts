import { CommonModule } from '@angular/common';
import { Component, Input, Provider, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

const COUNTRY_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomDropdownComponent),
  multi: true,
};

@Component({
  selector: 'app-custom-dropdown',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './custom-dropdown.component.html',
  providers: [COUNTRY_CONTROL_VALUE_ACCESSOR],
  styleUrl: './custom-dropdown.component.sass'
})

export class CustomDropdownComponent implements ControlValueAccessor {

  @Input() label = 'Label'
  @Input() options = [] as DropdownType[]

  private onTouched!: Function;
  private onChanged!: Function;

  select(code: string) {
    this.onTouched();
    this.onChanged(code);
  }

  writeValue(value: string): void { }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}

export interface DropdownType {
  code: string
  name: string
}

import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-dropdown',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './custom-dropdown.component.html',
  styleUrl: './custom-dropdown.component.sass'
})
export class CustomDropdownComponent implements OnInit {

  @Input() label = 'Label'
  @Input() options = [] as DropdownType[]
  @Input() control = new FormControl()
  @Input() isRequired = false;

  ngOnInit(): void {
    console.log(this.control)
    if (this.isRequired) {
      this.control.setValidators(Validators.required)
    }
  }
}
export interface DropdownType {
  id: number
  name: string
}

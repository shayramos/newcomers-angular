import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormFeatureComponent } from './modules/form-feature/form-feature.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormFeatureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Newcomers exercise';
}

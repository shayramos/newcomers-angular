import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormFeatureComponent } from './modules/form-feature/form-feature.component';
import { HttpClientModule } from '@angular/common/http';
import { NifValidatorService } from './core/services/nif-validator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormFeatureComponent, HttpClientModule],
  providers: [NifValidatorService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'newcomers';
}

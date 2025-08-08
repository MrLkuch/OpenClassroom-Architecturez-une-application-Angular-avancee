import { SharedModule } from './shared/shared-module';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoreModule, SharedModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('awesome-components');
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppHeader } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, AppHeader],
  standalone: true,
})
export class AppComponent {
  title = 'standalone-app';
}

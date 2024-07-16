import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [RouterModule],
})
export class AppHeader {
  /**
   * just a standalone component injected into another
   */
}

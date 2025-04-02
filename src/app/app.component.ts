import { Component } from '@angular/core';
import { MissionfilterComponent } from './components/missionfilter/missionfilter.component';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MissionfilterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  onYearSelected(year: string) {
    this.router.navigate(['/'], { queryParams: { year } });
  }
}
import { Component } from '@angular/core';
import { MissionfilterComponent } from './components/missionfilter/missionfilter.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MissionfilterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedYear: string = '';

  onYearSelected(year: string) {
    this.selectedYear = year;
  }
}
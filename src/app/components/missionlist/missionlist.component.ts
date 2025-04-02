import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';
import { Launch } from '../../interfaces/launch.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,      // 👈 REQUIRED
    MatButtonModule     // 👈 REQUIRED for mat-button, mat-raised-button
  ],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit, OnChanges {
  @Input() year: string = '';
  launches: Launch[] = [];

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.fetchLaunches();
  }

  ngOnChanges(): void {
    this.fetchLaunches();
  }

  fetchLaunches() {
    if (this.year) {
      this.spacexService.getLaunchesByYear(this.year).subscribe(data => {
        this.launches = data;
      });
    } else {
      this.spacexService.getAllLaunches().subscribe(data => {
        this.launches = data;
      });
    }
  }
}
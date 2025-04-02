import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';
import { Launch } from '../../interfaces/launch.interface';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  launches: Launch[] = [];

  constructor(
    private spacexService: SpacexService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const year = params['year'];
      if (year) {
        this.spacexService.getLaunchesByYear(year).subscribe(data => {
          this.launches = data;
        });
      } else {
        this.spacexService.getAllLaunches().subscribe(data => {
          this.launches = data;
        });
      }
    });
  }
}
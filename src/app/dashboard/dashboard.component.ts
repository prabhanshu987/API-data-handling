import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;
  error: string | null = null;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe({
      next: (response) => {
        this.data = response.fact;
        this.error = null;
      },
      error: (err) => {
        this.error = err.message;
      }
    });
  }

  

  navigateToAbout(): void {
    this.router.navigate(['/about']);
  }
}

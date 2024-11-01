import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  buzzBeeSequence: string[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  generateBuzzBeeSequence(): void {
    this.buzzBeeSequence = [];
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        this.buzzBeeSequence.push('Buzz Bee');
      } else if (i % 3 === 0) {
        this.buzzBeeSequence.push('Buzz');
      } else if (i % 5 === 0) {
        this.buzzBeeSequence.push('Bee');
      } else {
        this.buzzBeeSequence.push(i.toString());
      }
    }
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}

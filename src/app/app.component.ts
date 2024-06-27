import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.router.navigate(['/'])
  }
  title = 'NextiumFundraising';
  router = inject(Router)
}

import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FundraiserService } from './fundraiser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  constructor(private service:FundraiserService){}
  ngOnInit(): void {
    this.router.navigate(['overview/home']);
    this.service.senddonclk(null);
    this.service.sendselectedorg(null);
  }
  title = 'NextiumFundraising';
  router = inject(Router)
}

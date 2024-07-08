import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  router = inject(Router)

  showfooter() {
    if (this.router.url.includes('overview/need') || this.router.url.includes('overview/uploadimg') ||
      this.router.url.includes('overview/payment')) {
      return false
    }
    return true
  }

  showheader() {
    if(this.router.url.includes('overview/payment')){
      return false
    }
    return true;
  }
}

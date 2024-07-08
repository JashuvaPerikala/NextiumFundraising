import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FundraiserService } from '../fundraiser.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
 constructor(private router: Router,private service:FundraiserService){}

  donateclk(){
    // this.router.navigate(['overview/need']);

    this.service.sendfooterclk('overview/need');

  }
}

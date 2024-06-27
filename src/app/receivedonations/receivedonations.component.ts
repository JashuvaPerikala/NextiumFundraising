import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receivedonations',
  templateUrl: './receivedonations.component.html',
  styleUrl: './receivedonations.component.scss'
})
export class ReceivedonationsComponent {

  constructor(private router: Router) { }
  
  registerclk(){
this.router.navigate(['overview/requirements'])
  }
}

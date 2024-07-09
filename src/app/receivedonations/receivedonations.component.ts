import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FundraiserService } from '../fundraiser.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-receivedonations',
  templateUrl: './receivedonations.component.html',
  styleUrl: './receivedonations.component.scss'
})
export class ReceivedonationsComponent implements OnInit {

  private subscription: Subscription = new Subscription();

  constructor(private router: Router,private service : FundraiserService,private toast:ToastrService) { }

  ngOnInit(): void {
    this.subscription.add(this.service.GetdonData$.subscribe(x=>{
      if(x == null || x == undefined){
        this.router.navigate(['overview/home']);
        this.toast.warning('Please Use menu bar links');
      }
      if(x == 'fromlogout'){
        this.router.navigate(['overview/home']);
      }
    }))
    
  }
  
  registerclk(){
this.router.navigate(['overview/requirements'])
  }
}

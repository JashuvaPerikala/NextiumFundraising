import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FundraiserService } from '../fundraiser.service';

@Component({
  selector: 'app-nextmspinner',
  templateUrl: './nextmspinner.component.html',
  styleUrl: './nextmspinner.component.scss'
})
export class NextmspinnerComponent {

  @Input() spinnerTime:any ;
@Output() spinnerEvent = new EventEmitter();
intervalfn:any;
  constructor(private common : FundraiserService) {}

  ngOnInit(): void {
    if(this.spinnerTime){
      if(this.spinnerTime!= 0){
        var self = this;
        this.intervalfn = setInterval(function(){
          if(self.spinnerTime ==0) return clearInterval(self.intervalfn)
          let currentDuration = (new Date().getTime() - self.spinnerTime)/1000;
          if(currentDuration > 5 || self.common.checkNetwork() == false){
            self.spinnerEvent.emit();
            clearInterval(self.intervalfn)
          }
          },1000)
      }
      else if(this.intervalfn){
        clearInterval(this.intervalfn)
      }
    }
    else if(this.intervalfn){
      clearInterval(this.intervalfn)
    }
  }
}

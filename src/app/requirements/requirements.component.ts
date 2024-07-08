import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FundraiserService } from '../fundraiser.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare var $: any;
@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrl: './requirements.component.scss'
})
export class RequirementsComponent implements OnInit {
  orgform: FormGroup
  reqq: boolean = false;
  typeerror: boolean = false;
  nameerror: boolean = false;
  addresserror: boolean = false;
  phnerror: boolean = false;
  reqerror: boolean = false;
  reqcounterror: boolean = false;
  orgname = new FormControl('');
  itterate: any;
  firstitt: boolean = false;
  secitt: boolean = false;
  thrditt: boolean = false;
  forthitt: boolean = false;
  reqonecntrl = new FormControl('');
  reqtwocntrl = new FormControl('');
  reqthreecntrl = new FormControl('');
  reqfourcntrl = new FormControl('');

  unitonecntrl = new FormControl('');
  unittwocntrl = new FormControl('');
  unitthreecntrl = new FormControl('');
  unitfourcntrl = new FormControl('');
  orgnamedisplay: any = '';


  constructor(private fb: FormBuilder, private service: FundraiserService, private router: Router, private toast: ToastrService) {

    this.orgform = this.fb.group({
      typeorg: [''],
      nameorg: [''],
      addresscntrl: [''],
      phnumbercntrl: [''],
      reqcntrl: [''],

    })
  }

  ngOnInit(): void {

  }

  numberOnly(event: any) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  reqclk() {
    if (this.orgform.controls['typeorg'].value == '') {
      this.typeerror = true;
    } else {
      this.typeerror = false;
    }
    if (this.orgform.controls['nameorg'].value == '') {
      this.nameerror = true;
    } else {
      this.nameerror = false;
    }
    if (this.orgform.controls['addresscntrl'].value == '') {
      this.addresserror = true;
    } else {
      this.addresserror = false;
    }
    if (this.orgform.controls['phnumbercntrl'].value == '' || Number(this.orgform.controls['phnumbercntrl'].value?.length != 10)) {
      this.phnerror = true;
    } else {
      this.phnerror = false;
    }
    if (this.orgform.controls['reqcntrl'].value == '') {
      this.reqerror = true;
    } else {
      this.reqerror = false;
    }
    if (this.orgform.controls['reqcntrl'].value != '' && this.orgform.controls['reqcntrl'].value > 4) {
      this.reqcounterror = true;
    } else {
      this.reqcounterror = false;
    }

    if (this.typeerror == false && this.nameerror == false && this.addresserror == false &&
      this.phnerror == false && this.reqerror == false && this.reqcounterror == false) {

      this.orgname.setValue(this.orgform.controls['nameorg'].value)
      this.itterate = this.orgform.controls['reqcntrl'].value;
      if (this.itterate == 1) {
        this.firstitt = true;
      }
      else if (this.itterate == 2) {
        this.secitt = true;
      }
      else if (this.itterate == 3) {
        this.thrditt = true;
      }
      else if (this.itterate == 4) {
        this.forthitt = true;
      }
      this.reqq = true;
    } else {
      this.reqq = false;
    }

    this.orgnamedisplay = this.orgname.value;

  }

  backtoreq() {
    this.reqq = false;
    this.itterate = 0;
    this.firstitt = false;
    this.secitt = false;
    this.thrditt = false;
    this.forthitt = false;

  }

  Recieveclk() {
    const obj = Object.assign({})
    obj.type = this.orgform.controls['typeorg'].value;
    obj.name = this.orgform.controls['nameorg'].value;
    obj.address = this.orgform.controls['addresscntrl'].value;
    obj.phone_number = this.orgform.controls['phnumbercntrl'].value.toString();
    obj.no_of_requirements = Number(this.orgform.controls['reqcntrl'].value);


    if (this.itterate == 1) {
      const reqobj = [
        {
          requirement: this.reqonecntrl.value,
          units_needed: Number(this.unitonecntrl.value),
          // organization: this.orgform.controls['nameorg'].value
        }
      ]
      obj.requirements = reqobj
    }
    else if (this.itterate == 2) {
      const reqobj = [
        {
          requirement: this.reqonecntrl.value,
          units_needed: Number(this.unitonecntrl.value),
          // organization: this.orgform.controls['nameorg'].value
        },
        {
          requirement: this.reqtwocntrl.value,
          units_needed: Number(this.unittwocntrl.value),
          // organization: this.orgform.controls['nameorg'].value
        }
      ]
      obj.requirements = reqobj
    }
    else if (this.itterate == 3) {
      const reqobj = [
        {
          requirement: this.reqonecntrl.value,
          units_needed: Number(this.unitonecntrl.value),
          // organization: this.orgform.controls['nameorg'].value
        },
        {
          requirement: this.reqtwocntrl.value,
          units_needed: Number(this.unittwocntrl.value),
          // organization: this.orgform.controls['nameorg'].value
        }, {
          requirement: this.reqthreecntrl.value,
          units_needed: Number(this.unitthreecntrl.value),
          // organization: this.orgform.controls['nameorg'].value
        }
      ]
      obj.requirements = reqobj
    }
    else if (this.itterate == 4) {
      const reqobj = [
        {
          requirement: this.reqonecntrl.value,
          units_needed: Number(this.unitonecntrl.value),
          // organization: this.orgform.controls['nameorg'].value
        },
        {
          requirement: this.reqtwocntrl.value,
          units_needed: Number(this.unittwocntrl.value),
          // organization: this.orgform.controls['nameorg'].value
        },
        {
          requirement: this.reqthreecntrl.value,
          units_needed: Number(this.unitthreecntrl.value),
          // organization: this.orgform.controls['nameorg'].value
        },
        {
          requirement: this.reqfourcntrl.value,
          units_needed: Number(this.unitfourcntrl.value),
          // organization: this.orgform.controls['nameorg'].value
        }
      ]
      obj.requirements = reqobj
    }

    // if(){

    // }


    this.service.OrganizationReg(obj).subscribe(x => {
      if (x?.message == 'Your Donation Request Successfully Submitted') {
        this.toast.success(x?.message)
        this.service.sendfooterclk('overview/home');
      }
      else {
        this.toast.error(x?.message);
      }
    })

  }

  gotohome() {
    this.router.navigate(['overview/home']);
  }

}

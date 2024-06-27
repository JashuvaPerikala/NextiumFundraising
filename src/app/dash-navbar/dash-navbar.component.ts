import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FundraiserService } from '../fundraiser.service';


@Component({
  selector: 'app-dash-navbar',
  templateUrl: './dash-navbar.component.html',
  styleUrl: './dash-navbar.component.scss'
})
export class DashNavbarComponent implements OnInit {
  homeactive: string = '';
  aboutactive: string = '';
  causeactive: string = '';
  donateactive: string = '';
  recieveactive: string = '';

  regForm: FormGroup;
  loginForm: FormGroup;
  firstnameerror: boolean = false;
  lastnameerror : boolean = false;
  usernameerror:boolean = false;
  emailerror: boolean = false;
  passworderror: boolean = false;
  reppaswrderror: boolean = false;
  loginmailerr: boolean = false;
  loginpswrderr: boolean = false;
  headrname = '';

  constructor(private router: Router, private fb: FormBuilder, private service: FundraiserService) {

    this.regForm = this.fb.group({
      UserName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      Useremail: ['', [Validators.required, Validators.email]],
      Userpassword: ['', [Validators.required, Validators.minLength]],
      Repeatpassword: ['', [Validators.required, Validators.minLength]]
    })

    this.loginForm = this.fb.group({
      loginemail: ['', [Validators.required, Validators.email]],
      loginpassword: ['', [Validators.required, Validators.minLength]],
    })

  }

  ngOnInit(): void {

    if (this.router.url.includes('home')) {
      this.homeactive = 'active'
      this.headrname = 'Home'
    }
    else if (this.router.url.includes("information")) {
      this.headrname = 'About Us'
    }
    else if (this.router.url.includes("cause")) {
      this.headrname = 'Cause'
    }
    else if (this.router.url.includes("need")) {
      this.headrname = 'Donate-Now'
    }
    else if (this.router.url.includes("receivedonations")) {
      this.headrname = 'Recieve Donations'
    }
    else {
      this.homeactive = ''
      this.headrname = ''
    }

  }



  MenuClk(type: string) {
    this.homeactive = '';
    this.headrname = ''
    if (type == 'home') {
      this.router.navigate(['overview/home']);
      this.homeactive = 'active'
      this.headrname = 'Home'
      this.causeactive = ''
      this.donateactive = ''
      this.recieveactive = ''
      this.aboutactive = ''
    }
    else if (type == 'about') {
      this.router.navigate(['overview/information']);
      this.headrname = 'About'
      this.causeactive = ''
      this.donateactive = ''
      this.recieveactive = ''
      this.homeactive = ''
      this.aboutactive = 'active'
    }
    else if (type == 'cause') {
      this.router.navigate(['overview/cause']);
      this.headrname = 'Cause'
      this.aboutactive = ''
      this.donateactive = ''
      this.recieveactive = ''
      this.homeactive = ''
      this.causeactive = 'active'
    }
    else if (type == 'donatenow') {
      this.router.navigate(['overview/need']);
      this.headrname = 'Donate Now'
      this.homeactive = ''
      this.aboutactive = ''
      this.causeactive = ''
      this.recieveactive = ''
      this.donateactive = 'active'
    }
    else if (type == 'Recievedonation') {
      this.router.navigate(['overview/receivedonations']);
      this.headrname = 'Recieve Donations'
      this.aboutactive = ''
      this.causeactive = ''
      this.donateactive = ''
      this.homeactive = ''
      this.recieveactive = 'active'
    }

    // switch (type) {
    //   case 'home':

    //     break;

    //   case 'about':

    //     break;

    //   case 'cause':

    //     break;

    //   case 'donatenow':

    //     break;

    //   case 'Recievedonation':

    //     break;

    // }
  }

  signupnavclk() {
    this.regForm.controls['UserName'].setValue('');
    this.regForm.controls['Useremail'].setValue('');
    this.regForm.controls['Userpassword'].setValue('');
    this.regForm.controls['Repeatpassword'].setValue('');
    this.firstnameerror = false;
    this.emailerror = false;
    this.passworderror = false;
    this.reppaswrderror = false;
  }

  signinnavclk() {
    this.loginForm.controls['loginemail'].setValue('');
    this.loginForm.controls['loginpassword'].setValue('');
    this.loginmailerr = false;
    this.loginpswrderr = false;
  }

  signupclk() {
    if (this.regForm.controls['firstName'].value == '') {
      this.firstnameerror = true;
    } else {
      this.firstnameerror = false;
    }
    if (this.regForm.controls['lastName'].value == '') {
      this.lastnameerror = true;
    } else {
      this.lastnameerror = false;
    }
    if (this.regForm.controls['UserName'].value == '') {
      this.usernameerror = true;
    } else {
      this.usernameerror = false;
    }
    if (this.regForm.controls['Useremail'].value == '') {
      this.emailerror = true;
    } else {
      this.emailerror = false;
    }
    if (this.regForm.controls['Userpassword'].value == '') {
      this.passworderror = true;
    } else {
      this.passworderror = false;
    }
    if (this.regForm.controls['Repeatpassword'].value == '') {
      this.reppaswrderror = true;
    } else {
      this.reppaswrderror = false;
    }

    const obj = Object.assign({})
    obj.firstName = this.regForm.controls['firstName'].value;
    obj.lastName = this.regForm.controls['lastName'].value;
    obj.email = this.regForm.controls['UserName'].value;
    obj.username = this.regForm.controls['Useremail'].value;
    obj.password = this.regForm.controls['Userpassword'].value;
    this.service.Signup(obj).subscribe(x => {
      if (x) {

        this.router.navigate(['']);
      }
    })
  }

  signinclk() {
    if (this.loginForm.controls['loginemail'].value == '') {
      this.loginmailerr = true;
    }
    else {
      this.loginmailerr = false;
    }

    if (this.loginForm.controls['loginpassword'].value == '') {
      this.loginpswrderr = true;
    }
    else {
      this.loginpswrderr = false;
    }

    const obj = Object.assign({})
    obj.username = this.loginForm.controls['loginemail'].value;
    obj.password = this.loginForm.controls['loginpassword'].value;
    this.service.login(obj).subscribe(x => {
      if (x) {
        this.router.navigate(['']);

      }
    })
  }

  // gotohome(){
  //   this.router.navigate(['/']);
  // }




}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FundraiserService } from '../fundraiser.service';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
declare var $: any

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

  spinnerTime: number = 0;

  regForm: FormGroup;
  loginForm: FormGroup;
  firstnameerror: boolean = false;
  lastnameerror: boolean = false;
  usernameerror: boolean = false;
  emailerror: boolean = false;
  passworderror: boolean = false;
  reppaswrderror: boolean = false;
  loginmailerr: boolean = false;
  loginpswrderr: boolean = false;
  private subscription: Subscription = new Subscription();
  destroySubject$: Subject<void> = new Subject();
  headrname = '';
  loginuserName: any;
  usernametrue: boolean = false;
  invalidmailerror: boolean = false;
  frgteror: Boolean = false;
  forgtinputcntrl = new FormControl('');
  newpswdCntrl = new FormControl('');
  repeatpaswrdCntrl = new FormControl('');
  usermail: any;

  visible: boolean = false;
  changetype: boolean = true;

  visible1: boolean = false;
  changetype1: boolean = true;

  visible2: boolean = false;
  changetype2: boolean = true;

  visible3: boolean = false;
  changetype3: boolean = true;

  visible4: boolean = false;
  changetype4: boolean = true;

  samepasserror: boolean = false;

  spinner: boolean = false;
  donORreciev: string = '';

  constructor(private router: Router, private fb: FormBuilder, private service: FundraiserService, private toast: ToastrService) {

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

    this.subscription.add(this.service.GetfootData$.subscribe(x => {
      if (x) {
        if (x == 'overview/need') {
          this.MenuClk('donatenow');
        }
        if (x == 'overview/home') {
          this.MenuClk('home');
        }
        else {
          this.loginForm.controls['loginemail'].setValue('');
          this.loginForm.controls['loginpassword'].setValue('');
          // $('#signinmodal').modal('show');
        }
      }


    })

    )
  }



  MenuClk(type: string) {
    this.homeactive = '';
    this.headrname = '';
    this.donORreciev = ''
    if (type == 'home') {
      $('#paswrdResetmodal').modal('hide');
      $('#forgotmodal').modal('hide');
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
      this.donORreciev = 'donatenow'
      if (this.usernametrue == false) {
        // $('#signinmodal').modal('show');
        this.signinnavclk();
        return;
      }
      this.service.senddonclk(this.usernametrue);
      this.router.navigate(['overview/need']);
      $('#signinmodal').modal('hide');
      this.headrname = 'Donate Now'
      this.homeactive = ''
      this.aboutactive = ''
      this.causeactive = ''
      this.recieveactive = ''
      this.donateactive = 'active'
    }
    else if (type == 'Recievedonation') {
      this.donORreciev = 'Recievedonation'
      if (this.usernametrue == false) {
        // $('#signinmodal').modal('show');
        this.signinnavclk();
        return;
      }
      this.service.senddonclk(this.usernametrue);
      this.router.navigate(['overview/receivedonations']);
      this.headrname = 'Recieve Donations'
      this.aboutactive = ''
      this.causeactive = ''
      this.donateactive = ''
      this.homeactive = ''
      this.recieveactive = 'active'
    }

  }

  signupnavclk() {
    this.visible1 = false;
    this.changetype1 = true;
    this.visible2 = false;
    this.changetype2 = true;
    $('#signupmodal').modal('show');
    $('#shwoswdchk').prop('checked',false);
    $('#showrpswd').prop('checked',false);

    this.regForm.controls['firstName'].setValue('');
    this.regForm.controls['lastName'].setValue('');
    this.regForm.controls['UserName'].setValue('');
    this.regForm.controls['Useremail'].setValue('');
    this.regForm.controls['Userpassword'].setValue('');
    this.regForm.controls['Repeatpassword'].setValue('');
    this.firstnameerror = false;
    this.lastnameerror = false;
    this.usernameerror = false;
    this.invalidmailerror = false;
    this.emailerror = false;
    this.passworderror = false;
    this.reppaswrderror = false;
    this.samepasserror = false;
  }

  signinnavclk() {
    this.visible = false;
    this.changetype = true;
    $('#signinmodal').modal('show');
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

    if (this.emailerror == false && this.regForm.controls['Useremail'].value.includes('@gmail.com')) {
      this.invalidmailerror = false;
    }
    else {
      this.invalidmailerror = true;
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

    if (this.regForm.controls['Userpassword'].value != this.regForm.controls['Repeatpassword'].value) {
      this.samepasserror = true;
    } else {
      this.samepasserror = false;
    }

    if (this.firstnameerror == true || this.lastnameerror == true || this.usernameerror == true || this.samepasserror == true ||
      this.emailerror == true || this.invalidmailerror == true || this.passworderror == true || this.reppaswrderror == true) {
      return;

    }

    const obj = Object.assign({})
    obj.firstName = this.regForm.controls['firstName'].value;
    obj.lastName = this.regForm.controls['lastName'].value;
    obj.email = this.regForm.controls['UserName'].value;
    obj.username = this.regForm.controls['Useremail'].value;
    obj.password = this.regForm.controls['Userpassword'].value;
    this.service.Signup(obj).subscribe(x => {
      if (x?.message == "User registered successfully.") {
        this.toast.show(x?.message);
        $('#signupmodal').modal('hide');
        this.router.navigate(['overview/home']);
      }
      else {
        this.toast.warning(x?.message);
      }
    })
  }

  signinclk() {
    this.loginuserName = ''; this.spinner = true; this.spinnerTime = new Date().getTime();
    var errormsg = '';

    if (this.loginForm.controls['loginemail'].value == '' || this.loginForm.controls['loginemail'].value == null ||
      this.loginForm.controls['loginemail'].value == undefined) {
      if (errormsg == '') {
        errormsg = "Email Address required,"
      } else {
        errormsg = errormsg + "Email Address required,"
      }
    }

    if (this.loginForm.controls['loginpassword'].value == '' || this.loginForm.controls['loginpassword'].value == null ||
      this.loginForm.controls['loginpassword'].value == undefined) {
      if (errormsg == '') {
        errormsg = "Password is required,"
      } else {
        errormsg = errormsg + "Password is required,"
      }
    }

    if (errormsg != '') {
      this.toast.warning(`Following Fields Required: ${errormsg.substring(0, errormsg.length - 1)}`);
      return;
    }

    // if (this.loginForm.controls['loginemail'].value == '') {
    //   this.loginmailerr = true;
    // }
    // else {
    //   this.loginmailerr = false;
    // }

    // if (this.loginForm.controls['loginpassword'].value == '') {
    //   this.loginpswrderr = true;
    // }
    // else {
    //   this.loginpswrderr = false;
    // }

    // if (this.loginForm.controls['loginemail'].value == '' || this.loginForm.controls['loginpassword'].value == '') {
    //   return;
    // }

    const obj = Object.assign({})
    obj.username = this.loginForm.controls['loginemail'].value;
    obj.password = this.loginForm.controls['loginpassword'].value;
    this.service.login(obj).pipe(takeUntil(this.destroySubject$)).subscribe(x => {
      this.spinner = false; this.spinnerTime = 0;
      if (x) {
        if (x?.message == "Login successful") {
          this.loginuserName = x?.userName
          this.usernametrue = true;
          this.toast.success(x?.message);
          $('#signinmodal').modal('hide');
          if (this.donORreciev == 'donatenow') {
            this.MenuClk('donatenow');
          }
          else if (this.donORreciev == 'Recievedonation') {
            this.MenuClk('Recievedonation');
          }

        } else {
          this.usernametrue = false;
          this.toast.error(x?.message);
        }

      }
    })
  }

  logotclk() {
    this.usernametrue = false;
    this.router.navigate(['overview/home']);
    this.MenuClk('home');
    this.service.senddonclk('fromlogout');

  }

  registerclk() {
    $('#signinmodal').modal('hide');
    $('#signupmodal').modal('show');
  }

  forgotclk() {
    this.frgteror = false;
    this.forgtinputcntrl.setValue('');
    $('#signinmodal').modal('hide');
    $('#forgotmodal').modal('show');

  }

  continueclk() {
    this.visible3 = false
    this.visible4 = false
    this.changetype4 = true
    this.changetype3 = true

    this.usermail = ''
    if (this.forgtinputcntrl.value == '') {
      this.frgteror = true;
      return;
    }
    const obj = Object.assign({})
    obj.EmailOrUserName = this.forgtinputcntrl.value

    this.service.forgotpasswordservice(obj).subscribe(x => {
      if (x?.message == 'Please Reset') {
        this.usermail = x?.email;
        $('#forgotmodal').modal('hide');
        $('#paswrdResetmodal').modal('show');
        this.visible3 = false;
        this.visible4 = false;
      }
      else {
        this.toast.error(x?.message)
      }

    })

  }

  resetpaswrd() {
    const obj = Object.assign({})
    obj.Email = this.usermail;
    obj.password = this.newpswdCntrl.value;
    $('#signinmodal').modal('hide');
    if (this.newpswdCntrl.value == '' || this.repeatpaswrdCntrl.value == '') {
      this.toast.warning('please fill the inputs');
      return;
    }

    else if (this.newpswdCntrl.value != this.repeatpaswrdCntrl.value) {
      this.toast.warning('password should be same');
      return;
    }

    this.service.Userupdatepaswrd(obj).subscribe(x => {
      if (x.message = "Password Updated Successfully") {
        this.toast.success("Password Updated Successfully");
        $('#paswrdResetmodal').modal('hide');
        $('#signinmodal').modal('show');
      }
      else {
        this.toast.error(x?.message);
      }
    })
  }

  viewpswrd() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  viewpswrd1() {

    if($('#shwoswdchk').prop('checked') == true){
      this.changetype1 = false
    }
    if($('#shwoswdchk').prop('checked') == false){
      this.changetype1 = true
    }
    // this.visible1 = !this.visible1;
    // this.changetype1 = !this.changetype1;
  }

  viewpswrd2() {
    if($('#showrpswd').prop('checked') == true){
      this.changetype2 = false
    }
    if($('#showrpswd').prop('checked') == false){
      this.changetype2 = true
    }

    // this.visible2 = !this.visible2;
    // this.changetype2 = !this.changetype2;
  }

  viewpswrd3() {
    this.visible3 = !this.visible3;
    this.changetype3 = !this.changetype3;
  }

  viewpswrd4() {
    this.visible4 = !this.visible4;
    this.changetype4 = !this.changetype4;
  }



  ngOnDestroy(): void {

    this.subscription.unsubscribe();
    this.destroySubject$.next();
    this.destroySubject$.complete();

  }




}

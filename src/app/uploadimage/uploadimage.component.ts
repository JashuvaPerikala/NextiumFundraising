import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FundraiserService } from '../fundraiser.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrl: './uploadimage.component.scss'
})
export class UploadimageComponent implements OnInit {
  imageUrl1: '' | undefined
  imageUrl2: '' | undefined
  imageUrl3: '' | undefined
  imageUrl4: '' | undefined


  donform: boolean = true;
  @ViewChildren('chkdata') chkdataQueryList: QueryList<ElementRef> | undefined
  private subscription: Subscription = new Subscription();

  deliver = new FormGroup({
    ufirstName: new FormControl(''),
    ulastName: new FormControl(''),
    uemail: new FormControl(''),
    uNumber: new FormControl(''),
    uaddress: new FormControl(''),
    ucity: new FormControl(''),
    ustate: new FormControl(''),
    uzipcode: new FormControl(''),
    ucountryname: new FormControl('')

  })

  chkdreq: any[] = [];
  fnameerror: boolean = false;
  lnameerror: boolean = false;
  emailerro: boolean = false;
  phnnumberr: boolean = false;
  adderror: boolean = false;
  cityerror: boolean = false;
  stateerror: boolean = false;
  ziperror: boolean = false;
  cntryerror: boolean = false;
  selectedFileName: any;
  orgname: string = '';

  constructor(private service: FundraiserService, private toast: ToastrService, private router: Router) {

  }

  ngOnInit(): void {
    this.subscription.add(this.service.GetDocData$.subscribe(x => {
      if (x !== null && x !== undefined) {
        this.orgname = x.name;
        this.chkdreq = x.requirements?.$values?.filter((x: { checked: boolean; }) => x.checked == true);
        this.chkdreq.filter((x: any) => { x.unitsdonatecntrl = new FormControl(x.unitsdonatecntrl) })
      }
      console.log(this.chkdreq)
    }))

  }

  handleFileInput1(event: any) {
    var reader: FileReader = new FileReader();
    this.selectedFileName = event.target.files[0].name;
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = this.handleReaderLoaded1.bind(this);
  }
  handleFileInput2(event: any) {
    var reader: FileReader = new FileReader();
    this.selectedFileName = event.target.files[0].name;
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = this.handleReaderLoaded2.bind(this);
  }
  handleFileInput3(event: any) {
    var reader: FileReader = new FileReader();
    this.selectedFileName = event.target.files[0].name;
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = this.handleReaderLoaded3.bind(this);
  }
  handleFileInput4(event: any) {
    var reader: FileReader = new FileReader();
    this.selectedFileName = event.target.files[0].name;
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = this.handleReaderLoaded4.bind(this);
  }

  handleReaderLoaded1(e: any) {
    this.imageUrl1 = e.target.result;
    $('#imageUrl1').attr("src", e.target.result);
    $("#imageUrl1").show();
  }

  handleReaderLoaded2(e: any) {
    this.imageUrl2 = e.target.result;
    $('#imageUrl2').attr("src", e.target.result);
    $("#imageUrl2").show();
  }

  handleReaderLoaded3(e: any) {
    this.imageUrl3 = e.target.result;
    $('#imageUrl3').attr("src", e.target.result);
    $("#imageUrl3").show();
  }

  handleReaderLoaded4(e: any) {
    this.imageUrl4 = e.target.result;
    $('#imageUrl4').attr("src", e.target.result);
    $("#imageUrl4").show();
  }

  nextclk() {
    let count = 0
    if (this.deliver.controls['ufirstName'].value == '') {
      this.fnameerror = true;
      count++
    }
    else {
      this.fnameerror = false
    }

    if (this.deliver.controls['ulastName'].value == '') {
      this.lnameerror = true;
      count++
    }
    else {
      this.lnameerror = false;
    }

    if (this.deliver.controls['uemail'].value == '') {
      this.emailerro = true;
      count++
    }
    else {
      this.emailerro = false;
    }

    if (this.deliver.controls['uNumber'].value == '') {
      this.phnnumberr = true;
      count++
    }
    else {
      this.phnnumberr = false;
    }

    if (this.deliver.controls['uaddress'].value == '') {
      this.adderror = true;
      count++
    } else {
      this.adderror = false;
    }

    if (this.deliver.controls['ucity'].value == '') {
      this.cityerror = true;
      count++
    }
    else {
      this.cityerror = false;
    }

    if (this.deliver.controls['ustate'].value == '') {
      this.stateerror = true;
      count++
    }
    else {
      this.stateerror = false;
    }

    if (this.deliver.controls['uzipcode'].value == '') {
      this.ziperror = true;
      count++
    }
    else {
      this.ziperror = false;
    }

    if (this.deliver.controls['ucountryname'].value == '') {
      this.cntryerror = true;
      count++
    }
    else {
      this.cntryerror = false;
    }


    if (count == 0) {
      this.donform = false;
    }
    this.chkdreq;
    console.log(this.chkdreq)

  }



  donorsubmit() {
    const obj = Object.assign({})
    obj.firstName = this.deliver.controls['ufirstName'].value;
    obj.lastName = this.deliver.controls['ulastName'].value;
    obj.email = this.deliver.controls['uemail'].value;
    obj.phoneNumber = this.deliver.controls['uNumber'].value;
    obj.address = this.deliver.controls['uaddress'].value;
    obj.city = this.deliver.controls['ucity'].value;
    obj.state = this.deliver.controls['ustate'].value;
    obj.zipCode = this.deliver.controls['uzipcode'].value;
    obj.country = this.deliver.controls['ucountryname'].value;
    obj.donations = []
    console.log(this.chkdataQueryList)
    if (this.chkdataQueryList) {
      this.chkdataQueryList['_results'].forEach((x: any, i: number) => {
        // if (x.nativeElement.checked == true) {
        if (this.chkdreq[i].unitsdonatecntrl.value == '' || this.chkdreq[i].unitsdonatecntrl.value == null ||
          this.chkdreq[i].unitsdonatecntrl.value == undefined) {
          this.toast.error('Please Enter Units Want ot Donate');
          return;
        }
        const unitsdon = Object.assign({});
        unitsdon["organization_Id"] = this.chkdreq[i].organization_Id;
        unitsdon["requirement_Id"] = this.chkdreq[i].requirement_Id;
        unitsdon["requirementName"] = this.chkdreq[i].requirement;
        unitsdon["unitsDonated"] = this.chkdreq[i].unitsdonatecntrl.value;
        unitsdon["donationType"] = 'Goods';
        obj.donations.push(unitsdon)

        // }
      })
    }
    this.service.Donors(obj).subscribe(x => {
      if (x) {
        this.toast.success('Donations Submitted Successfully.')

      }
    })
  }

  numberOnly(event: any) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }



}

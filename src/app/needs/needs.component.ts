import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FundraiserService } from '../fundraiser.service';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-needs',
  templateUrl: './needs.component.html',
  styleUrl: './needs.component.scss'
})
export class NeedsComponent implements OnInit {
  orgdata: any;
  p:number = 1;
  itemsPerPage:number = 5;
  totalProduct:any
  
  constructor(private router: Router, private service: FundraiserService, private toast: ToastrService) {

  }
  ngOnInit(): void {
    this.GetOrgdetails();
    
  }

  GetOrgdetails() {
    this.service.GetOrganization().subscribe(x => {
      if (x) {
        this.orgdata = x.$values;
        this.totalProduct = this.orgdata?.length;
      }
    })
  }

  radchange(event: any, index: any) {
    if (event.target.checked == true) {
      this.orgdata.forEach((el: { checked: boolean; }, i: any) => {
        if (index == i) {
          el.checked = true;
        } else {
          el.checked = false
        }

      });

    }

  }

  reqchkchange(event: any, index: any, obj: any) {
    if (event.target.checked == true) {
      obj.checked = true
    }
    else if (event.target.checked == false) {
      obj.checked = false
    }
    console.log(this.orgdata)

  }

  Proceedclk() {
    const fndobj = this.orgdata.find((x: { checked: boolean; }) => x.checked === true);
    if (fndobj) {
      console.log(fndobj);
      const chkdt = fndobj?.requirements?.$values.find((c: { checked: boolean; }) => c.checked == true);
      if (chkdt) {
        this.router.navigate(['overview/uploadimg']);
      }
      else {
        this.toast.error('Please Select one requirement')
        return;
      }

      const senddtaa = this.orgdata.find((x: { checked: boolean; }) => x.checked == true);
      if (senddtaa) {
        this.service.sendselectedorg(senddtaa);
      }


    }
    else {
      this.toast.error('Please Select one organization')
      return;
    }

  }

}

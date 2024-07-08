import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NeedsComponent } from './needs/needs.component';
import { DashNavbarComponent } from './dash-navbar/dash-navbar.component';
import { UploadimageComponent } from './uploadimage/uploadimage.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { ReceivedonationsComponent } from './receivedonations/receivedonations.component';
import { InformationComponent } from './information/information.component';
import { CauseComponent } from './cause/cause.component';
import { DashcenterComponent } from './dashcenter/dashcenter.component';
import { OverviewComponent } from './overview/overview.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  // { path: '', redirectTo: '/fundraisers', pathMatch: 'full' },
  // { path: 'fundraisers', component: FundraiserListComponent }

  {path:'',pathMatch: 'full',redirectTo:'/overview/home'},
  {path:'overview',component:OverviewComponent,children:[
    {path:'home',component:DashcenterComponent},
    {path:'navbar',component:DashNavbarComponent},
    {path:'dashcenter',component:DashcenterComponent},
    {path:'need',component:NeedsComponent},
    {path:'uploadimg',component:UploadimageComponent},
    {path:'requirements',component:RequirementsComponent},
    {path:'receivedonations',component:ReceivedonationsComponent},
    {path:'information',component:InformationComponent},
    {path:'cause',component:CauseComponent},
    {path:'payment',component:PaymentComponent}
  ]},
  // {path:'home',component:DashboardComponent},
  // {path:'navbar',component:DashNavbarComponent},
  // {path:'dashcenter',component:DashcenterComponent},
  // {path:'need',component:NeedsComponent},
  // {path:'uploadimg',component:UploadimageComponent},
  // {path:'requirements',component:RequirementsComponent},
  // {path:'receivedonations',component:ReceivedonationsComponent},
  // {path:'information',component:InformationComponent},
  // {path:'cause',component:CauseComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }

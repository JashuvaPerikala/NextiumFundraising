import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NeedsComponent } from './needs/needs.component';
import { DashNavbarComponent } from './dash-navbar/dash-navbar.component';
import { UploadimageComponent } from './uploadimage/uploadimage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequirementsComponent } from './requirements/requirements.component';
import { ReceivedonationsComponent } from './receivedonations/receivedonations.component';
import { InformationComponent } from './information/information.component';
import { CauseComponent } from './cause/cause.component';
import { FooterComponent } from './footer/footer.component';
import { DashcenterComponent } from './dashcenter/dashcenter.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { OverviewComponent } from './overview/overview.component';
import { MatTableModule } from '@angular/material/table'; 
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaymentComponent } from './payment/payment.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { NextmspinnerComponent } from './nextmspinner/nextmspinner.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NeedsComponent,
    DashNavbarComponent,
    UploadimageComponent,
    RequirementsComponent,
    ReceivedonationsComponent,
    InformationComponent,
    CauseComponent,
    FooterComponent,
    DashcenterComponent,
    OverviewComponent,
    PaymentComponent,
    NextmspinnerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot( [],{ useHash: true }),
    RouterOutlet,
    CarouselModule,
    NgxPaginationModule,
    NgxPayPalModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

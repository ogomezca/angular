import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import {AppRoutingModule} from './app.routing';
import {NavbarModule} from './components/shared/navbar/navbar.module';
import {FooterModule} from './components/shared/footer/footer.module';
import {SidebarModule} from './components/sidebar/sidebar.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdscriptionComponent } from './components/adscription/adscription.component';
import { HomeComponent } from './components/home/home.component';
import { DeclarationComponent } from './components/declaration/declaration.component';
import { FiscalDeclarationComponent } from './components/fiscal-declaration/fiscal-declaration.component';
import { ViewDeclarationsComponent } from './components/view-declarations/view-declarations.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GeneralDataComponent } from './components/declaration/general-data/general-data.component';
import { CvDataComponent } from './components/declaration/cv-data/cv-data.component';
import { RelatedDeterminationComponent } from './components/declaration/related-determination/related-determination.component';
import { EconomicDependentDataComponent } from './components/declaration/economic-dependent-data/economic-dependent-data.component';
import { EmploymentDataComponent } from './components/declaration/employment-data/employment-data.component';
import { AnnualIncomeComponent } from './components/declaration/annual-income/annual-income.component';
import { PropertyComponent } from './components/declaration/property/property.component';
import { AutomotiveVehiclesComponent } from './components/declaration/automotive-vehicles/automotive-vehicles.component';
import { MovablePropertyComponent } from './components/declaration/movable-property/movable-property.component';
import { InvestmentsComponent } from './components/declaration/investments/investments.component';
import { DebtsComponent } from './components/declaration/debts/debts.component';
import { InterestConflictComponent } from './components/declaration/interest-conflict/interest-conflict.component';
import { WorkExperienceComponent } from './components/declaration/work-experience/work-experience.component';
import { MainContainerComponent } from './components/main-container/main-container.component';

// Services
import { AuthService } from './services/auth/auth.service';
import { UsersService } from './services/users/users.service';
import { RolesService } from './services/roles/roles.service';
import { RoleGuardService } from './services/role-guard/role-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdscriptionComponent,
    HomeComponent,
    DeclarationComponent,
    FiscalDeclarationComponent,
    ViewDeclarationsComponent,
    ProfileComponent,
    ChangePasswordComponent,
    GeneralDataComponent,
    CvDataComponent,
    RelatedDeterminationComponent,
    EconomicDependentDataComponent,
    EmploymentDataComponent,
    AnnualIncomeComponent,
    PropertyComponent,
    AutomotiveVehiclesComponent,
    MovablePropertyComponent,
    InvestmentsComponent,
    DebtsComponent,
    InterestConflictComponent,
    WorkExperienceComponent,
    MainContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    UsersService,
    RolesService,
    RoleGuardService
],
  bootstrap: [AppComponent]
})
export class AppModule { }

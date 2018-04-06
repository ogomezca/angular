import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

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
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { RoleGuardService } from './services/role-guard/role-guard.service';



const routes: Routes = [
    { path: 'main',                 component: MainContainerComponent, canActivate: [RoleGuardService], children: [
    { path: '1', component: HomeComponent },
    { path: '2', component: DeclarationComponent },
    { path: '3', component: FiscalDeclarationComponent },
    { path: '4', component: ViewDeclarationsComponent },
    { path: '5', component: ProfileComponent },

    { path: 'annual-income', component: AnnualIncomeComponent },
    { path: '8', component: AutomotiveVehiclesComponent },
    { path: 'cv-data', component: CvDataComponent },
    { path: '10', component: DebtsComponent },
    { path: 'economic-dependent-data', component: EconomicDependentDataComponent },
    { path: 'employment-data', component: EmploymentDataComponent },
    { path: 'general-data', component: GeneralDataComponent },
    { path: '14', component: InterestConflictComponent },
    { path: '15', component: InvestmentsComponent },
    { path: '16', component: MovablePropertyComponent },
    { path: '17', component: PropertyComponent },
    { path: 'related-determination', component: RelatedDeterminationComponent },
    { path: 'work-experience', component: WorkExperienceComponent }
]},
    { path: 'change-password', component: ChangePasswordComponent },
    { path: 'select-adscription', component: AdscriptionComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }

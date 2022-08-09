import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { OrganizationComponent } from './organization/organization.component';
import { InrusdPipe } from './inrusd.pipe';
import { ChildComponent } from './child/child.component';
import { AuthGuard } from './shared/auth.guard';


const routes:Routes=[{
  path:'employee',component:EmployeeComponent
},
{
  path:'organization',component:OrganizationComponent,canActivate:[AuthGuard]
},
{
  path:'',redirectTo:'employee',pathMatch:'full'
},
{
  path:'**',redirectTo:'employee'
}]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    OrganizationComponent,
    InrusdPipe,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

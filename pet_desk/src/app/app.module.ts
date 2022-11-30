import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VisitComponent } from './visit/visit.component';
import { UserComponent } from './user/user.component';
import { RxComponent } from './rx/rx.component';
import { PetComponent } from './pet/pet.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ApptDetailComponent } from './appt-detail/appt-detail.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { RxDetailComponent } from './rx-detail/rx-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { VistDetailComponent } from './vist-detail/vist-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    VisitComponent,
    UserComponent,
    RxComponent,
    PetComponent,
    AppointmentComponent,
    ApptDetailComponent,
    PetDetailComponent,
    RxDetailComponent,
    UserDetailComponent,
    VistDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

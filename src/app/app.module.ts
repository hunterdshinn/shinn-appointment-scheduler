import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentItemComponent } from './appointments/appointment-item/appointment-item.component';
import { AppointmentModalComponent } from './appointments/appointment-modal/appointment-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    AppointmentItemComponent,
    AppointmentModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppointmentsService } from './appointments.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
  providers: [AppointmentsService]
})
export class AppointmentsComponent implements OnInit, OnDestroy {
  // appointments array
  appointments = []
  // susbcription property 
  subscription: Subscription

  constructor(private apptsService: AppointmentsService) { }

  ngOnInit() {
    // populate the appointments array with the latest appointment data via subscription
    this.subscription = this.apptsService.appointmentsChanged
      .subscribe((appointments: []) => {
        this.appointments = appointments
      })
    // populate the appointments array from the appointments in the service
    this.appointments = this.apptsService.getAppointments()
  }

  ngOnDestroy() {
    // unsubscribe from the appointments subscription to prevent any data leaks
    this.subscription.unsubscribe()
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppointmentsService } from '../appointments.service';

@Component({
  selector: 'app-appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: ['./appointment-item.component.css']
})
export class AppointmentItemComponent implements OnInit {
  // recieving the appointment data and index
  @Input() appointment;
  @Input() index: number;
  // modal toggle property
  showModal = false;
  // appointment form in modal
  appointmentForm: FormGroup;

  constructor(private apptsService: AppointmentsService) { }

  ngOnInit() {
    // get the intitial appointment info -- setting existing values if they exist
    let appointmentName = ''
    let appointmentPhoneNumber = ''

    const appt = this.appointment

    appointmentName = appt.name
    appointmentPhoneNumber = appt.phoneNumber

    // defining the form controls -- populating them with existing apppointment data if it exists
    this.appointmentForm = new FormGroup({
      'name': new FormControl(appointmentName),
      'phoneNumber': new FormControl(appointmentPhoneNumber)
    })
  }

  // method to change background color of filled appointments
  getColor() {
    if (this.appointment.name || this.appointment.phoneNumber !== '') {
      return '#d9534f'
    }
  }

  // method to toggle the modal
  toggleModal = () => {
    this.showModal = !this.showModal;
  }

  onSubmit() {
    // modifying the existing appointment with the submitted form data
    this.appointment = {
      time: this.appointment.time,
      ...this.appointmentForm.value
    }

    // sending the filled / updated appointment to the appointmentsService  with an index so that 
    // I can replace the old appointment data object with the new appointment data object
    const filledAppointment = this.appointment
    const index = this.index
    this.apptsService.updateAppointments(filledAppointment, index)
  }


}

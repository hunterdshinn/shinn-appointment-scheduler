import { Subject } from 'rxjs';

export class AppointmentsService {
  // appointments changed event subject to broadcast latest appointments data
  appointmentsChanged = new Subject()
  // appointments data
  appointments = [
    {
      time: '9am',
      name: '',
      phoneNumber: ''
    },
    {
      time: '10am',
      name: '',
      phoneNumber: ''
    },
    {
      time: '11am',
      name: '',
      phoneNumber: ''
    },
    {
      time: '12pm',
      name: '',
      phoneNumber: ''
    },
    {
      time: '1pm',
      name: '',
      phoneNumber: ''
    },
    {
      time: '2pm',
      name: '',
      phoneNumber: ''
    },
    {
      time: '3pm',
      name: '',
      phoneNumber: ''
    },
    {
      time: '4pm',
      name: '',
      phoneNumber: ''
    },
    {
      time: '5pm',
      name: '',
      phoneNumber: ''
    }
  ]

  // method to get a copy of the appointments
  getAppointments() {
    return this.appointments.slice()
  }

  // method to update the appointments 
  updateAppointments(filledAppointment, index) {
    this.appointments[index] = filledAppointment
    // then broadcasting a copy of the updated appointments 
    this.appointmentsChanged.next(this.appointments.slice())
  }
}
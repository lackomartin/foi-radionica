import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { VehicleService } from '../services/vehicle.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  cars: any[] = []

  carFormGroup = new FormGroup({
    brand: new FormControl(''),
    model: new FormControl(''),
    km: new FormControl(''),
    firstRegistration: new FormControl(''),
    vin: new FormControl('')
  })

  constructor (private vehicleService: VehicleService) {}

  ngOnInit () {
    this.getVehicles()
  }

  getVehicles () {
    this.cars = this.vehicleService.getVehicles() // TODO: REMOVE FOR TASK LEVEL 2
  }

  addNewVehicle () {
    const newCar = this.carFormGroup.value
    this.cars.push(newCar)

    /* this.vehicleService.addNewVehicle(newCar).subscribe((response: any) => {
      this.cars.push(response)
    }) */
  }

  deleteVehicle (id: number) {
    const carIndex = this.cars.findIndex(car => car.id === id)
    this.cars.splice(carIndex, 1)

    /* this.vehicleService.deleteVehicle(id).subscribe(_ => {
      const carIndex = this.cars.findIndex(car => car.id === id)
      this.cars.splice(carIndex, 1)
    }) */
  }

}
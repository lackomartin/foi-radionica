import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})

export class VehicleService {

  // TODO: Delete after test
  cars = [
    { 
      id: 1,
      brand: 'BMW',
      model: 'x6',
      km: '15 000',
      firstRegistration: '1.1.2022.',
      vin: '543534534534'
    },
    { 
      id: 2,
      brand: 'Audi',
      model: 'A6',
      km: '15 000',
      firstRegistration: '1.1.2022.',
      vin: '543534534534'
    },
    { 
      id: 3,
      brand: 'Opel',
      model: 'Vectra',
      km: '15 000',
      firstRegistration: '1.1.2022.',
      vin: '543534534534'
    }
  ]
  apiUrl = 'http://' + environment.server + ':4200'

  constructor(private http: HttpClient) { }

  getVehicles () {
    return this.cars
    // return this.http.get(`${this.apiUrl}/v1/cars`)
  }

  addNewVehicle (vehicle: any) {
    return // this.http.post(`${this.apiUrl}/v1/cars`, vehicle)
  }

  deleteVehicle (id: number) {
    return // this.http.delete(`${this.apiUrl}/v2/cars/${id}`)
  }

}
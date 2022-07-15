import {Injectable} from '@angular/core';
import {Vehicle} from '../models/vehicle.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export default class VehiclesService {
  constructor(private http: HttpClient) {
  }

  getList(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>('/api/vehicles/list');
  }

  createVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>('/api/vehicles/create', vehicle);
  }

  getVehicleById(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>('/api/vehicles/item/' + encodeURIComponent(id));
  }

  deleteVehicleById(id: string): Observable<any> {
    return this.http.delete<any>('/api/vehicles/item/' + encodeURIComponent(id));
  }

  updateVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.put<Vehicle>('/api/vehicles/item/' + encodeURIComponent(vehicle.id), vehicle);
  }
}

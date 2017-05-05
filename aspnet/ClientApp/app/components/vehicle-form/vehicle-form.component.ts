import { VehicleFormService } from './vehicle-form.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  makes: any[];
  models: any[];
  features: any[];
  vehicles: any = { };
  constructor(private vehicleService: VehicleFormService) { }

  ngOnInit() {
    this.vehicleService.getMakes().subscribe(makes => {
      this.makes = makes;
    });

    this.vehicleService.getFeatures().subscribe(features => {
      this.features = features;
    })
  }

  onVehicleChange(){
    let selectedVehicle = this.makes.find(m => m.id == this.vehicles.make);
    this.models = selectedVehicle ? selectedVehicle.models : [];
    
  }

}

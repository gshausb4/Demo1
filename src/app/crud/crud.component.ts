import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { IProperty } from './Property';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit{

  propertytype: string = "";
  propertyrent: string = "";

  PropertyDetails: IProperty[] = [];
  constructor(private crudService: CrudService){}

  ngOnInit(): void {
    this.crudService.getAPIPropertyDetails().subscribe((Response => {
      this.PropertyDetails = Response;
      //console.log(Response);
    }));
  }
  
  filteredProperties(): IProperty[]{
    return this.PropertyDetails.filter(property => property.Type.toLowerCase().includes(this.propertytype.toLowerCase()));
  }

  filteredPropertiesBasedOnRent(): IProperty[]{
    return this.PropertyDetails.filter(property => property.Rent < this.propertyrent);
  }

}

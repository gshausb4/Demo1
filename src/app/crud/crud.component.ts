import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CrudService } from './crud.service';
import { IProperty } from './models/Property';

enum BHK {
  EMPTY = 'BHK',
  EASY= '1BHK',
  NORMAL = '2BHK',
  HARD = '3BHK'
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit{

  propertyDetails: IProperty[] = [];  
  propData: IProperty = {} as IProperty;
  newProperty: IProperty = {} as IProperty; // Create a new instance of IProperty for form data
  constructor(private crudService: CrudService,private formBuilder: FormBuilder){}
  
  rentForm = this.formBuilder.group({
    formrentVar: 0
  });

  globalTempProperties: IProperty[] = [];
  onSubmitType(){
    this.globalTempProperties = this.propertyDetails.filter(property => property.Type.toLowerCase().includes(this.bhk.toString().toLowerCase()));
    console.log(this.globalTempProperties);
  }

  deleteProperty(propertyId: number) {
    if (confirm('Are you sure you want to delete this property?')) {
      this.crudService.deleteProperty(propertyId).subscribe(() => {
        console.log('Property deleted successfully');
        // Refresh the data after deletion
        this.getJsonData();
      }, error => {
        console.error('Error deleting property:', error);
      });
    }
  }

  onSubmit() {
    console.log(this.newProperty.PropID,this.newProperty.Place,this.newProperty.Rent,this.newProperty.Type);
    // Assuming your service method to post data is named writeData
    this.propData.PropID = this.newProperty.PropID;
    this.propData.Type = this.newProperty.Type;
    this.propData.Rent = this.newProperty.Rent;
    this.propData.Place = this.newProperty.Place;

    this.crudService.writeData(this.propData).subscribe(
      (data) => {
        console.log(data);
        this.propertyDetails.push(this.propData);
        }
    );
  }

  sendrent: number = 0;
  onSubmitRent(){
    // console.log(this.rentForm.value.formrentVar);
    this.sendrent = <number>this.rentForm.value.formrentVar;
    this.globalTempProperties = this.propertyDetails.filter(property => property.Rent <= this.sendrent);
    // this.rentForm.reset();
  }

  getJsonData(){
    this.crudService.getPropertiesData().subscribe(data => {
      this.propertyDetails = data;
    });
  }

  postid : number = 0;
  ngOnInit(): void {
    this.getJsonData();
  }
  
  filteredProperties(): IProperty[]{
    return this.globalTempProperties;
  }

  display(){
    console.log(this.bhk.toString());
    console.log(this.bhkopted.toString());
  }
  public bhk: BHK = BHK.EMPTY; 
  bhkopted = Object.values(BHK);
}
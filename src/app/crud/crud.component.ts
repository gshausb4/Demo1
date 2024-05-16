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

  //temprop: IProperty = {"PROPId":50,"Type":"3BHK","Rent": 30000,"Place":"LOC30"};
  globalTempProperties: IProperty[] = [];
  onSubmitType(){
    // console.log(this.typeForm.value.formtypeVar);
    this.globalTempProperties = this.propertyDetails.filter(property => property.Type.toLowerCase().includes(this.bhk.toString().toLowerCase()));
    // this.typeForm.reset();
    console.log(this.globalTempProperties);
    // this.crudService.postAPIPropertyDetails(this.temprop).subscribe(
      
    // );
  }

  onSubmit() {
    console.log(this.newProperty.PROPId,this.newProperty.Place,this.newProperty.Rent,this.newProperty.Type);
    // Assuming your service method to post data is named writeData
    this.propData.PROPId = this.newProperty.PROPId;
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
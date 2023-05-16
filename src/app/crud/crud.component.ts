import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CrudService } from './crud.service';
import { IProperty } from './Property';
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

  PropertyDetails: IProperty[] = [];
  constructor(private crudService: CrudService,private formBuilder: FormBuilder){}

  
  
  rentForm = this.formBuilder.group({
    formrentVar: 0
  });
  temprop: IProperty = {"PROPId":50,"Type":"3BHK","Rent": 30000,"Place":"LOC30"};
  globalTempProperties: IProperty[] = [];
  onSubmitType(){
    // console.log(this.typeForm.value.formtypeVar);
    this.globalTempProperties = this.PropertyDetails.filter(property => property.Type.toLowerCase().includes(this.bhk.toString().toLowerCase()));
    // this.typeForm.reset();
    console.log(this.globalTempProperties);
    // this.crudService.postAPIPropertyDetails(this.temprop).subscribe(
      
    // );
  }

  sendrent: number = 0;
  onSubmitRent(){
    // console.log(this.rentForm.value.formrentVar);
    this.sendrent = <number>this.rentForm.value.formrentVar;
    this.globalTempProperties = this.PropertyDetails.filter(property => property.Rent <= this.sendrent);
    // this.rentForm.reset();
  }
  postid : number = 0;
  ngOnInit(): void {
    this.crudService.getAPIPropertyDetails().subscribe((Response => {
      this.PropertyDetails = Response;
      // this.crudService.postAPIPropertyDetails(this.temprop).subscribe(data =>
      //   this.postid = this.temprop.PROPId);
    }));
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
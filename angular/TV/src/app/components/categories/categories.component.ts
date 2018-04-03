import { Component, OnInit } from '@angular/core';
import {GetdataService} from '../../services/getdata.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  category:Category[];
  title:string;
  months:string[];
  isavailable:boolean;

  constructor(private getdataService:GetdataService) { }

  ngOnInit() {
      this.title = 'Mo P';
      this.months = ["January", "Feburary", "March", "April", "May",
               "June", "July", "August", "September",
               "October", "November", "December"];
      this.isavailable = true;

      this.getdataService.getCategory().subscribe((category) => {
        this.category=  category;
        console.log(  this.category);
      },
    err=>{
      console.log(err);
      return false;
    });
  }

  onClick(){
    this.title='brad traversy';

    }

  // declared array of months.



}

interface Category{
  id:number,
  category_name:string,
  image:string,
  image_path:string
}

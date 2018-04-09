import { Component, OnInit } from '@angular/core';
import {GetdataService} from '../../services/getdata.service';

import {DeletedataService} from '../../services/deletedata.service';

import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  category:Category[];
  title:string;
  deletedCatID:string;
  deletedCatCategory:string;
  editedCategory:string;
  months:string[];
  isavailable:boolean;
  categorydata:object;

  constructor(private getdataService:GetdataService,private deletedataService:DeletedataService, private http:Http) {
    setInterval(() => {
      this.getdataService.getCategory().subscribe((category) => {
        this.category=  category;
      //  console.log(  this.category);
      },
    err=>{
      console.log(err);
      return false;
    });
   }, 500);
  }

  ngOnInit() {
      this.title = 'Mo P';
      this.months = ["January", "Feburary", "March", "April", "May",
               "June", "July", "August", "September",
               "October", "November", "December"];
      this.isavailable = true;


  }

  onClick(){
    this.title='brad traversy';

    }

    deleteCategory = function(deletedCatID,deletedCatCategory) {
         //just added console.log which will display the event details in browser on click of the button.
         console.log("Deleted Category "+deletedCatCategory);
         this.deletedataService.deleteCategory(deletedCatID,deletedCatCategory).subscribe((res:Response)=>{
           console.log(res);
         });
      }

      addCategory = function(categorydata) {
           //just added console.log which will display the event details in browser on click of the button.
           console.log(categorydata)
        }



      editCategory(editedCategory) {
           //just added console.log which will display the event details in browser on click of the button.
           alert("Edit "+editedCategory);
        }

  // declared array of months.

//  public uploader:FileUploader = new FileUploader({url:'http://localhost:3000/adds/add_category'});

  // create the uploader
  // public uploader = new FileUploader({url:'http://localhost:3000/adds/add_category'}).onBuildItemForm = (item, form) => {
  //   form.append("category", "fkm");
  // };

  // Add in the other upload form parameters.

}

interface Category{
  id:number,
  category_name:string,
  image:string,
  image_path:string
}

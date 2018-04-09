import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdddataService {

  constructor(private http:Http) { }

  addCategory(id,category){
    return this.http.delete("http://localhost:3000/deletes/delete_category/"+id+"/"+category)
    .map(res => res.json());
  }
}

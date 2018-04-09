import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';

import { GetdataService } from './services/getdata.service';
import { DeletedataService } from './services/deletedata.service';
import { AdddataService } from './services/adddata.service';

import { MaterializeModule } from 'angular2-materialize';

import { FormsModule } from '@angular/forms';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriesComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterializeModule,
    FormsModule
  ],
  providers: [GetdataService,DeletedataService,AdddataService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

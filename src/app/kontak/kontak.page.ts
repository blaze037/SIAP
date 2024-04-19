import { Component, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/shared/app-settings';

@Component({
  selector: 'app-kontak',
  templateUrl: './kontak.page.html',
  styleUrls: ['./kontak.page.scss'],
})
export class KontakPage{
  data:any=[];
  constructor(private http: HttpClient,) { 
   
    this.http.get(AppSettings.API_URL + 'kontak', AppSettings.httpOptions).subscribe((data: any) => {
        this.data=data;
      },(error) => {
        console.error(error);
    }); 
  }

 

}

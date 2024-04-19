import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { AppSettings } from 'src/shared/app-settings';
@Component({
  selector: 'app-olahraga',
  templateUrl: './olahraga.page.html',
  styleUrls: ['./olahraga.page.scss'],
})
export class OlahragaPage{
  cabor:any=[];
  cari:any={keyword:'',cabor:'Semua',kategori:'Semua'};
  searchstate=0;
  constructor(private navCtrl: NavController,
    private http: HttpClient) { 
      this.http.get(AppSettings.API_URL + 'cabor', AppSettings.httpOptions).subscribe((data: any) => {
        this.cabor = data;
      },(error) => {
        console.error(error);
      });
  }
  cariData(){
    this.navigateTo("olahraga/"+this.cari.cabor+"/"+this.cari.kategori+"/"+this.cari.keyword);
  }
  imageurl(url:string){
    return AppSettings.IMAGE_URL+url;
  }
  navigateTo(url : String) {
    this.navCtrl.navigateForward('/tabs/'+url);
  }
}

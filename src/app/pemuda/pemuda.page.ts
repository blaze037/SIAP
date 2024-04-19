import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { AppSettings } from 'src/shared/app-settings';
@Component({
  selector: 'app-pemuda',
  templateUrl: './pemuda.page.html',
  styleUrls: ['./pemuda.page.scss'],
})
export class PemudaPage{
  bidang:any=[];
  cari:any={keyword:'',bidang:'Semua'};
  searchstate=0;
  constructor(private navCtrl: NavController,
    private http: HttpClient) { 
      this.http.get(AppSettings.API_URL + 'bidang', AppSettings.httpOptions).subscribe((data: any) => {
        this.bidang = data;
      },(error) => {
        console.error(error);
      });
  }
  cariData(){
    this.navigateTo("pemuda/"+this.cari.bidang+"/"+this.cari.keyword);
  }
  imageurl(url:string){
    return AppSettings.IMAGE_URL+url;
  }
  navigateTo(url : String) {
    this.navCtrl.navigateForward('/tabs/'+url);
  }
}

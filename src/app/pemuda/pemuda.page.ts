import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { AppSettings } from 'src/shared/app-settings';
import { ActivatedRoute  } from '@angular/router';
import { LoadingHandler } from 'src/shared/loading-handler';
@Component({
  selector: 'app-pemuda',
  templateUrl: './pemuda.page.html',
  styleUrls: ['./pemuda.page.scss'],
})
export class PemudaPage{
    bidang:any=[];
    cari:any={keyword:''};
    searchstate=0;
    items :any=[];
    page=1;
    state=1;
  constructor(private navCtrl: NavController,
    private http: HttpClient,
    private loadingHandler : LoadingHandler,
    private route: ActivatedRoute) { 
      this.state=1;
      this.page=1;
      this.items=[];
      this.getData();
  }
  cariData(event:any){
    if(event.keyCode==13){
      this.state=1;
      this.page=1;
      this.items=[];
      this.getData();
    }
  }
  handleRefresh(event:any) {
    this.page=1;
    this.items=[];
    this.getData();
    setTimeout(() => {
      event.target.complete();
    }, 100);
  }
  doInfinite(infiniteScroll:any) {
    setTimeout(() => {
    this.getData();
    infiniteScroll.complete();
    }, 500);
  }
  getData(){
    if(this.state){
      this.state=0;
      this.loadingHandler.show();
      let keyword=this.cari.keyword;
      if(keyword.trim()==""){keyword='-'}
      this.http.get(AppSettings.API_URL + "pemuda/"+this.page+"/"+keyword, AppSettings.httpOptions).subscribe((data: any) => {
        if(data.length){
          for(let x in data){
            this.items.push(data[x]);
          }
          this.page++;
          this.state=1;
        }
        this.loadingHandler.hide();
      },(error) => {
        console.error(error);
        this.loadingHandler.hide();
        this.state=1;
      });
    }
  }
  imageurl(url:string){
    return AppSettings.IMAGE_URL+url;
  }
}

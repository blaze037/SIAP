import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { AppSettings } from 'src/shared/app-settings';
import { ActivatedRoute  } from '@angular/router';
import { LoadingHandler } from 'src/shared/loading-handler';
@Component({
  selector: 'app-pemuda',
  templateUrl: './pemudadetail.page.html',
  styleUrls: ['./pemuda.page.scss'],
})
export class PemudaDetailPage{
    bidang:any=[];
    cari:any={keyword:'',bidang:'Semua',kategori:'Semua'};
    searchstate=0;
    items :any=[];
    page=1;
    state=1;
  constructor(private navCtrl: NavController,
    private http: HttpClient,
    private loadingHandler : LoadingHandler,
    private route: ActivatedRoute) { 
      this.http.get(AppSettings.API_URL + 'bidang', AppSettings.httpOptions).subscribe((data: any) => {
        this.bidang = data;
      },(error) => {
        console.error(error);
      });
      if(this.route.snapshot.paramMap.get('bidang')){
        this.cari.bidang=this.route.snapshot.paramMap.get('bidang');
      }
      if(this.route.snapshot.paramMap.get('keyword')){
        this.cari.keyword=this.route.snapshot.paramMap.get('keyword');
      }
      this.cariData();
  }
  cariData(){
    this.searchstate=0;
    this.state=1;
    this.page=1;
    this.items=[];
    this.getData();
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
      this.http.get(AppSettings.API_URL + 'pemuda/'+this.cari.bidang+"/"+this.page+"/"+keyword, AppSettings.httpOptions).subscribe((data: any) => {
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

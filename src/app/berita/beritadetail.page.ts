import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/shared/app-settings';
import { LoadingHandler } from 'src/shared/loading-handler';

@Component({
  selector: 'app-berita',
  templateUrl: './beritadetail.page.html',
  styleUrls: ['./berita.page.scss'],
})
export class BeritaDetailPage {
  items :any=[];
  page=1;
  keyword="";
  state=1;
  constructor(private navCtrl: NavController,
    private http: HttpClient,
    private loadingHandler : LoadingHandler,) {
      this.cariData();  
  }
  cariData(){
    this.page=1;
    this.getData();
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
      let keyword=this.keyword;
      if(keyword.trim()==""){keyword='-'}
      this.http.get(AppSettings.API_URL + 'artikel/'+this.page+"/"+keyword, AppSettings.httpOptions).subscribe((data: any) => {
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

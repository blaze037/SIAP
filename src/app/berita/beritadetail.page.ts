import { Component } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/shared/app-settings';
import { LoadingHandler } from 'src/shared/loading-handler';

@Component({
  selector: 'app-berita',
  templateUrl: './beritadetail.page.html',
  styleUrls: ['./berita.page.scss'],
})
export class BeritaDetailPage {
  data :any=[];
 
  constructor(
    private http: HttpClient,
    private loadingHandler : LoadingHandler,
    private route: ActivatedRoute ) {
    this.loadingHandler.show();
   
    this.http.get(AppSettings.API_URL + 'artikeldetail/'+this.route.snapshot.paramMap.get('id'), AppSettings.httpOptions).subscribe((data: any) => {
        this.data=data;
        this.loadingHandler.hide();
      },(error) => {
        console.error(error);
        this.loadingHandler.hide();
    }); 
  }
  
  imageurl(url:string){
    return AppSettings.IMAGE_URL+url;
  }

}

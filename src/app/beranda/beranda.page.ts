import { Component, } from '@angular/core';
import { NavController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { IonicSlides } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/shared/app-settings';
import { LoadingHandler } from 'src/shared/loading-handler';
import OneSignal from 'onesignal-cordova-plugin';
register();
@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.page.html',
  styleUrls: ['./beranda.page.scss'],
})
export class BerandaPage {
  swiperModules = [IonicSlides];
  
  
  cabor:any=[];
  pemuda:any=[];
  banner:any=[];
  constructor(private navCtrl: NavController,
    private http: HttpClient,
    private loadingHandler : LoadingHandler,) { 
      //this.loadingHandler.show();
      this.http.get(AppSettings.API_URL + 'beranda', AppSettings.httpOptions).subscribe((data: any) => {
        this.cabor = data.cabor;
        this.pemuda = data.pemuda;
        this.banner = data.banner;
        //this.loadingHandler.hide();
      },(error) => {
        console.error(error);
        //this.loadingHandler.hide();
      });
      setTimeout(()=>{
        //OneSignal.Debug.setLogLevel(6);
        try{
        OneSignal.initialize("a93f0baf-a4d4-422e-8fcf-d5cb8eb21471");
        let myClickListener = async function(event:any) {
          let notificationData = JSON.stringify(event);
        };
        OneSignal.Notifications.addEventListener("click", myClickListener);
        OneSignal.Notifications.requestPermission(true).then((accepted: boolean) => {
          console.log("User accepted notifications: " + accepted);
        });
        }catch(ex){
          console.log(ex);
        }
        //OneSignal.User.addTags({member: this.profile?.id+""});
      },1000);
  }

  
  imageurl(url:string){
    return AppSettings.IMAGE_URL+url;
  }
  navigateTo(url : String) {
    this.navCtrl.navigateForward('/tabs/'+url);
  }
  
}

import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class LoadingHandler {

    private loaderLoading = false;
    private loader:any;
    constructor(public loading: LoadingController
    ) { }
    async show() {
        this.loader = await this.loading.create({
        });
        this.loader.present();
    }

    public hide() {
        const interval = setInterval(() => {
            if (this.loader) {
                this.loader.dismiss().then(() => { this.loader = null; clearInterval(interval)});
            } else {
                clearInterval(interval);
            }
        }, 200);
    }

}

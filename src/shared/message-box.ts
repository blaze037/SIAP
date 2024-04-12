import { AlertController, ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class MessageBox {
    constructor(
      public alertCtrl: AlertController,
      public toast_controller : ToastController,
      public router : Router
    ) { }

    async warn(title: string, substitle: string) {
      return new Promise(async (resolve) => {
        const confirm = await this.alertCtrl.create({
          header: title,
          message: substitle,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                return resolve(false);
              },
            },
            {
              text: 'OK',
              handler: () => {
                return resolve(true);
              },
            },
          ],
        });
        await confirm.present();
      });
    }

    async show(title: string, substitle: string) {
        const alert = await this.alertCtrl.create({
            header: title,
            message: substitle,
            buttons: ['OK']
          });

        await alert.present();

        const { role } = await alert.onDidDismiss();
        console.log('onDidDismiss resolved with role', role);
    }
    async toast(msg: string, position: "top" | "bottom" | "middle" | undefined) {
        const t = await this.toast_controller.create({
          message: msg,
          duration: 3000,
          position: position
        });

        t.present();
    }
    async customShow(title: string, substitle: string, url : string) {
      const alert = await this.alertCtrl.create({
          header: title,
          message: substitle,
          buttons: [{
            text: 'OK',
            handler: () => {
              this.router.navigateByUrl(url);
            }
          }]
        });

      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
    async deleteShow(title: string, substitle: string) {
      const alert = await this.alertCtrl.create({
          header: title,
          message: substitle,
          buttons: [{
            text: 'OK',
            handler: () => {
              location.reload();
            }
          }]
        });

      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
    async confirmDelete(itemName: string): Promise<boolean> {
      if(itemName == ""){
        itemName = "data ini";
      }
      return new Promise(async (resolve) => {
        const alert = await this.alertCtrl.create({
          header: 'Konfirmasi',
          message: `Apakah Anda yakin ingin menghapus ${itemName}?`,
          buttons: [
            {
              text: 'Tidak',
              role: 'cancel',
              handler: () => {
                resolve(false);
              }
            },
            {
              text: 'Ya',
              handler: () => {
                resolve(true);
              }
            }
          ]
        });

        await alert.present();
      });
    }
    async confirmCheckOut(): Promise<boolean> {
      return new Promise(async (resolve) => {
        const alert = await this.alertCtrl.create({
          header: 'Konfirmasi',
          message: `Apakah data barang yang ingin dibeli sudah benar?`,
          buttons: [
            {
              text: 'Tidak',
              role: 'cancel',
              handler: () => {
                resolve(false);
              }
            },
            {
              text: 'Ya',
              handler: () => {
                resolve(true);
              }
            }
          ]
        });

        await alert.present();
      });
    }
    async confirmTambah(): Promise<boolean> {
      return new Promise(async (resolve) => {
        const alert = await this.alertCtrl.create({
          header: 'Konfirmasi',
          message: `Apakah data yang diisi sudah benar?`,
          buttons: [
            {
              text: 'Tidak',
              role: 'cancel',
              handler: () => {
                resolve(false);
              }
            },
            {
              text: 'Ya',
              handler: () => {
                resolve(true);
              }
            }
          ]
        });

        await alert.present();
      });
    }
}

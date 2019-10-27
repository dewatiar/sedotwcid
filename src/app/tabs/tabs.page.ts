import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public alertController: AlertController) {}
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Se.WC ID',
      subHeader: 'Kepuasan Pengguna',
      message: 'Apakah Anda Puas Dengan Pelayanan Kami?',
      buttons: ['OK']
    });

    await alert.present();
  }
}

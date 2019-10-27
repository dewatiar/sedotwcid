import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3-detail',
  templateUrl: 'tab3-detail.page.html',
  styleUrls: ['tab3-detail.page.scss']
})
export class Tab3DetailPage {
     public namalengkap: any;
     public alamat: any;
     public kontak: any;
     public Gender: string;
     public diamter: any;
     public form = [
        { val: 'Pepperoni', isChecked: true },
        { val: 'Sausage', isChecked: false },
        { val: 'Mushroom', isChecked: false }
      ];
  constructor() {}

}




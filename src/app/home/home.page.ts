import { Component, inject, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';

import { DataService, Message } from '../services/data.service';
import { SchoolsService } from '../search/service/schools.service';
import { SchoolForm } from '../search/service/school-form';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public data = inject(DataService);

  constructor(private schools: SchoolsService, private schooldata: SchoolForm) {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getSchools(): Message[] {
    return this.data.getSchools();
  }

  nextPage(){ //Vai para próxima página
    this.schools.getSchools(this.data.formdata.name, this.data.formdata.code, this.data.actualpage+1)
  }

  backPage(){ //Obtém página anterior
    this.schools.getSchools(this.data.formdata.name, this.data.formdata.code, this.data.actualpage-1)
  }
}

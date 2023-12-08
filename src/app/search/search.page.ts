import { Component, OnInit, inject } from '@angular/core';
import { SchoolForm } from './service/school-form';
import { SchoolsService } from './service/schools.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  schoolForm!: SchoolForm;
  private data = inject(DataService);

  constructor(private router: Router, private schools: SchoolsService) { }

  ngOnInit() {
    this.schoolForm = new SchoolForm()
  }

  onSubmit(){ //Busca na API com os parâmetros do formulário
    // console.log(this.schoolForm)
    this.data.formdata = this.schoolForm
    this.schools.getSchools(this.schoolForm.name, this.schoolForm.code, 1)
    this.router.navigate(['/home'])
  }
}

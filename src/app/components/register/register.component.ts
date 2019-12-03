import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UserService} from '../../services/user.service'
import { User } from '../models/user.model';
import { CountryService } from 'src/app/services/country.service';
import { Country } from '../models/country';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formG: FormGroup;
  user: User = new User();
  countryList: Country;

  constructor(
    private formB: FormBuilder, //se encarga de que los gromgroup sean visibles
    private userService: UserService,
    private countryService: CountryService
  ) { }

  ngOnInit() {
    this.buildForm();
    //this.countryList.push(new Country(1, '')) ver pagina de typescript para ver operaciones con arreglos
    this.getCountry();
  }

  buildForm() {
    // ya hemos inicializado esta variable en el constructor y tiene esa propiedad .group
    this.formG = this.formB.group({
      name: [null, Validators.required],
      lastName: [null, Validators.required],
      userName: [null, Validators.required],
      pws: [null, Validators.required],
      country: null
    });
  }

  saveUser() {
    this.user.name = this.formG.get('name').value; //valor en comillas es el nombre del control en el html uwu
    this.user.lastName = this.formG.get('lastName').value;
    this.user.userName = this.formG.get('userName').value;
    this.user.pws = this.formG.get('pws').value;
    this.user.countryId = this.formG.get('country').value;


    this.userService.save(this.user).subscribe(
      data => {
        console.log('se le guardo el usuario ', data);
      },
      error => {
        console.log('error guardando el usuario', error);
      }
    );
  }

  getCountry() {
    this.countryService.getCountry().subscribe(
      data => {
        this.countryList = data;
      },
      error => {
        console.log('error al obtener país', error);
      }
    );
  }

}

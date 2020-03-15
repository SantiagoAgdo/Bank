import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  despliegueAlerta: boolean = false;
  usuario: string = "";
  contrasena: string = "";
  formGroup: FormGroup;
  formGroupDetail: FormGroup;
  loginRight: boolean = false;
  usuarioPrueba: string = "santiago123";
  passPrueba: string = "123456"
  day: Date;
  days: string;
  registroTrans: boolean = false;
  consulta: boolean = false;
  edit: boolean = false;

  formControlArray = {
    'user': new FormControl('', [Validators.minLength(1)]),
    'pass': new FormControl('', [Validators.minLength(1)])
  }

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formGroup = new FormGroup(this.formControlArray);
  }
  ngOnInit() {
    this.day = this.getDia();
    console.log(this.day);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(this.day);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(this.day);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(this.day);

    this.days = `${da}-${mo}-${ye}`
  }
  parseDia() {

  }
  async getData() {
    this.usuario = this.formGroup.controls['user'].value;
    this.contrasena = this.formGroup.controls['pass'].value;
  }
  onSubmit(customerData) {
    this.getData();
    // this.formGroup.reset();
    this.changePage(this.usuario, this.contrasena);
  }
  changePage(user: string, pass: string) {
    if (user == this.usuarioPrueba && pass == this.passPrueba) {
      this.loginRight = true;
    } else {
      alert("Contrasena y/o usuario Incorrecto");
    }
  }
  getDia(): Date {
    var today = new Date();
    var dd = String(today.getDate());
    var mm = String(today.getMonth());
    var yyyy = today.getFullYear();
    return new Date(yyyy, parseInt(mm), parseInt(dd))
  }
  forget() {
    this.despliegueAlerta = true;
    setTimeout(() => {
      this.despliegueAlerta = false;
    }, 5000);
  }
  despliegueMenu(val: number) {
    switch (val) {
      case 1:
        this.registroTrans = true;
        break;
      case 2:
        this.consulta = true;
        break;
      case 3:
        this.edit = true;
        break;
      default:
        this.registroTrans = false;
        this.consulta = false;
        this.edit = false;
    }
  }
}

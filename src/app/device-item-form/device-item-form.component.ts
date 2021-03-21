import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-device-item-form',
  templateUrl: './device-item-form.component.html',
  styleUrls: ['./device-item-form.component.scss']
})
export class DeviceItemFormComponent implements OnInit {
  form: FormGroup;

  onSubmit(deviceItem){
    console.log(deviceItem);
  }

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl("Device",Validators.compose([Validators.pattern('[\\w\\-\\s\\/]+')
                                                        ,Validators.required])),
      ostype: new FormControl(null),
      battery: new FormControl(null),
      memory: new FormControl(null)
    });

    
  }

  nameValidator(control: FormControl){
    if (control.value.trim().lenght < 2){
      return null;
    }
    else{
      
    }
  }

}

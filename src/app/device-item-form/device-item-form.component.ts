import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DeviceItemService } from '../device-item.service';


@Component({
  selector: 'app-device-item-form',
  templateUrl: './device-item-form.component.html',
  styleUrls: ['./device-item-form.component.scss']
})
export class DeviceItemFormComponent implements OnInit {
  form: FormGroup;

  

  constructor(private formBuilder: FormBuilder,
    private deviceItemService: DeviceItemService) {
    
   }

   

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control("Device",Validators.compose([Validators.pattern('[\\w\\-\\s\\/]+')
                                                        ,Validators.required,this.nameValidator])),
      OsType: this.formBuilder.control(null),
      battery: this.formBuilder.control(null),
      memory: this.formBuilder.control(null)
    });

    
  }

  nameValidator(control: FormControl){
    if (control.value.trim().length < 2){
      return {name: true};
    }
    else{
      return null;
    }
  }
  
  onSubmit(deviceItem){
    console.log(deviceItem);
    this.deviceItemService.add(deviceItem);
  }
}

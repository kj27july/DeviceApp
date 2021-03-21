import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"

import { BatteryLevel } from './battery.directive'

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DeviceItemFormComponent } from './device-item-form/device-item-form.component';
import { DeviceItemComponent } from './device-item/device-item.component';
import { DeviceItemListComponent } from './device-item-list/device-item-list.component'



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent, 
    DeviceItemFormComponent, 
    DeviceItemComponent, 
    DeviceItemListComponent,
    BatteryLevel
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

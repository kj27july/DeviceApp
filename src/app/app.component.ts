import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DeviceApp';

  firstDeviceItem = {
    Id:1,
    Name: "Device 1",
    OsType: "Os 1",
    Battery : 100,
    Memory:"4 GB"
  }

  onDeviceItemDelete(deviceItem){}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-item-list',
  templateUrl: './device-item-list.component.html',
  styleUrls: ['./device-item-list.component.scss']
})
export class DeviceItemListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  deviceItems = [
    {
      Id:1,
      Name: "Device 1",
      OsType: "Os 1",
      Battery : 100,
      Memory:"4 GB"
    },

    {
      Id:2,
      Name: "Device 2",
      OsType: "Os 2",
      Battery : 50,
      Memory:"16 GB"
    },
    {
      Id:3,
      Name: "Device 3",
      OsType: "Os 1",
      Battery : 10,
      Memory:"4 GB"
    },
    {
      Id:4,
      Name: "Device 1",
      OsType: "Os 1",
      Battery : 100,
      Memory:"4 GB"
    },
    {
      Id:5,
      Name: "Device 1",
      OsType: null,
      Battery : 100,
      Memory:"4 GB"
    }

  ]

}

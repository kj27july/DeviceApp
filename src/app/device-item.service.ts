import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DeviceItemService {
  deviceItemsCount: number  =1;
  Keys = ["Device 1"]
  constructor(){
    localStorage.setItem("Keys",JSON.stringify(this.Keys));
    localStorage.setItem("Device 1",JSON.stringify({name:"Device 1",OsType:"Windows",battery:100,memory:"4 GB"}))}

  // deviceItems = [
  //   {
  //     name: "Device 1",
  //     OsType: "Os 1",
  //     battery : 100,
  //     memory:"4 GB"
  //   },
  //   {
  //     name: "Device 2",
  //     OsType: "Os 2",
  //     battery : 100,
  //     memory:"4 GB"
  //   },
  //   {
  //     name: "Device 3",
  //     OsType: "Os 3",
  //     battery : 10,
  //     memory:"4 GB"
  //   },
  //   {
  //     name: "Device 4",
  //     OsType: "Os 4",
  //     battery : 50,
  //     memory:"4 GB"
  //   },
  //   {
  //     name: "Device 5",
  //     OsType: "Os 5",
  //     battery : 75,
  //     memory:"4 GB"
  //   },
  //   {
  //     name: "Device 6",
  //     OsType: "Os 6",
  //     battery : 100,
  //     memory:"4 GB"
  //   },

    

  // ];
  
  get(){
    let deviceItems = []
    var Keys = JSON.parse(localStorage.getItem("Keys"));
    
    for (let i = 0; i>Keys.length;i++){
        deviceItems.push(JSON.parse(localStorage.getItem(Keys[i])));
    }
    return deviceItems;
  }

  add(deviceItem) {
    var Keys = JSON.parse(localStorage.getItem("Keys"));
    Keys.push(deviceItem.name);
    localStorage.setItem("Keys",JSON.stringify(Keys));
    localStorage.setItem(deviceItem.name,deviceItem);
  }

  delete(deviceItem){
    

  }
}

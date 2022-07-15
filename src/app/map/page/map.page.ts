import {Component, OnInit} from '@angular/core';
import {Geolocation} from "@awesome-cordova-plugins/geolocation/ngx";
import {GoogleMap} from "@capacitor/google-maps";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})


export class MapPage implements OnInit {
  private lattitude: number = 48.52
  private longitude: number = 2.19
  private map;

  constructor(private geoloc: Geolocation) {
  }

  async ngOnInit() {
    this.getPosition()
  }

  getPosition = () => {
    this.geoloc.getCurrentPosition().then(data => {
      console.log('ok')
      console.log(data.coords.latitude)
      this.lattitude = data.coords.latitude
      this.longitude = data.coords.longitude
      this.createMap()
    })
  }

  createMap = () => {
    this.map = GoogleMap.create({
      element: document.getElementById('map'),
      id: 'my-map',
      apiKey: environment.apiKey,
      config: {
        center: {
          lat: this.lattitude,
          lng: this.longitude,
        },
        zoom: 8,

      }
  })
  }



}

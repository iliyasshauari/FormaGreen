import {Component, OnInit} from '@angular/core';
import {GreenArea} from "../greenArea/greenArea";
import {HttpErrorResponse} from "@angular/common/http";
import {GreenAreaService} from "../greenArea/greenArea.service";

@Component({
  selector: 'app-root',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css']
})
export class mapComponent implements OnInit{
  constructor(private greenAreaService: GreenAreaService) {}
  public greenAreas: GreenArea[];

  center: google.maps.LatLngLiteral


  ngOnInit(){
    this.getGreenAreas();
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

  public getGreenAreas(): void{
    this.greenAreaService.getGreenAreas().subscribe(
      (response: GreenArea[]) => {
        this.greenAreas = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}

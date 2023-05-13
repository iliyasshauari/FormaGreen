import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {GreenArea} from "./greenArea";
import {environment} from "../../environments/environment";


@Injectable({providedIn: 'root'})

export class GreenAreaService{
  private apiServerUrl = environment.apiBaseUrl;
  constructor (private http: HttpClient){}

  public getGreenAreas(): Observable<GreenArea[]> {
    return this.http.get<GreenArea[]>(`${this.apiServerUrl}/greenArea/all`);
  }

  public addGreenArea(greenArea: GreenArea): Observable<GreenArea> {
    return this.http.post<GreenArea>(`${this.apiServerUrl}/greenArea/add`, greenArea);
  }

  public updateGreenArea(greenArea: GreenArea): Observable<GreenArea> {
    return this.http.put<GreenArea>(`${this.apiServerUrl}/greenArea/update`, greenArea);
  }

  public deleteGreenArea(greenAreaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/greenArea/delete/${greenAreaId}`);
  }

}

import {Component, OnInit} from '@angular/core';
import {GreenArea} from "./greenArea";
import {GreenAreaService} from "./greenArea.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";



@Component({
  selector: 'app-root',
  templateUrl: 'greenArea.component.html',
  styleUrls: ['greenArea.css']
})


export class greenAreaComponent implements OnInit {
  public greenAreas: GreenArea[];
  public editGreenArea: GreenArea;
  public deleteGreenArea: GreenArea;
  constructor(private greenAreaService: GreenAreaService) {

  }

  ngOnInit(){
    this.getGreenAreas();
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

  public onOpenModal(greenArea: GreenArea, mode: String): void{
    const container = document.getElementById('main-container');
    const  button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');
    if (mode == 'add'){
      button.setAttribute('data-target', '#addGreenAreaModal');

    }
    if (mode == 'edit'){
      button.setAttribute('data-target', '#updateGreenAreaModal');
      this.editGreenArea =greenArea;
    }
    if (mode == 'delete'){
      button.setAttribute('data-target', '#deleteGreenAreaModal');
      this.deleteGreenArea = greenArea;
    }
    container!.appendChild(button);
    button.click();
  }

  public onOpenModal1(mode: String): void{
    const container = document.getElementById('main-container');
    const  button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');
    if (mode == 'add'){
      button.setAttribute('data-target', '#addGreenAreaModal');
    }
    container!.appendChild(button);
    button.click();
  }

  public onAddGreenArea(addForm: NgForm): void {
    document.getElementById('add-greenArea-form')!.click();
    this.greenAreaService.addGreenArea(addForm.value).subscribe(
      (response: GreenArea) => {
        console.log(response);
        this.getGreenAreas();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }



  public onUpdateGreenArea(greenArea: GreenArea): void {
    this.greenAreaService.updateGreenArea(greenArea).subscribe(
      (response: GreenArea) => {
        console.log(response);
        this.getGreenAreas();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteGreenArea(greenAreaId: number): void {
    this.greenAreaService.deleteGreenArea(greenAreaId).subscribe(
      (response: void) => {
        console.log(response);
        this.getGreenAreas();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchGreenAreas(key: string): void {
    console.log(key);
    const results: GreenArea[] = [];
    for (const greenArea of this.greenAreas) {
      if (greenArea.adress.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || greenArea.areaCode.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || greenArea.repName.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(greenArea);
      }
    }
    this.greenAreas = results;
    if (results.length === 0 || !key) {
      this.getGreenAreas();
    }
  }


}

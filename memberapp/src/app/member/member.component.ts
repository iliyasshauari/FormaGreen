import {Component, OnInit} from '@angular/core';
import {Member} from "./member";
import {MemberService} from "./member.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: 'member.component.html',
  styleUrls: ['member.css']
})

export class memberComponent implements OnInit {
  public members: Member[];
  public editMember: Member;
  public deleteMember: Member;
  constructor(private memberService: MemberService) {

  }

  ngOnInit(){
    this.getMembers();
  }

  public getMembers(): void{
    this.memberService.getMembers().subscribe(
      (response: Member[]) => {
        this.members = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(member: Member, mode: String): void{
    const container = document.getElementById('main-container');
    const  button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');
    if (mode == 'add'){
      button.setAttribute('data-target', '#addMemberModal');
    }
    if (mode == 'edit'){
      button.setAttribute('data-target', '#updateMemberModal');
      this.editMember =member;
    }
    if (mode == 'delete'){
      button.setAttribute('data-target', '#deleteMemberModal');
      this.deleteMember = member;
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
      button.setAttribute('data-target', '#addMemberModal');
    }
    container!.appendChild(button);
    button.click();
  }

  public onAddMember(addForm: NgForm): void {
    document.getElementById('add-member-form')!.click();
    this.memberService.addMember(addForm.value).subscribe(
      (response: Member) => {
        console.log(response);
        this.getMembers();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateMember(member: Member): void {
    this.memberService.updateMember(member).subscribe(
      (response: Member) => {
        console.log(response);
        this.getMembers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteMember(memberId: number): void {
    this.memberService.deleteMember(memberId).subscribe(
      (response: void) => {
        console.log(response);
        this.getMembers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchMembers(key: string): void {
    console.log(key);
    const results: Member[] = [];
    for (const member of this.members) {
      if (member.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || member.email.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(member);
      }
    }
    this.members = results;
    if (results.length === 0 || !key) {
      this.getMembers();
    }
  }


}

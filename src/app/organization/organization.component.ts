import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css'],

})
export class OrganizationComponent implements OnInit {
 flag:boolean=true;
 clrflag:boolean=true;
 searchValue:string='this';
 records=['id','name','email','phone'];
 messageFromChild: string = '';
 demoForm!:FormGroup;
  message!: string;
  constructor( private fb:FormBuilder, private service:DemoService) { }

  ngOnInit(): void {
    this.demoForm=this.fb.group({
      name:new FormControl(''),
      phone:new FormControl(''),
      email:new FormControl('')
    })
    this.message=this.service.singletonData("formComponent 2")
  }
  onButtonclick(){
    this.clrflag=!this.clrflag
  }
  parentAction(message:any){
    this.messageFromChild = message;
  }
  setValue(){
  this.demoForm.setValue({
    name:'N.Govardhana Reddy',
    phone:'7702082508',
    email:'n.govardhanareddy@gmail.com'
  })
  }
  patchValue(){
    this.demoForm.patchValue({
      name:'N.Govardhana Reddy'
    })

  }
}

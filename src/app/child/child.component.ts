import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers:[DemoService]
})
export class ChildComponent implements OnInit {
 @Input() message!:string;
 @Output() eventFromChild=new EventEmitter();
  mesg!: string;
  constructor(private service:DemoService ) { }

  ngOnInit(): void {
this.mesg=this.service.singletonData('from component 1')
  }

  takeAction(){
this.eventFromChild.emit("child triggered");
  }
}

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() labelButton: string | undefined;
  @Output() ValeurEmitter = new EventEmitter();
 
  constructor() { }

  ngOnInit(): void {
  }
   
  onClickbut() {
    this.ValeurEmitter.emit();
  }
  
}

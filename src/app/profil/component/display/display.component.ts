import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {

  @Input() users : [];
  private img = '/assets/img/cat.jpeg'
  private avatar = '/assets/icon/profilIcon.png'
  constructor() { }


  ngOnInit() {}

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export class VideoCardComponent implements OnInit {
  constructor() {}

  @Input() video: any;
  @Input() isSelected: boolean = false;

  ngOnInit(): void {}
}

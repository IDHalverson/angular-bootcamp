import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {
  @Input() videos: any[] = [];

  constructor() {}

  @Input() clickedId: string = '';
  @Input() isLoading: boolean = false;
  @Input() selectedVideo: any;

  ngOnInit(): void {}
}

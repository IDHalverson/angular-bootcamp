import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss'],
})
export class VideoDashboardComponent implements OnInit {
  public videos: Observable<any[]> = new Observable<any[]>();
  public selectedVideo: Observable<any> = new Observable<any>();

  public isLoading: boolean = false;

  constructor(
    private http: HttpClient,
    public videoService: VideoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setupObservables();
  }

  public setupObservables() {
    this.videos = this.videoService.fetchVideos();
    this.selectedVideo = combineLatest([
      this.videos,
      this.route.queryParams,
    ]).pipe(
      map(([videos, queryParams]) =>
        videos.find((v: any) => v.id === queryParams['videoId'])
      )
    );
  }

  public getVideo() {
    // return this.videos. .find((video) => video.id === this.clickedVideoId);
  }
}

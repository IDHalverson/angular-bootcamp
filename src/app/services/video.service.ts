import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VideoService implements OnInit {
  constructor(private http: HttpClient) {}

  public isLoading = false;

  ngOnInit() {}

  fetchVideos(): Observable<any[]> {
    this.isLoading = true;
    return this.http.get('https://api.angularbootcamp.com/videos').pipe(
      map((data) => (data as any[]).slice(0, 5)),
      tap(() => (this.isLoading = false))
    );
  }

  loadSingleVideo(id: string): Observable<any> {
    return this.http.get<any>('https://api.angularbootcamp.com/videos/' + id);
  }
}

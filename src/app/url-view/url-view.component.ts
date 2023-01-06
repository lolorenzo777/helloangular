import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-url-view',
  templateUrl: './url-view.component.html',
  styleUrls: ['./url-view.component.scss']
})

export class UrlViewComponent implements OnInit {
  isAuth = false;
  urls: any[]
  urlSubscription: Subscription | undefined;

  constructor(private urlService: UrlService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000
    );

    this.urls = []
  }

  ngOnInit() {
    //this.urls = this.urlService.urls;
    this.urlSubscription = this.urlService.urlSubject.subscribe(
      (urls: any[]) => {
        this.urls = urls;
      }
    )
    this.urlService.emitUrlSubject();
  }

  onON() {
    this.urlService.SwitchOnAll();
  }

  onOFF() {
    this.urlService.SwitchOffAll();
  }

}

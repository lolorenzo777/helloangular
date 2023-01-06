import { Component, OnInit } from '@angular/core';
import { UrlService } from '../services/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-url',
  templateUrl: './single-url.component.html',
  styleUrls: ['./single-url.component.scss']
})

export class SingleUrlComponent implements OnInit {

  name: string = "name";
  url: string = "URL";
  tags: string = "#";

  constructor(private urlService: UrlService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.name = this.route.snapshot.params['id'];
    const id = this.route.snapshot.params['id'];
    const url = this.urlService.getUrlbyid(+id);
    if (url != null) {
      this.name = url.name;
      this.tags = url.tags;
      this.url = url.url;
    }
  }

}

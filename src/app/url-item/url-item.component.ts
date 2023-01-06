import { getSafePropertyAccessString } from '@angular/compiler';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UrlService } from '../services/url.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-url-item',
  templateUrl: './url-item.component.html',
  styleUrls: ['./url-item.component.scss']
})

export class UrlItemComponent {

  @Input() url: string = "https://www";
  @Input() urlName: string = "default";
  @Input() tags: string = "";
  @Input() indexURL: number = -1;
  @Input() checked: boolean = false;
  @Input() id: number = 0;

  constructor(private urlService: UrlService) {
  }

  ngOnInit() {
    this.checked = this.tags === "#on";
  }


  getTags() {
    return this.tags;
  }

  getChecked() {
    this.checked = this.tags === "#on";
    return this.checked;
  }

  changeONOFFevent(e: MatSlideToggleChange) {
    console.log('changeONOFFevent')

    //this.changeEvent.emit(e.checked);
    this.checked = e.checked;

    if (this.checked === true) {
      this.urlService.SwitchOnIndex(this.indexURL)
    } else if (this.checked === false) {
      this.urlService.SwitchOffIndex(this.indexURL)
    }
  }
}

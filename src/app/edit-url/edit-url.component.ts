import { Component } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-edit-url',
  templateUrl: './edit-url.component.html',
  styleUrls: ['./edit-url.component.scss']
})

export class EditUrlComponent {

  defaultTags = "#off"

  //urlFormControl = new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]);

  constructor(private urlService: UrlService, private router: Router) {

  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const name = form.value['name'];
    const tags = form.value['tags'];
    const url = form.value['url'];
    this.urlService.addURL(name, tags, url);
    this.router.navigate(['/urls'])
  }

}


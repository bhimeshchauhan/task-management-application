import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private _location: Location,
    private router: Router){}
  previousPage = () => {
    this.router.navigate(['/']);
    // this._location.back();
  }
}

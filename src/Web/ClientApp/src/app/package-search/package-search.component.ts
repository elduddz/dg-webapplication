import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-package-search',
  templateUrl: './package-search.component.html'
})
export class PackageSearchComponent {
  public packages: Package[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    }

    public Go() {
        let search = (<HTMLInputElement>document.getElementById("search")).value;
        alert(search);
    }
}

interface Package {
  Id: string;
  Version: number;
}

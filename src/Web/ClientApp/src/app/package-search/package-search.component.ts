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
        var search = document.getElementById("search").nodeValue;
        alert(search);
    }
}

interface Package {
  Id: string;
  Version: number;
}

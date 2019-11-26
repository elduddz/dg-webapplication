import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-package-search',
  templateUrl: './package-search.component.html'
})
export class PackageSearchComponent {
  public packages: Package[];
  public search: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    }

    public Go() {
        alert(search);
    }
}

interface Package {
  Id: string;
  Version: number;
}

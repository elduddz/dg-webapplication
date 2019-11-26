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
    private _http: HttpClient;
    private _baseUrl: string;

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this._http = http;
        this._baseUrl = baseUrl;
    }

    public Go() {
        this._http.get<Package[]>(this._baseUrl + 'nugetsearch?search=' + this.search).subscribe(result => {
            this.packages = result;
        }, error => console.error(error));
    }
}

interface Package {
  Id: string;
  Version: string;
}

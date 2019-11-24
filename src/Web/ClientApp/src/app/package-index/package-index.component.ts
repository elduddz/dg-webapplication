import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-package-index',
    templateUrl: './package-index.component.html'
})
export class PackageIndexComponent {
  public frameworks: Framework[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Framework[]>(baseUrl + 'frameworks').subscribe(result => {
      this.frameworks = result;
    }, error => console.error(error));
  }
}

interface Framework {
  name: string;
}

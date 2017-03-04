import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h2>{{ title }}</h2><users></users>'
})
export class AppComponent {
  title: string = "Test";
}

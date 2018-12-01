import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadedTemplate: string = 'recipe';

  onTemplateSelected(template: string) {
    this.loadedTemplate = template;
  }
}

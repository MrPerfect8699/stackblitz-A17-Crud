import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { UsersComponent } from './app/users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsersComponent],
  template: `
    <app-users></app-users>
  `,
})
export class App {
  name = 'Angular';
  changeName() {
    this.name = 'Somanath';
  }
}

bootstrapApplication(App);

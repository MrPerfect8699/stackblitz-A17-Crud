import { Component } from '@angular/core';
import { MockApiService } from '../mock-api.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { IUser } from '../interfaces/user.interface';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [HttpClientModule, MatTableModule, NgIf],
  providers: [MockApiService],

  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'name', 'username', 'email'];
  dataSource!: IUser[];
  constructor(private mockApi: MockApiService) {}
  ngOnInit() {
    this.mockApi.getUsers().subscribe((response) => {
      console.log(response);
      this.dataSource = response;
    });
  }
}

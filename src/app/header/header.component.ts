import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dbService: DataStorageService,
    private authService: AuthService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.dbService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dbService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

}

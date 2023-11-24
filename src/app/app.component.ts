import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DrugAddEditComponent } from './drug-add-edit/drug-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Farmacia-angular';
  constructor(private _dialog: MatDialog) {}

  openAddEditDrugForm() {
    this._dialog.open(DrugAddEditComponent);
  }
}

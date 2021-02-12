import { Component, Input } from '@angular/core';
import { User } from '../user/user.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})

export class TableComponent {
  @Input() index: number;
  @Input() user: User;
}

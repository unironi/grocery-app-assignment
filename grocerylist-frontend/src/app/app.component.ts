import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GroceryFormComponent } from './grocery-form/grocery-form.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GroceryListComponent, TotalCostComponent, GroceryFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'grocerylist-frontend';
}

import { Component, inject } from '@angular/core';
import { GroceryService } from '../../service/grocery.service';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-total-cost',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './total-cost.component.html',
  styleUrl: './total-cost.component.css'
})
export class TotalCostComponent {

  private groceryService = inject(GroceryService);
  items$ = this.groceryService.items$;

  totalCost$ = this.items$.pipe(
    map(items => items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2))
  );

  ngOnInit(): void {
    this.groceryService.getItems();
  }

}

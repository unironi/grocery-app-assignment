import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GroceryService } from '../../service/grocery.service';
import { Item } from '../../service/item.model';

@Component({
  selector: 'app-grocery-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  private groceryService = inject(GroceryService);
  items$ = this.groceryService.items$;

  ngOnInit(): void {
    this.groceryService.getItems();
  }

  deleteItem(id: number | undefined): void {
    if (id == null) {
      console.warn('deleteItem called without an id');
      return;
    }

    this.groceryService.deleteItem(id).subscribe();
  }

  saveItem(item: Item): void {
    if (!item.id) return;

    this.groceryService.updateItem(item.id, item).subscribe(() => {
      item.editing = false;
    })
  }

  startEdit(item: Item) {
    item.editing = true;
    item._backup = { ...item };
  }
  
  cancelEdit(item: Item) {
    Object.assign(item, item._backup);
    item.editing = false;
  }
}

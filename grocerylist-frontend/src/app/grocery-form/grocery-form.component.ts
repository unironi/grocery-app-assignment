import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { GroceryService } from '../../service/grocery.service';
import { Item } from '../../service/item.model';


@Component({
  selector: 'app-grocery-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './grocery-form.component.html',
  styleUrls: ['./grocery-form.component.css']
})
export class GroceryFormComponent {

  constructor(private groceryService: GroceryService) {}

  ngOnInit(): void {
    this.groceryService.getItems();
  }

  addItem(name: string, price: number = 0, quantity: number = 1): void {
    const newItem: Item = {name, price, quantity, purchased: false, _backup: {name, price, quantity}};
    this.groceryService.addItem(newItem).subscribe();
  }
}
